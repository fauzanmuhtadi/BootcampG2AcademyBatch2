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
        this.enCode()
        // this.props.newEmployee(dataBaru)
    }

    // onAdd = (event) => {
    //     event.preventDefault()
    //     alert('Data berhasil ditambahkan!')
    //     // const { name, email, address } = this.state
    //     // this.props.newEmployee({ name, email, address })
    // }

    enCode = () => {
        // event.preventDefault()

        let coba1 = this.props.enCode
        let coba = JSON.stringify(coba1)
        var Base64 = { 
            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"+ 
          "abcdefghijklmnopqrstuvwxyz0123456789+/=", 
            encode: function(e) { 
                var t = ""; 
                var n, r, i, s, o, u, a; 
                var f = 0; 
                e = Base64._utf8_encode(e); 
                while (f < e.length) { 
                    n = e.charCodeAt(f++); 
                    r = e.charCodeAt(f++); 
                    i = e.charCodeAt(f++); 
                    s = n >> 2; 
                    o = (n & 3) << 4 | r >> 4; 
                    u = (r & 15) << 2 | i >> 6; 
                    a = i & 63; 
                    if (isNaN(r)) { 
                        u = a = 64 
                    } else if (isNaN(i)) { 
                        a = 64 
                    } 
                    t = t + 
                      this._keyStr.charAt(s) + 
                      this._keyStr.charAt(o) + 
                      this._keyStr.charAt(u) + 
                      this._keyStr.charAt(a) 
                } 
                return t 
            }, 
            decode: function(e) { 
                var t = ""; 
                var n, r, i; 
                var s, o, u, a; 
                var f = 0; 
                e = e.replace(/[^A-Za-z0-9\\+\\/\\=]/g, ""); 
                while (f < e.length) { 
                    s = this._keyStr.indexOf(e.charAt(f++)); 
                    o = this._keyStr.indexOf(e.charAt(f++)); 
                    u = this._keyStr.indexOf(e.charAt(f++)); 
                    a = this._keyStr.indexOf(e.charAt(f++)); 
                    n = s << 2 | o >> 4; 
                    r = (o & 15) << 4 | u >> 2; 
                    i = (u & 3) << 6 | a; 
                    t = t + String.fromCharCode(n); 
                    if (u !== 64) { 
                        t = t + String.fromCharCode(r) 
                    } 
                    if (a !== 64) { 
                        t = t + String.fromCharCode(i) 
                    } 
                } 
                t = Base64._utf8_decode(t); 
                return t 
            }, 
            _utf8_encode: function(e) { 
                e = e.replace(/\r\n/g, "\n"); 
                var t = ""; 
                for (var n = 0; n < e.length; n++) { 
                    var r = e.charCodeAt(n); 
                    if (r < 128) { 
                        t += String.fromCharCode(r) 
                    } else if (r > 127 && r < 2048) { 
                        t += 
                          String.fromCharCode(r >> 6 | 192); 
                        t += 
                          String.fromCharCode(r & 63 | 128) 
                    } else { 
                        t += 
                          String.fromCharCode(r >> 12 | 224); 
                        t += 
                          String.fromCharCode(r >> 6 & 63 | 128); 
                        t += 
                          String.fromCharCode(r & 63 | 128) 
                    } 
                } 
                return t 
            }, 
            _utf8_decode: function(e) { 
                var t = ""; 
                var n = 0; 
                var r = 0;
                var c2 = 0;
                var c3 = 0; 
                while (n < e.length) { 
                    r = e.charCodeAt(n); 
                    if (r < 128) { 
                        t += String.fromCharCode(r); 
                        n++ 
                    } else if (r > 191 && r < 224) { 
                        c2 = e.charCodeAt(n + 1); 
                        t += String.fromCharCode( 
                          (r & 31) << 6 | c2 & 63); 
                        
                        n += 2 
                    } else { 
                        c2 = e.charCodeAt(n + 1); 
                        c3 = e.charCodeAt(n + 2); 
                        t += String.fromCharCode( 
                          (r & 15) << 12 | (c2 & 63) 
                          << 6 | c3 & 63); 
                        n += 3 
                    } 
                } 
                return t 
            } 
        }
        let kodein = Base64.encode(coba)
        // console.log(kodein);
        
        // let balikin = Base64.decode(kodein)
        // console.log(balikin);
        
        localStorage.setItem("enCode", kodein)
        console.log(Base64.decode(localStorage.getItem("enCode")));
    }
    
    render() { 
        return ( 
            <div>
                {/* <Button onClick={this.enCode} variant="primary">Coba</Button> */}
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

const mapStateToProps = (state) => ({
    // statusLogin: state.navbar.isLogin,
    enCode: state.addemployee.employees
})

const mapDispatchToProps = (dispatch) => ({
    // changeStatusLogin: () => dispatch(setLogin()),
    // loginUser: (userName) => dispatch(enterName(userName)),
    newEmployee: (dataBaru) => dispatch(inputNewEmpl(dataBaru))
})
 
// export default AddEmployee;
export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);