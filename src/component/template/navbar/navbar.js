import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Home, Login, Assignment, ListEmployee, AddEmployee } from '../../page';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { setLogout, delNama } from "../../action";
// import { useSelector } from 'react-redux';


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // isLogin: false,
            // userMasuk: "",
            // employees: []
        }
    }

    // userLoginMasuk = (userName) => {
    //     this.setState({
    //         userMasuk: userName
    //     })
    // }
    keluar = () => {
        this.props.isLogout()
        this.props.hapusNama()

    }

    adminMenu = () => {
        if (this.props.statusLogin === true) {
            return (
                <div>
                    <Navbar bg="light" variant="light">
                        <Link to="/home">PT. LATIHAN REDUX</Link>
                        <Nav className="mr-auto">
                            <Nav.Link></Nav.Link>
                            <Link to="/home">Home</Link>
                            <Nav.Link></Nav.Link>
                            <Link to="/addemployee">Add Employee</Link>
                            <Nav.Link></Nav.Link>
                            <Link to="/assignment">Assignment</Link>
                            <Nav.Link></Nav.Link>
                            <Link to="/listemployee">List of Employee</Link>
                            <Nav.Link></Nav.Link>
                            <p style={{margin: '0px'}} onClick={this.keluar}>Logout</p>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-primary">Search</Button>
                        </Form>
                    </Navbar>
                </div>
            )
        } else {
            return (
                <div>
                    <Navbar bg="light" variant="light">
                        <Link to="/login">PT. LATIHAN REDUX</Link>
                        <Nav className="mr-auto">
                            <Nav.Link></Nav.Link>
                            <Link to="/login">Home</Link>
                            <Nav.Link></Nav.Link>
                            <Link to="/login">Login</Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-primary">Search</Button>
                        </Form>
                    </Navbar>
                </div>
            )
        }
    }

    // addEmployee = (newEmp) => {
    //     const lastEmployee = this.state.employees
    //     lastEmployee.push(newEmp)

    //     this.setState({
    //         employees: lastEmployee
    //     })
    //     console.log(this.state.employees);
    // }

    render() {
        // if (this.props.statusLogin === false) {
        //     return <Redirect to="/login" />
        // } 
        return ( 
            <div>
                {this.adminMenu()}

                <div>
                    <Switch>
                        <Route exact path="/login">
                            <Login
                                // loginUser={this.userLoginMasuk}
                            />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/assignment">
                            <Assignment />
                        </Route>
                        <Route path="/listemployee">
                            <ListEmployee />
                        </Route>
                        <Route path="/addemployee">
                            <AddEmployee
                                // newEmployee={this.addEmployee}
                            />
                        </Route>
                    </Switch>
                </div>
            </div>
         );
    }
}

const mapStateToProps = (state) => ({
    statusLogin: state.navbar.isLogin
})

const mapDispatchToProps = (dispatch) => ({
    hapusNama: () => dispatch(delNama()),
    isLogout: () => dispatch(setLogout())
})

// export default NavBar;
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);