---
order: 5
title:
  zh-CN: 单列表格
---

## zh-CN

只有一列表格数据，需给表格添加类名`dtinsight-table-one-column`。

```jsx
import { Table } from 'antd';

const columns = [
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }
];

const data = [
  {
    key: '1',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    address: 'Sidney No. 1 Lake Park',
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
      className="dtinsight-table-one-column"
      style={{ border: '1px solid #dddddd' }}
      pagination={pagination}
    />
  </div>
  , mountNode);
```
