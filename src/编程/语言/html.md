---
icon: fa-solid fa-book-open-reader
date: 2022-01-01
category:
  - 语言
tag:
  - html
---

# html

## jquery两次点击实现不同的效果
```
$(document).ready(function(){
    $(function () {
         flag=0;
        $('#sub1a').click(function() {
            if (flag==0){
                 console.log(flag)
                $(this).children().attr('class','glyphicon glyphicon-plus')
                flag=1;
            }else{
                 console.log(flag)
                $(this).children().attr('class','glyphicon glyphicon-minus')
                flag=0;
            }
        });
    });
});
```