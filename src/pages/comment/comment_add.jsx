import React, { Component} from 'react';
import { Form, Input, Button } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  
export default class CommentAdd extends Component{
    // constructor(props){
    //     super(props);
    // }
    form = React.createRef();
    state = {
        username: '',
        comment: ''
    }

    nameChange = (e) =>{
        const username=e.target.value;
        this.setState({username})
    }
    commentChange = (e) =>{
        const comment=e.target.value;
        this.setState({comment})
    }
    handleClick = () => {
      
       
        this.form.current.resetFields();
        this.props.handleCommentAdd(this.state);
        // this.setState({
        //     username: '',
        //     comment: ''
        // })
    }
    render(){
        const { username, comment } = this.state; 
        return (
            // <div>
            //     <label htmlFor='name'>用户名：</label><input type='text' id='name' autoComplete='off' value={username} onChange={this.nameChange} /><br />
            //     <label htmlFor='comment'>评论内容：</label><textarea  id='comment' autoComplete='off' value={comment} onChange={this.commentChange}></textarea><br />
            //     <button onClick={this.handleClick} >提交评论</button>
            // </div>
            <Form {...layout} ref={this.form} name="nest-messages" >
            <Form.Item name='name' label="用户名">
              <Input  value={username}  onChange={this.nameChange}/>
            </Form.Item>
            <Form.Item name='introduction' label="评论内容">
              <Input.TextArea value={comment}  onChange={this.commentChange}/>
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit" onClick={this.handleClick}>
                提交评论
              </Button>
            </Form.Item>
          </Form>
        )
    }
}