import React, { Component } from 'react';
import './movie.css';

import { Input } from 'antd';
const { Search } = Input;
export default class SearchInput extends Component{
    constructor(props){
        super(props);
        this.input = React.createRef();
    }
    state = {
        keyword: ''
    }
    handleChange = (e) => {
        console.log(e.target)
        this.setState({
            keyword: e.target.value
        })
    }
    handleSubmit = (value) => {
        this.props.handleSearch(value);
        this.setState({
            keyword: ''
        })
        

    }
    render(){
        const {keyword} = this.state;
        return (
            <div className="search">
                <Search ref="searchBar" value={keyword} placeholder="请输入电影名称" onChange={this.handleChange}  onSearch={value => this.handleSubmit(value)} enterButton style={{ width: 500,marginTop:20 }} size="large" />
               {/* <input type="text"  className="search_input" autoComplete="off"  ref={this.input} /> */}
               {/* <input type="button" className="search_submit" value="搜索" onClick={this.handleSubmit} /> */}
            </div>
        )
    }
}