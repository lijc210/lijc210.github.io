---
icon: edit
date: 2022-01-01
category:
  - 工具
tag:
  - clash
---

# clash

## docker clash安装配置

docker配置
~/.config/docker-compose.yml
```
version: '3'
services:
  clash:
    image: ghcr.io/dreamacro/clash
    restart: always
    volumes:
      - ~/.config/clash/config.yaml:/root/.config/clash/config.yaml:ro
    ports:
      - "7890:7890"
      - "7891:7891"
      - "9090:9090" # The External Controller (RESTful API)
    network_mode: "bridge"
    restart: always
  clash-ui:
    image: haishanh/yacd
    container_name: clash-ui
    ports:
      - 1234:80
    network_mode: "bridge"
    restart: always
```
启动
docker-compose up -d
管理界面
http://127.0.0.1:9090/ui


## linux下配置定时更新订阅
clash.sh

```
#!/usr/bin/env bash

# 订阅链接地址
SUBSCRIBE=""
# web-ui存放目录，留空则保持默认不修改
WEB_UI=""
# API 端口，留空则保持默认不修改
CONTROLLER_API_PROT="9090"
# API 口令，留空则保持默认不修改
SECRET=""

CLASH_CONFIG="~/.config/clash/config.yaml"

if [ -z "${SUBSCRIBE}" ]; then
    echo "Subscription address cannot be empty"
    exit 1
fi

sudo systemctl stop clash

wget --no-proxy -O ${CLASH_CONFIG} ${SUBSCRIBE}

if [ -n "${WEB_UI}" ]; then
sed -i "s?^#\{0,1\} \{0,1\}external-ui.*?external-ui: ${WEB_UI}?" ${CLASH_CONFIG}
fi

if [ -n "${CONTROLLER_API_PROT}" ]; then
sed -i "s?^external-controller.*?external-controller: '0.0.0.0:${CONTROLLER_API_PROT}'?" ${CLASH_CONFIG}
fi

if [ -n "${SECRET}" ]; then
sed -i "s?^secret.*?secret: '${SECRET}'?" ${CLASH_CONFIG}
fi

sudo systemctl start clash
```
添加定时任务
```
*/30 * * * * bash ~/.config/clash/clash.sh
```