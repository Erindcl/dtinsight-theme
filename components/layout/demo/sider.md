---
order: 2
title:
  zh-CN: 侧边导航
---

## zh-CN

包含可伸缩侧边导航

```jsx
import { Layout, Menu, Icon, Dropdown } from 'antd';

const { Header, Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends React.Component {
    state = {
        collapsed: false,
        mode: 'inline'
    }
    onCollapse = () => {
        this.setState({ collapsed: !this.state.collapsed, mode: !this.state.collapsed ? 'vertical' : 'inline' });
    };
    render () {
        const { collapsed, mode } = this.state;
        const menu = <Menu
            selectedKeys={['1']}
            className="dtinsight-header-project-select-menu"
        >
            <Menu.Item key='1' title={'项目1'}>项目1</Menu.Item>
            <Menu.Item key='2' title={'项目2'}>项目2</Menu.Item>
        </Menu>;
        return (
            <Layout style={{ position: "relative" }}>
                <Header className="dtinsight-layout-header" style={{ width: "100%", minWidth: 100 }}>
                    <div style={{ minWidth: 100, color: '#fff', float: 'left' }}>
                        {'LOGO'}
                    </div>
                    <Menu
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                    >
                        <SubMenu key='sub-menu-item' title={
                            <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter" >
                                <span style={{ display: 'inline-block', height: '61px' }}>
                                    <span className="dtinsight-menu-text-ellipsis" title={'当前项目名称'} >
                                        {'当前项目名称'}
                                    </span>
                                    &nbsp;
                                    <Icon style={{ fontSize: '12px' }} type="caret-down" />
                                </span>
                            </Dropdown>
                        }>
                        </SubMenu>
                        <Menu.Item key="1"><a>数据源</a></Menu.Item>
                        <Menu.Item key="2">数据开发</Menu.Item>
                        <Menu.Item key="3">运维中心</Menu.Item>
                    </Menu>
                </Header>
                <Layout style={{ marginTop: 64 }}>
                    <Sider className="dtinsight-layout-sider" collapsed={collapsed}>
                        <div className="dtinsight-slider-top-icon" onClick={this.onCollapse}>
                            <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
                        </div>
                        <Menu
                            mode={mode}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                        >
                            <Menu.Item key="1">
                                <Icon type="appstore" />
                                <span>数据源管理</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="appstore" />
                                <span>实体管理</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="book" />
                                <span>关系管理</span>
                            </Menu.Item>
                            <SubMenu
                                key="4"
                                title={
                                  <span>
                                    <Icon type="book" />
                                    <span>字典管理</span>
                                  </span>
                                }
                              >
                                <Menu.Item key="5">Option 5</Menu.Item>
                                <Menu.Item key="6">Option 6</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '20px' }}>
                        <Content style={{ background: '#fff', padding: 20, margin: 0, minHeight: 280 }}>
                            Content
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}
ReactDOM.render(
    <SiderDemo />,
    mountNode,
);
```
