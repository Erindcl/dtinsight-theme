---
category: Components
cols: 1
type: 数据展示
title: Table
subtitle: 表格
---

展示行列数据。

## 设计规则

列表分为表头、表内容、和底部分页器、操作按钮组成，表头高度 44px,底色#FAFAFA，列名字体 Medium,内容区域列表高度 56px，字体 12px #333。规范中分页 Pagination 都需设置 `size="small"`

## API

|类名  |说明  |使用示例  |
|---------|---------|---------|
|.dtinsight-table-fixed-comm  | 用于单屏表格的父元素，使得表格固定头部与尾部，中间滚动   | 固定高度表   |
|.dtinsight-table-one-column  | 只有一列的表格，主要修改单元格左内边距   | 单列表格   |
|.dtinsight-pagination-lower  | 设置表格中的分页所占高度为 44px  | 紧凑型 |
