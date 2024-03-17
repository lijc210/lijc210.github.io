#!/usr/bin/env bash

# 订阅链接地址
SUBSCRIBE="https://91merry.com.mysub.icu/link/6DOXi5hW8NN5U0qY?clash=2"
# web-ui存放目录，留空则保持默认不修改
WEB_UI=""
# API 端口，留空则保持默认不修改
CONTROLLER_API_PROT=""
# API 口令，留空则保持默认不修改
SECRET="sEtnxAc6g8HjKw"

CLASH_CONFIG="/etc/clash/config.yaml"

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