import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './login';
import Addemployee from './addemployee';
import Listofemployee from './listofemployee';
import Assignment from './assignment';
import Adddepartment from './adddepartment';
import Listofdepartment from './listofdepartment';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/addemployee" component={Addemployee}></Route>
        <Route path="/listofemployee" component={Listofemployee}></Route>
        <Route path="/assignment" component={Assignment}></Route>
        <Route path="/adddepartment" component={Adddepartment}></Route>
        <Route path="/listofdepartment" component={Listofdepartment}></Route>
    </Switch>
)

export default Main;