---
highlight: a11y-dark
theme: qklhk-chocolate
title: Docker + GitHub Active 自动部署
date: 2024-03-09 11:30:52
tags: Docker
categories: [自动化部署]
sticky: true
star: true
---

## Docker 介绍 🐳

Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。

- **镜像（Image）** ：Docker 镜像（Image），就相当于是一个 root 文件系统。比如官方镜像 ubuntu:16.04 就包含了完整的一套 Ubuntu16.04 最小系统的 root 文件系统。
- **容器（Container）** ：镜像（Image）和容器（Container）的关系，就像是面向对象程序设计中的类和实例一样，镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等。
- **仓库（Repository）** ：仓库可看成一个代码控制中心，用来保存镜像。

### Docker 命令 🐳

- `docker ps -a` 查看所有容器
- `docker images` 查看所有镜像
- `docker stop [name/id]` 停止容器
- `docker rm [name/id]` 删除容器,加 `-f` 是强制删除
- `docker inspect [name/id]` 获取容器/镜像的元数据
- `docker logs e` 日志
- `docker exec -it [name/id] /bin/sh`
- `docker run -p 81:80 -d --name [name] nginx` 启动容器
- `docker run -p 81:80 -d -v /Users/zxl/:/usr/share/nginx/html  --name [name] nginx`
  - -p 端口映射
  - -V 数据卷，文件映射
  - -d 后台运行
  - `--name` 定义容器名称
- `docker login -u 用户名 -p 密码` 登录仓库

## Docker 部署 🐳

**原理：本地打包 docker 镜像，然后上传到 docker 镜像服务器，然后在服务器上登录 docker 账号拉取镜像，最后启动容器，完成部署 ✅**

1.  安装  [Docker](https://www.docker.com/get-started)
2.  在项目根目录创建  `Dockerfile`  文件

    ```text
    FROM node:14
    COPY ./ /app
    WORKDIR /app
    RUN yarn install && yarn build

    FROM nginx
    RUN mkdir /app
    COPY --from=0 /app/dist /app
    COPY nginx.conf /etc/nginx/nginx.conf
    ```

3.  在项目根目录创建  `.dockerignore`  文件
    - 设置  `.dockerignore`  文件能防止  `node_modules`  和其他中间构建产物被复制到镜像中导致构建问题。
    ```text
    **/node_modules
    **/dist
    ```
4.  在项目根目录创建  `nginx.conf`  文件
    - `Nginx`  是一个能在 Docker 容器中运行的 HTTP(s) 服务器。它使用配置文件决定如何提供内容、要监听的端口等。参阅  [Nginx 设置文档](https://www.nginx.com/resources/wiki/start/topics/examples/full/)  以了解所有可能的设置选项。
    - 下面是一个简单的  `Nginx`  设置文件，它会在  `80`  端口上提供你的 Vue 项目。`页面未找到` / `404`  错误使用的是  `index.html`，这让我们可以使用基于  `pushState()`  的路由。
    ```text
    user  nginx;
    worker_processes  1;
    error_log  /var/log/nginx/error.log warn;
    pid        /var/run/nginx.pid;
    events {
      worker_connections  1024;
    }
    http {
      include       /etc/nginx/mime.types;
      default_type  application/octet-stream;
      log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                        '$status $body_bytes_sent "$http_referer" '
                        '"$http_user_agent" "$http_x_forwarded_for"';
      access_log  /var/log/nginx/access.log  main;
      sendfile        on;
      keepalive_timeout  65;
      server {
        listen       80;
        server_name  localhost;
        location / {
          root   /app;
          index  index.html;
          try_files $uri $uri/ /index.html;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
          root   /usr/share/nginx/html;
        }
      }
    }
    ```
5.  打包镜像并上传

    - [name] 就是镜像名称
    - [images-name]就是在 Docker Hub 创建的镜像名称

    ```text
    #deploy.sh

    docker build --platform linux/amd64 -t [name]:latest .
    docker tag [name]:latest [images-name]
    docker push [images-name]
    ```

6.  服务器操作

    - 执行脚本`./deploy.sh`
    - 主要操作就是拉取镜像，暂停容器，删除容器，重新运行镜像
    - 最后清除一下没有使用的容器和镜像
    - 后期优化也可以用 `docker-compose` 来做更新操作

    ```text
    #deploy.sh

    docker pull [images-name]
    docker stop [name]
    docker rm [name]
    docker run --name [name] -d -p 8081:80 [images-name]
    docker image prune -f
    docker container prune -f
    ```

## GitHub Active 自动部署 🐢

**原理: 通过监听代码变化，触发定制任务，进行自动打包代码，镜像上传和登录服务器进行脚本执行，完成部署 ✅**

- 在项目根目录创建 `yml` 文件，用于配置自动化流程任务
- mkdir .github
- mkdir .github/workflows
- vim .github/workflows/deploy.yml

### yml 文件介绍 🐢

```yml
name: CI/CD
# 触发条件为 push
on:
  push:
    branches:
      - main
    # 修改文件范围, 不在范围内不触发
    paths:
      - ".github/workflows/**"
      - "__test__/**"
      - "src/**"
# 任务
jobs:
  test:
    # 运行的环境
    runs-on: ubuntu-latest
    # 步骤
    steps:
      - uses: actions/checkout@v2 # git pull
      - name: Use Node.js
        uses: actions/setup-node@v1
        with:
          node-version: 14
      - name: 打包镜像, 上传 Docker Hub
        run: |
          docker login -u ${{ secrets.REGISTRY_USERNAME }} -p ${{ secrets.REGISTRY_PASSWORD }}
          docker build --platform linux/amd64 -t [name]:latest  .
          docker tag [name]:latest ${{ secrets.DOCKER_REPOSITORY }}
          docker push ${{ secrets.DOCKER_REPOSITORY }}

      - name: 登录服务器, 执行脚本
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.REMOTE_HOST }}
          username: root
          password: ${{ secrets.REMOTE_PASSWORD }}
          # 执行脚本
          script: |
            ./deploy.sh
```

- `${{ secrets.REMOTE_PASSWORD }}` 变量主要存储一些敏感信息，配置位置如下图
  ![image.png](./img/img1.jpg)

### 自动执行任务

- 成功截图
  ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6592e11183a6431e82c7e59e10b9dce6~tplv-k3u1fbpfcp-watermark.image?)

- 失败 n 次截图
  ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/18417346ac7740b7833c4e18f4ed9fe3~tplv-k3u1fbpfcp-watermark.image?)

## 结语

本次部署记录 📝 到此结束，其实整体没有难点，看着文档一点一点尝试，都可以完整的走完这个流程，技术日新月异，偶尔做一些工作职责之外的事，挺有意思 🏂

- [vue-cli 官方文档部署章节](https://cli.vuejs.org/zh/guide/deployment.html#docker-nginx)
- [github actions 中文文档](https://docs.github.com/cn/actions/getting-started-with-github-actions)
