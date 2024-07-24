---
icon: fa-solid fa-book-open-reader
date: 2022-01-01
category:
  - 工具
tag:
  - vscode
---

# vscode

## 如何关闭 vscode 的 rust-analyzer 插件的自动类型提示

打开vode的设置界面搜索：

**typeHints** 和 **parameterHints** ，并设置为 diable

或者直接打开 vscode 的配置文件 /C:/Users/your\_user\_name/AppData/Roaming/Code/User/settings.json：

并添加：

```
 "rust-analyzer.inlayHints.typeHints.enable": false,
 "rust-analyzer.inlayHints.parameterHints.enable": false
```

参考：

-   https://rust-analyzer.github.io/manual.html#configuration
-   https://stackoverflow.com/questions/69909997/can-i-remove-type-annotation-help-from-rust-analyzer

谷歌关键字： rust analyzer disable type hints