import React,{ Component } from 'react';
import { Spin } from 'antd';

export default class Exp extends Component{
    render(){
        return(
            <div style={{textAlign:'center'}}><Spin />正在开发ing....</div>
        )
    }
}