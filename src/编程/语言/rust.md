---
icon: fa-solid fa-book-open-reader
date: 2022-01-01
category:
  - 语言
tag:
  - rust
---

# rust
## rust 教程
* [rust 圣言](https://course.rs/)
* [rust 菜鸟教程](https://www.runoob.com/rust/rust-tutorial.html)

## rustlings 练习
MacOS/Linux
```
curl -L https://raw.githubusercontent.com/rust-lang/rustlings/main/install.sh | bash
```
运行成功之后，当前目录会有rustlings，使用 vscode 打开此文件
在此目录终端运行rustlings watch，根据提示修改代码，保存会自动验证，成功后根据提示练习下一题
在rustlings watch下输入 hint 可以获得提示。

## rust 安装
在 Linux 或 macOS
$ curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
## 在windows 安装
https://course.rs/first-try/installation.html#在-windows-上安装-rustup

## rust更换源 ~.cargo/config.toml

```
[http]
check-revoke = false

# 注释使用默认
[source.crates-io]
replace-with = 'rsproxy'

[source.ustc]
registry = "git://mirrors.ustc.edu.cn/crates.io-index"

# 字节跳动
[source.rsproxy]
registry = "https://rsproxy.cn/crates.io-index"
```
## 创建项目
cargo new rust_test

## 升级rust
rustup update
## 升级cargo
cargo install cargo
## 升级所有依赖
cargo update
## 升级指定依赖
cargo update -p axum
## 搜索包
cargo search log --registry crates-io
## 添加包
cargo add log
## 更新所有已安装的Cargo插件和二进制文件(非项目)
cargo install cargo-update
cargo install-update -a
cargo install-update cargo


cargo run
cargo doc

## 单元测试
cargo test -- --test-threads=1
cargo test -- --show-output
cargo test one_hundred
cargo test --no-run 

## 示例代码
cargo run --example eg1_variable


## 基准测试（只能在非 stable 下使用）
安装 nightly 版本：
rustup install nightly
使用以下命令确认版本已经安装成功
rustup toolchain list
rustup override set nightly
切换回 stable 版本
rustup override set stable
cargo bench

## cargo git
cargo install --git https://github.com/mitsuhiko/rye rye

