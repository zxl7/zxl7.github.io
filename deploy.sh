#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e

git push

# 生成静态文件
npm run build
# 进入生成的文件夹
cd docs/.vuepress/dist
# 如果是发布到自定义域名
# echo 'syzxl.top' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/zxl7/zxl7.github.io master:gh-pages
cd -
