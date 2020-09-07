import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { setLogin, inPut } from "../../action";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            password: ""
         }
    }

    setValue = async (el) => {
        await this.setState({
            [el.name]: el.value
        })
        this.kasihData()
    }

    kasihData = () => {
        const { username, password } = this.state
        this.props.dataMasuk({ username, password })
    }

    isLogin = (event) => {
        event.preventDefault()

        if (this.props.namaMasuk === "admin" && this.props.passWord === "admin") {
            // this.silahkanMasuk()
            return this.props.changeStatusLogin()
        } else {
            alert('Invalid username or password!!')
        }
    }

    // silahkanMasuk = () => {
    //     const userName = this.props.namaMasuk
    //     this.props.loginUser(userName)
    // }

    render() {
        if (this.props.statusLogin)
            return <Redirect to="/home" />
        
        return ( 
            <div>
                <div style={{ width: '40%', margin: '5% auto 5% auto' }}>
                    <Container style={{ padding: '5%', borderRadius: '4%' }}>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>User Id</Form.Label>
                                <Form.Control
                                    name="username"
                                    onChange={(el) => this.setValue(el.target)}
                                    type="text"
                                    placeholder="Enter user id"
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
                            <Button onClick={this.isLogin} variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Container>
                </div>
            </div>
         );
    }
}

const mapStateToProps = (state) => ({
    statusLogin: state.navbar.isLogin,
    namaMasuk: state.login.username,
    passWord: state.login.password
})

const mapDispatchToProps = (dispatch) => ({
    changeStatusLogin: () => dispatch(setLogin()),
    // loginUser: (userName) => dispatch(enterName(userName)),
    dataMasuk: (dapetData) => dispatch(inPut(dapetData))
})
 
// export default Login;
export default connect(mapStateToProps, mapDispatchToProps)(Login);