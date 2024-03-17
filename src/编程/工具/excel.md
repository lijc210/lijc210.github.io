---
icon: edit
date: 2022-01-01
category:
  - 工具
tag:
  - excel
---

# excel

## A列中的值是否在B列中存在

在第三列中输入以下函数，拉到最底下。
```
=VLOOKUP(A1,B:B,1,FALSE)
```

