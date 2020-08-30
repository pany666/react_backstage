import React, { Component} from 'react';
import { Result, Button} from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';


export default class Register extends Component{
    render(){
        return(
            <Result
    icon={<SmileOutlined />}
    title="此页面正在开发中...."
    extra={<Button type="primary"><NavLink to="/login">返回</NavLink></Button>}
  />
        )
    }
}