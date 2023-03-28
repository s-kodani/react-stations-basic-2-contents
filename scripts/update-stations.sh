#!/bin/bash

changedFileName=""
title=$1

for file in $(git diff HEAD^ HEAD --name-only) ; do
  changedFileName="${changedFileName} ${file}"
done
npm run push "$title" $changedFileName