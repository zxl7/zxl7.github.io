#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
# git 提交源文件
git add .
git commit -m '更新博客 '
git push

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

echo 'zxl7.top' > CNAME
# 如果是发布到自定义域名
git init
git add -A
git commit -m '自动更新博客文章~'
git push -f git@github.com:zxl7/zxl7.github.io.git main:gh-pages
cd -

