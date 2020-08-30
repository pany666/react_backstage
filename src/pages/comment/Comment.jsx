import React, { Component } from 'react';
import CommentAdd from './comment_add';
import CommentList from './comment_list';

export default class Comment extends Component {
    state = {
        comment: []
    }
    handleCommentAdd = (comments) => {
        const { comment } = this.state;
        comment.push(comments);
        this.setState({ comment });
    }
    handleCommentDel = (index) => {
        // const { comment } = this.state;
        // comment.splice(index,1)
        this.setState(state => {
            const comment = [...state.comment];
            comment.splice(index, 1);
            return { comment }
        })
    }
    render() {
        return (
            <div style={{ width: 600, margin: "20px auto", border: '1px solid #000' }}>
                <h1 style={{ textAlign: 'center',fontSize:20, }}>评论管理</h1>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: 20 }}>
                    <CommentAdd handleCommentAdd={this.handleCommentAdd} />
                    <CommentList comment={this.state.comment} handleCommentDel={this.handleCommentDel} />
                </div>

            </div>
           
        )
    }
}