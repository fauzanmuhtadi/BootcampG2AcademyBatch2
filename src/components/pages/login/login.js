import React, { Component } from 'react';
import './style.css';


class Login extends Component {
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

    masuk = () => {
        if (this.state.email === "admin@admin.com" && this.state.password === "admin123") {            
            this.props.ubahStatus()
        } else {
            alert('Invalid email or password!!')
        }
    }

    daftarAkun = () => {
        alert('daftar')
    }

    render() {
        return ( 
            <div>
                <h2>E-Library Login</h2>
                <div className='form'>
                    <form>
                        <label>Email:</label>
                        <input name="email" onChange={(el) => this.setValue(el.target)} type="email" />
                        <label>Password:</label>
                        <input name="password" onChange={(el) => this.setValue(el.target)} type="password" /><br/>
                        <button onClick={this.masuk}>Login</button>
                    </form>
                </div>
                <p onClick={this.daftarAkun}>Daftar akun</p>
            </div>
        );
    }
}

export default Login;