import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import './header.css';
import localstorage from '../../utils/localstorage'
import { Modal, Button} from 'antd';
import { Menu, Dropdown } from 'antd';
import { DownOutlined,LogoutOutlined } from '@ant-design/icons';

const { confirm } = Modal;


  

 class Header extends Component{
//    menu = (
//         <Menu>
//           <Menu.Item>  
//           <LogoutOutlined /><Button onClick={this.showConfirm}>退出</Button>
//           </Menu.Item>
//         </Menu>
//       );
     state = {
         currentTime: new Date().toLocaleString(),
     }
    UNSAFE_componentWillMount(){
        this.user = localstorage.getUser();
    }
    componentDidMount(){
        this.getCurrentTime();
    }
    getCurrentTime = () =>{
        setInterval(()=>{
            this.setState({
                currentTime: new Date().toLocaleString(),
            })
        },1000);
       
    }
    showConfirm = () => {
        confirm({
          title: '确认退出吗?',
          okText:'确认',
          cancelText:'取消',
          closable:true,
        //   icon: <ExclamationCircleOutlined />,
        //   content: 'Some descriptions',
          onOk : ()=> {
            localstorage.removeUser();
            this.props.history.push('/login');
          },
          onCancel: ()=> {
            return;
          },
        });
      }
    
    render(){
     const { currentTime } = this.state;
        return(
            <div className="header">
                 {/* <Dropdown overlay={this.menu}>
    <a>你好，{this.user.username}<DownOutlined /></a>
        </Dropdown> */}
                 <span className="title">React练习</span>
                 <span style={{marginRight:12}} className="name">你好，{this.user.username}</span>
                     <Button  onClick={this.showConfirm} size="small" ghost>退出</Button> 
                    <br />
                    <span>{currentTime}</span>
            </div>
        )
    }
}
// withRouter组件的作用使非路由组件具有路由组件的props属性
export default withRouter(Header);