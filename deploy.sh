#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
# git 提交源文件
git add .
git commit -m ' 更新博客 '
git push