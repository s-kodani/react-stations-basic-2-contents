import yaml from 'js-yaml'
import fs from 'fs'
import axios from 'axios'

function main() {
  const changedFileNumber = process.argv.length
  if (changedFileNumber < 4) new Error('Changed file not found...')

  const railwayId = JSON.parse(fs.readFileSync('./contents/railway.json', 'utf8')).railwayId
  const title = process.argv[2]
  const API_URL = process.env.TECHTRAIN_API_URL
  const url = `${API_URL}/api/v2/railway_stations`

  // プルリクタイトルからバージョンを取得
  const versionExp = title.match(/(\d+)\.(\d+)\.(\d+)/)
  if (versionExp === null) return console.error('[Error] バージョンを取得できませんでした')
  const version = versionExp[0]

  // 差分stationの取得
  const changedFileList = []
  for (let i = 3; i < changedFileNumber; i++) {
    changedFileList.push(process.argv[i])
  }

  const changedStationList = changedFileList.flatMap((file) => {
    const station = file.match(/station\d+/)
    if (station) return station
    return []
  })
  const changedStationDetailList = changedStationList.map((station) => {
    const mdPath = `./contents/${station}/question.md`
    const yamlPath = `./contents/${station}/question.yaml`
    const questionYaml = yaml.load(fs.readFileSync(yamlPath, 'utf8'))
    const questionMd = fs.readFileSync(mdPath, 'utf8')

    if (!questionYaml['abilities']) {
      questionYaml['abilities'] = []
    }

    return {
      ...questionYaml,
      question: questionMd,
      order: Number(station.replace('station', '')),
    }
  })

  console.log('domain' + API_URL)
  console.log('url' + url)
  axios
    .post(url, {
      id: railwayId,
      version: version,
      stations: changedStationDetailList,
    })
    .then((res) => {
      console.log(`[Success]${res.status}`)
    })
    .catch((err) => {
      const result = err.response
      console.log(err)
      console.error(`[Error]${result.status}: ${result.statusText}\n${JSON.stringify(result.data.errors)}`)
    })
}

main()
