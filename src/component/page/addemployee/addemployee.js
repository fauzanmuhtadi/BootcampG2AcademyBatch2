import React, { Component } from 'react';
import { Container, Form, Button, Col } from 'react-bootstrap';
import { connect } from "react-redux";
import { inputNewEmpl } from "../../action";


class AddEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            email: "",
            address: ""
            // employees: []
         }
    }

    setValue = async (er) => {
        await this.setState({
            [er.name]: er.value
        })
        // this.tambahEmpl()
    }

    onAdd = (event) => {
        event.preventDefault()
        // const lastEmployee = this.state.employees
        // let newEmp = {
        //     name: this.state.name,
        //     email: this.state.email,
        //     address: this.state.address
        // }
        // let dataBaru = lastEmployee.push(newEmp)
        const { name, email, address } = this.state
        // console.log({ name, email, address });
        // const dataBaru = this.state
        this.props.newEmployee({ name, email, address })
        // this.props.newEmployee(dataBaru)
    }

    // onAdd = (event) => {
    //     event.preventDefault()
    //     alert('Data berhasil ditambahkan!')
    //     // const { name, email, address } = this.state
    //     // this.props.newEmployee({ name, email, address })
    // }
    
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
                                <Form.Group as={Col} controlId="formGridAddress">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        name="address"
                                        onChange={(er) => this.setValue(er.target)}
                                        type="text"
                                        placeholder="Address"
                                    />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group id="formGridCheckbox">
                                <Form.Check type="checkbox" label="I agree with the terms and conditions" />
                            </Form.Group>

                            <Button onClick={this.onAdd} variant="primary" type="submit">
                                Add
                            </Button>
                        </Form>
                    </Container>
                </div>
            </div>
         );
    }
}

const mapDispatchToProps = (dispatch) => ({
    // changeStatusLogin: () => dispatch(setLogin()),
    // loginUser: (userName) => dispatch(enterName(userName)),
    newEmployee: (dataBaru) => dispatch(inputNewEmpl(dataBaru))
})
 
// export default AddEmployee;
export default connect(null, mapDispatchToProps)(AddEmployee);