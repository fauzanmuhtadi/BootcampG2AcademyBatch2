import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { First, Login, Register, Home, UpdateData } from '../../pages/index';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            users: []
        }
    }

    changeIsLogin = async () => {
        await this.setState({
            isLogin: !this.state.isLogin
        })
        localStorage.setItem('isLogin', JSON.stringify(this.state.isLogin))
    }

    changeEnter = async (enterUser) => {
        await this.setState({
            enter: enterUser
        })

        localStorage.setItem('enterAs', JSON.stringify(this.state.enter))
    }

    isLogout = async () => {
        await this.setState({
            isLogin: false,
            users: []
        })
        localStorage.removeItem('isLogin')
    }

    adminMenu = () => {
        if (this.state.isLogin === true || JSON.parse(localStorage.getItem('isLogin')) === true) {
            return (
                <div>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="/home">State Props</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/home">Home</Nav.Link>
                                <NavDropdown title="Students" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                                    <NavDropdown.Item href="/updatedata">Update Data</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link onClick={this.isLogout}>Logout</Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            )
        }

        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">State Props</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }

    addUser = async (newUser) => {
        if (localStorage.getItem('listUser') === null) {
            let lastUsers = this.state.users
            lastUsers.push(newUser)

            await this.setState({
                users: lastUsers
            })

            localStorage.setItem('listUser', JSON.stringify(this.state.users))
        } else if (localStorage.getItem('listUser') !== null) {
            let lastUsers = JSON.parse(localStorage.listUser)
            lastUsers.push(newUser)

            await this.setState({
                users: lastUsers
            })

            localStorage.setItem('listUser', JSON.stringify(this.state.users))
        }
    }

    render() { 
        return ( 
            <div>
                {this.adminMenu()}

                <Switch>
                    <Route exact path="/">
                        <First />
                    </Route>
                    <Route path="/login">
                        <Login
                            statusLogin={this.state.isLogin}
                            changeStatusLogin={this.changeIsLogin}
                            // userList={JSON.parse(localStorage.listUser)}
                        />
                    </Route>
                    <Route path="/register">
                        <Register
                            statusLogin={this.state.isLogin}
                            changeStatusLogin={this.changeIsLogin}
                            registerUser={this.addUser}
                        />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/updatedata">
                        <UpdateData />
                    </Route>
                </Switch>
            </div>
         );
    }
}
 
export default NavBar;