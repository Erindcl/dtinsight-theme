---
order: 6
title:
  zh-CN: 固定高度表
---

## zh-CN

固定表格头部、尾部。中间视数据多少可滚动。可作为单屏表格数据展示使用

- 为表格父元素添加类名`dtinsight-table-fixed-comm`
- 计算当前表格以外的元素所占高度（如 300px）
- 再为表格设置`style={{ height: 'calc(100vh - 300px)' }}`
- 特别的，底部分页通过 footer 实现，直接使用 table 的 pagination 属性，不生效

```jsx
import { Table, Divider, Pagination } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    key: 'action',
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
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
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
  <div className="dtinsight-table-fixed-comm">
    <Table
      columns={columns}
      dataSource={data}
      scroll={{ y: true }}
      style={{ border: '1px solid #e8e8e8', height: 'calc(100vh - 300px)' }}
      pagination={false}
      footer={() => {
        return <Pagination
          {...pagination}
        />
      }}
    />
  </div>
  , mountNode);
```
