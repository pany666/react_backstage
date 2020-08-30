import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Login from './pages/login/Login';
import Admin from './pages/admin/Admin';
import Register from './pages/register/Register';
import 'antd/dist/antd.css';

export default class APP extends Component{
  render(){
    return(
    
      <Router>
        <Switch>
          <Route path="/login" component={ Login } />
          <Route path="/admin" component={ Admin } />
          <Route path="/register" component={ Register } />
          <Redirect to="/login" />
         </Switch>
       </Router>
    )
  }
}
