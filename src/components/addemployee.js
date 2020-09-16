import React, { Component } from 'react';
// import { Checkbox } from 'react-mdl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


class Addemployee extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         aryNewkaryawan: []
    //     }
    // }
    
    // state = {
    //     aryNewkaryawan: []
    // }


    save = () => {
        // event.preventDefault()
        if (localStorage.getItem('karyawanBaru') === null) {
            this.kosong()
        }  else {
            // this.setState({aryNewkaryawan: JSON.parse(localStorage.getItem('karyawanBaru'))})
            // console.log(this.state);
            // console.log(this.state.aryNewkaryawan);
            this.ada()
        }
    }
    
    kosong = () => {
        // alert("fungsi kosong")
        // this.setState({ aryNewkaryawan: [] })
        this.aryNewkaryawan = []
        this.objNewkaryawan = {
            // nahNIK: "nik",
            // nahNama: "nama",
            // nahTTL: "ttl",
            // nahEmail: "email",
            // nahHP: "hp"
            // nahNIK: this.nik(),
            // nahNama: this.nama(),
            // nahTTL: this.ttl(),
            // nahEmail: this.email(),
            // nahHP: this.hp()
            nahNIK: document.getElementById('nik').value,
            nahNama: document.getElementById('nama').value,
            nahTTL: document.getElementById('ttl').value,
            nahEmail: document.getElementById('email').value,
            nahHP: document.getElementById('hp').value
        }
        // console.log(this.objNewkaryawan);
    
        // this.setState({
        //     aryNewkaryawan: this.state.aryNewkaryawan.push(this.objNewkaryawan)
        //     // number: this.state.number + 1
        // })
        this.aryNewkaryawan.push(this.objNewkaryawan)
        // console.log(this.state);
    
        // localStorage.setItem('karyawanBaru', JSON.stringify(this.state.aryNewkaryawan))
        localStorage.setItem('karyawanBaru', JSON.stringify(this.aryNewkaryawan))
        // console.log(this.state);
    }
    
    ada = () => {
        // let aryNewkaryawan = JSON.parse(localStorage.getItem('karyawanBaru'))
        // this.setState({
        //     aryNewkaryawan: JSON.parse(localStorage.getItem('karyawanBaru'))
        // })
        this.aryNewkaryawan = JSON.parse(localStorage.getItem('karyawanBaru'))

        this.objNewkaryawan = {
            // nahNIK: 5,
            // nahNama: 6,
            // nahTTL: 7,
            // nahEmail: 8,
            // nahHP: 9
            nahNIK: document.getElementById('nik').value,
            nahNama: document.getElementById('nama').value,
            nahTTL: document.getElementById('ttl').value,
            nahEmail: document.getElementById('email').value,
            nahHP: document.getElementById('hp').value
        }
    
        // this.setState({
        //     aryNewkaryawan: this.state.aryNewkaryawan.push(this.objNewkaryawan)
        // })
        this.aryNewkaryawan.push(this.objNewkaryawan)
        // console.log(this.state);
        // console.log(JSON.parse(localStorage.getItem('karyawanBaru')));
    
        // localStorage.setItem('karyawanBaru', JSON.stringify(this.state.aryNewkaryawan))
        localStorage.setItem('karyawanBaru', JSON.stringify(this.aryNewkaryawan))
    }

    render() {
        return(
            <div style={{margin: '100px'}}>
                <h1>Add New Employee</h1>
                {/* <form id="formKaryawan">
                  <div className="form-group" style={{margin: '0px 0px 10px 100px'}}>
                    <span style={{marginRight: '97px'}}>NIK</span>
                    <input type="tel" pattern="[0-9]{16}" className="form-control" id="nik" required />
                  </div>
                  <div className="form-group" style={{margin: '0px 0px 10px 100px'}}>
                    <span style={{marginRight: '10px'}}>NAMA LENGKAP</span>
                    <input type="text" className="form-control" id="nama" required />
                  </div>
                  <div className="form-group" style={{margin: '0px 0px 10px 100px'}}>
                    <span style={{marginRight: '10px'}}>TANGGAL LAHIR</span>
                    <input type="date" className="form-control" id="ttl" required />
                  </div>
                  <div className="form-group" style={{margin: '0px 0px 10px 100px'}}>
                    <span style={{marginRight: '78px'}}>EMAIL</span>
                    <input type="email" className="form-control" id="email" required />
                  </div>
                  <div className="form-group" style={{margin: '0px 0px 10px 100px'}}>
                    <span style={{marginRight: '76px'}}>NO HP</span>
                    <input type="text" minLength="11" maxLength="13" pattern="[0-9]{13}" className="form-control" id="hp" required />
                  </div>
                  <div className="form-group" style={{margin: '0px 0px 10px 100px'}}>
                    <button type="submit" onClick={this.save} id="isiKaryawan" className="btn btn-primary margin-top">Submit</button>
                  </div>
                </form> */}
                <Form id="formKaryawan">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Identity Number</Form.Label>
                    <Form.Control type="text" id="nik" placeholder="Enter identity number" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" id="nama" placeholder="Enter full name" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Birth Date</Form.Label>
                    <Form.Control type="date" id="ttl" placeholder="Enter birth date" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" id="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" id="hp" minLength="11" maxLength="13" pattern="[0-9]{13}" placeholder="Enter identity number" />
                  </Form.Group>

                  <Button variant="primary" type="submit" onClick={this.save} id="isiKaryawan" style={{marginLeft: '15px'}}>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default Addemployee;