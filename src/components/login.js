import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class Login extends Component {
    state = {
        userid: "",
        password: ""
    }

    masuk = () => {
        this.setState({userid: this.state.getElementByClassName('user')});
    }

    render() {
        return(
            <div style={{margin: '100px'}}>
                <div style={{width: '100%', margin: 'auto'}}>
                    <Grid className="banner-text" style={{height: '250px'}}>
                        <Cell col={12}>
                            <div>
                                {/* <form className="formLogin" action='./assignment'>
                                    <div className="">
                                        <label>USER ID</label><br />
                                        <input type="text" className="user" required></input>
                                    </div><br />
                                    <div className="">
                                        <label>PASSWORD</label><br />
                                        <input type="password" className="pass" required></input>
                                    </div><br />
                                    <div className="">
                                        <Checkbox label="Remember me" ripple />
                                    </div><br />
                                    <div>
                                        <button type="submit" className="input-login">Login</button>
                                    </div>
                                </form> */}
                                <Form action='./assignment'>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>User Id</Form.Label>
                                        <Form.Control type="text" placeholder="Enter user id" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember me" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </Cell>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Login;