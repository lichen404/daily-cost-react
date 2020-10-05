#!/usr/bin/env bash
yarn build &&
cd build &&
git init &&
git add . &&
git commit -m "deploy" &&
git remote add origin git@github.com:lichen404/daily-cost-react-website.git &&
git push origin master -f
cd -