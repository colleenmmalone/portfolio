#!/bin/bash

git add .
git commit -m "$1"
git push
git push origin dev:master
git checkout master
git pull
npm run deploy
git checkout dev

