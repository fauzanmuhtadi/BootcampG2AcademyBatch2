import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import { connect } from "react-redux";


class Assignment extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    newTabel = () => {
        console.log(this.props.listNewEmployee);
        this.list = document.querySelector("#listNewemployee tbody")
        this.rows = ""

        for (let i = 0; i < this.props.listNewEmployee.length; i++) {
            this.rows += `
                <tr>
                    <td>${i+1}</td>
                    <td>${this.props.listNewEmployee[i].name}</td>
                    <td>${this.props.listNewEmployee[i].email}</td>
                    <td>
                        <select>
                            <option value="">-- Please Choose --</option>
                            <option value="head">Head</option>
                            <option value="supervisor">Supervisor</option>
                            <option value="staff">Staff</option>
                        </select>
                    </td>
                    <td>${this.props.listNewEmployee[i].address}</td>
                </tr>`
        }
    
        this.list.innerHTML = this.rows
    }
    
    render() { 
        return ( 
            <div>
                {/* <button onClick={this.newTabel}>Update</button> */}
                <div style={{ width: '80%', margin: '5% auto 5% auto' }}>
                    <Button style={{ marginBottom: '20px' }} variant="outline-secondary" onClick={this.newTabel}>Update</Button>
                    <Table striped bordered hover id="listNewemployee">
                        <thead>
                            <tr>
                                <th style={{ width: '5%' }}>No.</th>
                                <th style={{ width: '25%' }}>Name</th>
                                <th style={{ width: '20%' }}>Email</th>
                                <th style={{ width: '20%' }}>Department</th>
                                <th style={{ width: '30%' }}>Address</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </Table>
                </div>
            </div>
         );
    }
}

const mapStateToProps = (state) => ({
    listNewEmployee: state.addemployee.employees
})
 
// export default Assignment;
export default connect(mapStateToProps)(Assignment);