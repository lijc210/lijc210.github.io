---
icon: edit
date: 2022-01-01
category:
  - 框架
tag:
  - tauri
---

# tauri

## tauri 桌面端开发
## tauri 移动端开发

### 安装基础依赖
https://beta.tauri.app/2/guide/prerequisites/
包含需要安装Android Studio和Xcode
### 升级安装tauri-cli
cargo install tauri-cli --version "^2.0.0-alpha"

### 创建项目
```
cargo create-tauri-app
cd tauri-mobile
pnpm add -D internal-ip
pnpm i
pnpm update @tauri-apps/cli@next @tauri-apps/api@next
```
```
src-tauri/
cargo add tauri@2.0.0-alpha.<VERSION>
cargo add tauri-build@2.0.0-alpha.<VERSION> --build
```
按照文档修改以下4个文件
vite.config.ts
src-tauri/tauri.conf.json
src-tauri/Cargo.toml
src-tauri/src/main.rs
新增
src-tauri/src/lib.rs
src-tauri/src/mobile.rs

### 启动和编译
ios需要：
brew install cocoapods

pnpm tauri [android|ios] init
pnpm tauri [android|ios] dev
pnpm tauri [android|ios] build

pnpm tauri [android|ios] dev --open 可打开Android Studio和Xcode

###参考文档
https://beta.tauri.app/2/guide/create/mobile/#conditional-compilation
https://dev.to/adimac93/tauri-mobile-for-ios-4dp6
https://zhuanlan.zhihu.com/p/611630596
https://www.http5.cn/index.php/archives/22/