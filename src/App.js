import React from 'react';
import {Container} from 'reactstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Login from './components/Login';
import Register from './components/Register'
import BlogList from './components/Blog-List';
import EditBlog from './components/Edit-Blog';
import CreateBlog from './components/Create-Blog';
import Createuser from './components/CreateUser';

function App() {
  return (
   <Container>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/register' component={Register}/>
          <Route path='/blog' component={BlogList}/>
          <Route path='/edit' component={EditBlog}/>
          <Route path='/create' component={CreateBlog}/>
          <Route path='/user' component={Createuser}/>
        </Switch>
      </BrowserRouter>

    </Container>
  );
}

export default App;
