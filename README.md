# contents-repository-template
Railwayコンテンツリポジトリのテンプレート

## 使い方
新たにコンテンツリポジトリを作成する  
1. このリポジトリをtemplateに設定し、リポジトリを新規作成する。
2. Actions secrets and variablesで環境変数を設定する。
  - キーは`TECHTRAIN_API_URL`
  - apiのドメインを設定してください。
3. `contents/` にstationを作成する。

## ディレクトリ構成
```
├.github
├contents
│  ├railway.json
│  ├station01
│  │  ├question.yaml
│  │  └question.md
```
## format
```yaml
stationId:
title:
sub_title:
confirmation_method:
design_contents:
skill_id:
abilities:
railway_station_clear_conditions:
  - id:
    contents:
railway_station_clear_hints:
  - id:
    content:
```
Python Railwayのみ以下の形式
```yaml
stationId:
title:
 confirmation_method: form
abilities:
  - id:
    name:
    ability_rank:
    ability_category:
  - id:
    name:
    ability_rank:
    ability_category:
railway_station_answers:
  - id:
    content:
```