import  React,{ Component } from 'react';
import {  Button } from 'antd';
 export default class CommentList extends Component{
     handleDelete = (index) => {
        //  console.log(index);
         this.props.handleCommentDel(index);
     }
     render(){
         const { comment } = this.props;
        //  console.log(comment.length)
         return(
             <div>
                 <p>评论列表：</p>
                 <i style={{display:comment.length ? 'none' : 'block'}}>还没有评论，快去评论吧...</i>
                 <ul>
                     {/* {list.map(item => {return <li key={item}>{item}</li>})} */}
         {comment.map((item,index) => {return <li key={index} >用户：{item.username},说:{item.comment}<Button type="dashed" size="small" onClick={() => { this.handleDelete(index) }}>删除</Button></li>}).reverse()}
                 </ul>
             </div>
         )
     }
 }