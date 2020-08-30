import React, { Component } from "react";
import './footer.css'
import {HeartOutlined} from  '@ant-design/icons';

export default class Footer extends Component{
    render(){
        return(
            <div className="footer">
                Who <HeartOutlined /> React.
            </div>
        )
    }
}