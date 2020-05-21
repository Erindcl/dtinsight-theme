---
order: 5
title:
  zh-CN: 固定高度表（自带分页）
---

## zh-CN

固定表格头部、尾部。中间视数据多少可滚动。可作为单屏表格数据展示使用

- 为表格父元素或者直接在表格上添加类名 `dt-table-fixed-base`
- 计算当前表格以外的元素所占高度（如 300px）
- 再为表格设置`style={{ height: 'calc(100vh - 300px)' }}`
- 特别的，`dt-table-fixed-base` 用于自带分页的表格
- 底部分页通过 footer 实现的表格请使用类名 `dt-table-fixed-contain-footer`

```jsx
import { Table, Divider } from 'antd';

const columns = [
  { title: 'Name', fixed: 'left', dataIndex: 'name', key: 'name', width: 200 },
  { title: 'Age', dataIndex: 'age', key: 'age', width: 100 },
  { title: 'Address', dataIndex: 'address', key: 'address', width: 200, ellipsis: true },
  { title: 'description', dataIndex: 'description', key: 'description', width: 400 },
  {
    title: 'Action',
    dataIndex: '',
    width: 200,
    key: 'x',
    fixed: 'right',
    render: (text, record) => (
      <span>
        <a>Invite</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
    ),
  },
];

const data = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Not Expandable',
    age: 29,
    address: 'Jiangsu No. 1 Lake Park',
    description: 'I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 4,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  },
];

const pagination = {
  current: 1,
  pageSize: 10,
  size: 'small',
  total: 30,
  showTotal: (total) => <span>
    共<span style={{ color: '#3F87FF' }}>{total}</span>条数据，每页显示15条
  </span>
}

ReactDOM.render(
  <div>
    <Table
      columns={columns}
      dataSource={data}
      style={{ height: 'calc(100vh - 300px)' }}
      className="dt-table-fixed-base"
      pagination={pagination}
      scroll={{ x: 1300, y: true }}
    />
  </div>
  , mountNode);
```
