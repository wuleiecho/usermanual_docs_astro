---
title: Unit使用方法-基于docker镜像方式
description: Lorem ipsum dolor sit amet - 4
layout: ../../layouts/MainLayout.astro
---

#### 下载docker镜像到本地

```bash
docker pull nginx/unit:1.29.0-python3.11
```

#### 创建并启动容器，映射容器端口8000到主机端口8080，映射当前目录到容器内/www目录，并启动unit

```bash
docker run -d --mount type=bind,src="$(pwd)",dst=/www  \
      -p 8080:8000 nginx/unit:1.29.0-python3.11
```

#### 查看已运行的容器，并获取CONTAINER ID

```bash
docker ps -a | grep unit
```

#### 查询容器IP地址: 容器网络配置使用默认的bridge模式

```bash
docker inspect ${CONTAINER ID} | grep IPAddress
```

#### unit配置文件：对应静态路由功能，位于当前目录下，名称为test.json，起始页面地址为/www/dist/index.html

```json
{

    "listeners": {
        "172.17.0.2:8000": {
            "pass": "routes"
        }
    },

    "routes": [
        {
            "action": {
                "share": "/www/dist$uri"
            }
        }
    ]
}
```

#### 发送配置文件到unit进程

```bash
docker exec -ti ${CONTAINER ID} curl -X PUT --data-binary @/www/test.json  \
      --unix-socket /var/run/control.unit.sock  \
      http://localhost/config
```

#### host机器上测试如下命令，确认端口可以访问

```bash
curl -i http://localhost:8080
```

#### 正确的反馈信息如下：

```bash
HTTP/1.1 200 OK
Last-Modified: Thu, 19 Jan 2023 14:12:59 GMT
ETag: "63c94feb-d6"
Content-Type: text/html
Server: Unit/1.29.0
Date: Wed, 01 Feb 2023 03:18:58 GMT
Content-Length: 214

<!DOCTYPE html>
<script>
	// Redirect your homepage to the first page of documentation.
	// If you have a landing page, remove this script and add it here!
	window.location.pathname = `/zh/introduction`;
</script>
```