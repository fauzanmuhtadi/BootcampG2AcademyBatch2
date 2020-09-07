import React, { Component } from 'react';
import { Table } from 'react-bootstrap';


class ListEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <div>
                <div style={{ width: '80%', margin: '5% auto 5% auto' }}>
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
                        <tbody>
                            {/* {this.newTabel()} */}
                        </tbody>
                    </Table>
                </div>
            </div>
         );
    }
}
 
export default ListEmployee;