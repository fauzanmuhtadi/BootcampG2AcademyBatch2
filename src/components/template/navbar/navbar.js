import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { AddCommittee, Home, InputBook } from '../../pages/index';
import './style.css';


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            users: []
        }
    }

    signout = () => {
        let r = window.confirm('Are you sure?')
        if (r === true) {
            this.props.logoutin()
        }
    }

    render() { 
        return ( 
            <div>
                <div className='navbar'>
                    <Link to="/">Home</Link>
                    <Link to="/inputbook">Input Book</Link>
                    <Link to="/addcommittee">Add Committee</Link>
                    <Link to='/' onClick={this.signout}>Logout</Link>
                </div>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/addcommittee">
                        <AddCommittee />
                    </Route>
                    <Route path="/inputbook">
                        <InputBook />
                    </Route>
                </Switch>
            </div>
         );
    }
}
 
export default NavBar;