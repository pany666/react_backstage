import React, { Component } from 'react';
import localstorage from '../../utils/localstorage';
import { Redirect, Route,Switch } from 'react-router-dom';
import { Layout } from 'antd';
import LeftNav from '../../components/left-nav/LeftNav';
import Header from '../../components/head/Header';
import Footer from '../../components/foot/Footer';
import Home from '../home/Home';
import Todo from '../todo/Todo';
import Comment from '../comment/Comment';
import Movie from '../movie/Movie';
import Exp from '../exp/Exp';

const { Sider, Content } = Layout;
export default class Admin extends Component {

    render() {
        const user = localstorage.getUser();
        if (!user.username) {
            return <Redirect to='/login' />
        }
        return (
            <Layout style={{height:"100%"}}>
            <Sider>  <LeftNav /> </Sider>
            <Layout>
            <Header />
              <Content>  
                  <Switch>
                      <Route path='/admin/home' component={ Home }/>
                      <Route path='/admin/todo' component={ Todo }/>
                      <Route path='/admin/comment' component={ Comment }/>
                      <Route path='/admin/movie' component={ Movie }/>
                      <Route path='/admin/exp1' component={ Exp }/>
                      <Route path='/admin/exp2' component={ Exp }/>
                      <Route path='/admin' component={ Home }/>
                  </Switch>
              </Content>
              <Footer />
            </Layout>
          </Layout>
        //     <Layout  style={{height:"100%"}} >
        //     <Header />
        //     <Layout>
        //       <Sider>
        //       <LeftNav />
        //       </Sider>
        //       <Content>
        //           <Switch>
        //               <Route path='/admin/home' component={ Home }/>
        //               <Route path='/admin/todo' component={ Todo }/>
        //               <Route path='/admin/comment' component={ Comment }/>
        //               <Route path='/admin/movie' component={ Movie }/>
        //               <Route path='/admin' component={ Home }/>
        //           </Switch>
        //       </Content>
        //     </Layout>
        //     <Footer />
        //   </Layout>
        )
    }
}