import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class Listofemployee extends Component {
    showEmployee = () => {
        this.karyawanBaru = localStorage.karyawanBaru ? JSON.parse(localStorage.karyawanBaru) : []
        this.list = document.querySelector("#listEmployee tbody")
        this.rows = ""
    
        for (let i = 0; i < this.karyawanBaru.length; i++) {
            this.employee = this.karyawanBaru[i];

            // this.departmentOption = `
            //     <select onChange={updateLS('${employee.name}', this.value)}>
            //         <option value="">-- Please Choose --
            // `
    
            // for (let i = 0; i < department.length; i++) {
            //     const dp = department[i];
    
            //     let isSelected = ""
            //     if (dp.department == employee.department)
            //         isSelected = "selected"
    
            //     departmentOption += `<option value="${dp.department}" ${isSelected}>${dp.department}`
            // }
            // departmentOption += "</select>"
            
            this.rows += `
                <tr>
                    <td style={{textAlign: 'center'}}>${i+1}</td>
                    <td style={{margin-left: '50%', margin-right: '50%'}}></td>
                    <td>${this.employee.nahNama}</td>
                    <td style={{align: 'center'}}></td>
                </tr>`
        }
    
        this.list.innerHTML = this.rows
    }
    // this.showEmployee()

    render() {
        // {this.showEmployee()}
        return(
            <div style={{margin: '100px'}}>
                {/* { this.showEmployee() } */}
                <h1>List of Employee</h1>
                {/* <table style={{width:'100%', cellpadding:'10px', border:'1'}} id="listEmployee">
                    <thead>
                        <th>No</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Address</th>
                    </thead>
                    <tbody></tbody>
                </table> */}
                <Button variant='outline-secondary' style={{marginBottom: '10px'}} onClick={this.showEmployee}>Update</Button>
                <Table striped bordered hover id="listEmployee">
                    <thead>
                        <tr>
                            <th style={{width: '10%', textAlign: 'center'}}>NO.</th>
                            <th style={{width: '30%', textAlign: 'center'}}>IDENTITY NUMBER OF EMPLOYEE</th>
                            <th style={{width: '30%', textAlign: 'center'}}>FULL NAME</th>
                            <th style={{width: '30%', textAlign: 'center'}}>DEPARTMENT</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </Table>
            </div>
        )
    }
}

export default Listofemployee;