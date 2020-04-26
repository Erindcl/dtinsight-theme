---
order: 0
title:
  en-US: Basic Usage
  zh-CN: 基本用法
---

## zh-CN

基本的页面布局

```jsx
import { Layout, Menu } from 'antd';

const { Header, Content } = Layout;

ReactDOM.render(
    <div style={{ height: 150 }}>
        <Layout style={{ position: "relative" }}>
            <Header className="dtinsight-layout-header" style={{ width: "100%", minWidth: 100 }}>
                <div style={{ minWidth: 100, color: '#fff', float: 'left' }}>
                    {'LOGO'}
                </div>
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                >
                    <Menu.Item key="1"><a>数据源</a></Menu.Item>
                    <Menu.Item key="2">数据开发</Menu.Item>
                    <Menu.Item key="3">运维中心</Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Content style={{ minWidth: 200, width: '100%', padding: 20 }} className="dtinsight-container">
                        Content
                </Content>
            </Layout>
        </Layout>
    </div>,
    mountNode,
);
```
