---
order: 0
title: 开发前必读
---

本项目为数栈 UI4.0 规范样式

项目预览地址：http://172.16.8.108:8989/docs/react/getting-started-cn (内网访问)

## 如何在数栈应用中使用

1. package.json 中添加依赖

``` json
{
    "dependencies": {
        "ant-design-dtinsight-theme": "1.0.2"
    }
}
```

2. src/root.tsx 文件中导入 src/stylesheet/dt-theme 以及 reset.less

``` javascript
// reset.less中已经引入了antd.less，故在项目中无需再引入antd样式文件
import 'ant-design-dtinsight-theme/theme/dt-theme/reset.less';
import 'ant-design-dtinsight-theme/theme/dt-theme/index.less';
```

## 可用样式变量

使用方式：在 scss 文件中导入此项目中的 const.scss 文件

``` scss
@import 'ant-design-dtinsight-theme/theme/dt-theme/const.scss';
```
