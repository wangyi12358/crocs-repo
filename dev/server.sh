#!/bin/bash

# 检查参数是否为空
if [ -z "$1" ]; then
  echo "Usage: $0 <branch_name>"
  exit 1
fi

# 设置变量
BRANCH_NAME="$1"

# 检查参数是否为空
if [ -z "$BRANCH_NAME" ]; then
  echo "Branch name is empty."
  exit 1
fi

git pull origin $BRANCH_NAME

cd ../apps/server

pnpm install

npm run prisma:generate

npm run build

pm2 restart all
