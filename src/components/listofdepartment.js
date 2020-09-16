import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class Listofdepartment extends Component {
    showDepartment = () => {
        this.departmentBaru = localStorage.departmentBaru ? JSON.parse(localStorage.departmentBaru) : []
        this.list = document.querySelector("#listDepartment tbody")
        this.rows = ""
    
        for (let i = 0; i < this.departmentBaru.length; i++) {
            this.department = this.departmentBaru[i];
            
            this.rows += `
                <tr>
                    <td style={{textAlign: 'center'}}>${i+1}</td>
                    <td>${this.department.nahNoSK}</td>
                    <td>${this.department.nahNamaDep}</td>
                    <td>${this.department.nahTgl}</td>
                </tr>`
        }
    
        this.list.innerHTML = this.rows
    }

    render() {
        return(
            <div style={{margin: '100px'}}>
                <h1>List of Department</h1>
                <Button variant='outline-secondary' style={{marginBottom: '10px'}} onClick={this.showDepartment}>Update</Button>
                <Table striped bordered hover id="listDepartment">
                    <thead>
                        <tr>
                            <th style={{width: '10%', textAlign: 'center'}}>NO.</th>
                            <th style={{width: '30%', textAlign: 'center'}}>DECREE NUMBER</th>
                            <th style={{width: '30%', textAlign: 'center'}}>NAME OF DEPARTMENT</th>
                            <th style={{width: '30%', textAlign: 'center'}}>EFFECTIVE DATE</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </Table>
            </div>
        )
    }
}

export default Listofdepartment;