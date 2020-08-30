import React, { Component } from 'react';
import { Input } from 'antd';
import { List, Button, Divider } from 'antd';

const { Search } = Input;

export default class Todo extends Component {
    constructor() {
        super();
        this.state = {
            list: ['学习Java', '学习JavaWeb', '学习Spring', '学习SpringBoot'],
            inputValue: '',
            count: 0
        }

    }
    handleAdd = () => {
        let { list, inputValue, count } = this.state;
        this.setState({
            list: [inputValue, ...list],
            inputValue: '',
            count: count++,
        })

    }
    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }
    handleDelete = (index) => {
        // console.log(index)
        const { list } = this.state;
        // console.log(list.splice(index,1))
        list.splice(index, 1);
        this.setState({ list })
    }
    render() {
        let { list, inputValue} = this.state;
        return (
            <div style={{ margin: '0 auto', width: 600 }}>
                <Search value={inputValue} defaultValue='' placeholder="请输入代办事项" onChange={this.handleChange} onSearch={this.handleAdd} enterButton="添加" style={{ width: 600, marginTop: 20 }} size="large" />
                <Divider orientation="left">未完成事项</Divider>
                <List
                    size="large"
                    bordered
                    dataSource={list}
        renderItem={(item,index) => <List.Item>{index+1}--{item} <Button type="dashed" size="small" onClick={() => { this.handleDelete(index) }}>删除</Button></List.Item>}
                />
                {/* <input type='text' value={inputValue} onChange={this.handleChange} />
                <button onClick={this.handleAdd}>添加#{list.length}</button> */}
                {/* <ul>
                    {list.map((item, index) => <li key={index} title='删除' onClick={() => { this.handleDelete(index) }}>{item}</li>)}
                </ul> */}
            </div>
        )
    }
}