import React, { Component } from "react"
import { Menu, } from 'antd';
import {
  PieChartOutlined,
  FileDoneOutlined,
  ContainerOutlined,
  AppstoreAddOutlined,
  SearchOutlined
} from '@ant-design/icons';
import { withRouter, NavLink } from "react-router-dom";

const { SubMenu } = Menu;

 class LeftNav extends Component {
    render() {
        const { pathname } = this.props.location;
        return (
            <div style={{ width: "100%" }}>
                {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button> */}
                <Menu
                    defaultSelectedKeys={[ pathname ]}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                >
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        <NavLink to="/admin/home" >主页</NavLink>
          </Menu.Item>
                    <Menu.Item key="2" icon={<FileDoneOutlined />}>
                    <NavLink to="/admin/todo" >TodoList</NavLink>
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
                    <NavLink to="/admin/comment" >评论管理</NavLink>
          </Menu.Item>
                    <Menu.Item key="4" icon={<SearchOutlined /> }>
                    <NavLink to="/admin/movie" >电影搜索</NavLink>
          </Menu.Item>
                    <SubMenu key="sub1" icon={<AppstoreAddOutlined />} title="扩展应用">
                        <Menu.Item key="5"><NavLink to="/admin/exp1" >应用一</NavLink></Menu.Item>
                        <Menu.Item key="6"><NavLink to="/admin/exp2" >应用二</NavLink></Menu.Item>
                       
                    </SubMenu>
    
                </Menu>
            </div>
        )
    }
}
export default withRouter(LeftNav);