import React, { Component } from 'react';
import './login.css';
import { Form, Input, Button, Space, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import localstorage from '../../utils/localstorage';
import { reqLogin } from '../../api';

export default class Login extends Component {
    onFinish =async values => {
      const result =await reqLogin(values);
      const {data, msg, status} = result;
      if(status === 0){
        message.success(msg,1);
        localstorage.setUser(data);
        this.props.history.push('/admin');
        
      }
      else{
        message.error(msg,2)
      }
    };
    render() {
        return (
            <div className="login-form">
                <h2 className="login-title">React练习</h2>
                <Form
      name="normal_login"
      className="login-form"
      onFinish={this.onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: '请输入用户名!',
          },
          {
              min:5,
              message:'用户名至少5位！'
          }
        ]}
      >
        <Input  prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" autoComplete="off" />
        </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: '请输入密码!',
          },
          {
            min:5,
            message:'密码至少5位！'
        }
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="密码"
        />
      </Form.Item>
      {/* <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle labelAlign="right">
          <Checkbox>记住我</Checkbox> 
        </Form.Item>
        <a className="login-form-forgot" href="#">
          忘记密码
        </a>
      </Form.Item> */}

      <Form.Item>
     
        <Button type="primary" htmlType="submit" className="login-form-button" block >
          登录
        </Button>
        <a href="http://localhost:3000/register" style={{float:'right',paddingTop:10}}>去注册</a>
        {/* <Button type="dashed" htmlType="submit" className="login-form-button"  >
        注册
        </Button> */}
  
      </Form.Item>
    </Form>
  
            </div>
        )
    }
}