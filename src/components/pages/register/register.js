import React, { Component } from 'react';
import { Container, Form, Button, Col } from 'react-bootstrap';
import { FirebaseContext } from '../../../config/firebase';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            username: "",
            password: ""
        }
    }

    setValue = (er) => {
        this.setState({
            [er.name]: er.value
        })
    }

    onReg = (event) => {
        event.preventDefault()
        const { name, email, username, password } = this.state

        this.props.registerUser({ name, email, username, password })
        this.props.changeStatusLogin()
        this.simpenFirestore()
    }

    simpenFirestore = () => {
        const { name, email, username, password } = this.state
        // const password = 'pass' + name.toLowerCase()

        this.props.firebase
            .createFirebaseUser({email, password})
            .then(authUser => {
                return this.props.firebase.usersDb().doc(authUser.user.uid).set({
                    name,
                    email,
                    username,
                    password
                }).then(() => {
                    window.location.reload()
                }).catch(err => {
                    console.error(err)
                    alert(err.message)
                })
            })
    }

    ambilData = (event) => {
        event.preventDefault()
        // return this.props.firebase.usersDb().doc('2ioSUVwfG6UgdDBJ1plpLX8PDgs1').get({
        //     name: this.name,
        //     email: this.email,
        //     username: this.username
        // }).catch(err => {
        //     console.error(err)
        //     alert(err.message)
        // })
        // const dataA = '2ioSUVwfG6UgdDBJ1plpLX8PDgs1'
        return this.props.firebase.usersDb().doc('2ioSUVwfG6UgdDBJ1plpLX8PDgs1').get()
            // .then((snapshot) => {
            //     snapshot.forEach((doc) => {
            //     console.log(doc.id, '=>', doc.data());
            //     });
            // })
            // .catch((err) => {
            //     console.log('Error getting documents', err);
            // });
            .then(doc => {
                if (!doc.exists) {
                  console.log('No such document!');
                } else {
                  console.log('Document data:', doc.data());
                  console.log('Document data:', doc.data().email);
                }
            })
            .catch(err => {
            console.log('Error getting document', err);
            });
        
        // let a = this.props.firebase.usersDb().doc('2ioSUVwfG6UgdDBJ1plpLX8PDgs1').get()
        // console.log(a.name);
    }

    render() { 
        return ( 
            <div>
                <div style={{ width: '40%', margin: '5% auto 5% auto' }}>
                    <Container style={{ padding: '4%', borderRadius: '4%' }}>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridFullName">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control
                                        name="name"
                                        onChange={(er) => this.setValue(er.target)}
                                        type="text"
                                        placeholder="Full name"
                                    />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        name="email"
                                        onChange={(er) => this.setValue(er.target)}
                                        type="email"
                                        placeholder="Enter email"
                                    />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        name="username"
                                        onChange={(er) => this.setValue(er.target)}
                                        type="text"
                                        placeholder="Username"
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        name="password"
                                        onChange={(er) => this.setValue(er.target)}
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group id="formGridCheckbox">
                                <Form.Check type="checkbox" label="I agree with the terms and conditions" />
                            </Form.Group>

                            <Button onClick={this.onReg} variant="primary" type="submit">
                                Register
                            </Button>
                            <Button onClick={this.ambilData} variant="primary" type="submit">
                                Tes Ambil
                            </Button>
                        </Form>
                    </Container>
                </div>
                {/* <div>
                    <h1>AMBIL</h1>
                    {this.ambilData()}
                </div> */}
            </div>
         );
    }
}

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <FirebaseContext.Consumer>
                {firebase => <RegisterForm {...this.props} firebase={firebase} />}
            </FirebaseContext.Consumer>
         );
    }
}
 
export default Register;