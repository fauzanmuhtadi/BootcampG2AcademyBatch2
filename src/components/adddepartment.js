import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


class Adddepartment extends Component {
    saveDepartment = () => {
        if (localStorage.getItem('departmentBaru') === null) {
            this.kosongDepartment()
        }  else {
            this.adaDepartment()
        }
    }
    
    kosongDepartment = () => {
        this.aryDepartment = []
        this.objDepartment = {
            nahNoSK: document.getElementById('nosk').value,
            nahNamaDep: document.getElementById('dep').value,
            nahTgl: document.getElementById('tgl').value
        }

        this.aryDepartment.push(this.objDepartment)

        localStorage.setItem('departmentBaru', JSON.stringify(this.aryDepartment))
    }
    
    adaDepartment = () => {
        this.aryDepartment = JSON.parse(localStorage.getItem('departmentBaru'))

        this.objDepartment = {
            nahNoSK: document.getElementById('nosk').value,
            nahNamaDep: document.getElementById('dep').value,
            nahTgl: document.getElementById('tgl').value
        }
    
        this.aryDepartment.push(this.objDepartment)

        localStorage.setItem('departmentBaru', JSON.stringify(this.aryDepartment))
    }

    render() {
        return(
            <div style={{margin: '100px'}}>
                <h1>Add Department</h1>
                <Form id="formDepartemen">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Decree Number</Form.Label>
                    <Form.Control type="text" id="nosk" placeholder="Enter identity number" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Name of Department</Form.Label>
                    <Form.Control type="text" id="dep" placeholder="Enter full name" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Effective Date</Form.Label>
                    <Form.Control type="date" id="tgl" placeholder="Enter birth date" />
                  </Form.Group>

                  <Button variant="primary" type="submit" onClick={this.saveDepartment} id="isiKaryawan" style={{marginLeft: '15px'}}>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default Adddepartment;