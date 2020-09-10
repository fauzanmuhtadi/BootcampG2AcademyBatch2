import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import { Container, Form, Button } from 'react-bootstrap';
import { FirebaseContext } from '../../../config/firebase';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    setValue = (el) => {
        this.setState({
            [el.name]: el.value
        })
    }

    onLogin = () => {
        if (this.state.email === "admin@admin.com" && this.state.password === "admin123") {
            this.props.changeStatusLogin()
            this.doLogin()
            // return this.props.changeStatusLogin()
        } else {
            alert("Invalid username or password!!")
            // this.otherUser()
        }
    }

    doLogin = () => {
        // event.preventDefault()
        this.props.firebase
            .createFirebaseUser(this.state)
            .then(res => {
                console.log(res);
                alert("User succesfully created!!")
            })
            .catch(err => {
                console.log(err);
                alert(err.message)
            })
    }

    // otherUser = () => {
    //     const { username, password } = this.state
    //     const { userList } = this.props

    //     for (let i = 0; i < userList.length; i++) {
    //         const user = userList[i];

    //         if (user.username === username && user.password === password)
    //             return this.props.changeStatusLogin()
    //     }

    //     alert("Invalid username or password!!")
    // }

    checkFirebase = () => {
        return () => {
            return <h1>Firebase Connected!!</h1>
        }
    }

    render() {
        if (this.props.statusLogin)
            return <Redirect to="/home" />
        
        return ( 
            <div>
                <div>
                    <FirebaseContext.Consumer>
                        {this.checkFirebase()}
                    </FirebaseContext.Consumer>
                </div>
                <div style={{ width: '40%', margin: '5% auto 5% auto' }}>
                    <Container style={{ padding: '5%', borderRadius: '4%' }}>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    name="email"
                                    onChange={(el) => this.setValue(el.target)}
                                    type="email"
                                    placeholder="Enter email"
                                />
                                <Form.Text className="text-muted">
                                    If you don't have an account, Please register first!
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    name="password"
                                    onChange={(el) => this.setValue(el.target)}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me" />
                            </Form.Group>
                            <Button onClick={this.onLogin} variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Container>
                </div>
            </div>
         );
    }
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <FirebaseContext.Consumer>
                {firebase => <LoginForm {...this.props} firebase={firebase} />}
            </FirebaseContext.Consumer>
         );
    }
}
 
export default Login;