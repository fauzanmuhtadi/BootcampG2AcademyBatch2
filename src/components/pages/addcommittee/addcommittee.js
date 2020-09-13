import React, { Component } from 'react';
import './style.css';
import { FirebaseContext } from '../../config/firebase';


class AddCommitteeForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            idNumber: '',
            fullName: '',
            expireddate: '',
            committees: []
        }
    }

    setValue = (el) => {
        this.setState({
            [el.name]: el.value
        })
    }

    submit = (event) => {
        event.preventDefault()
        let dataSatu = this.state.idNumber
        let dataDua = this.state.fullName
        let dataTiga = this.state.expireddate
        if (dataSatu === '' || dataDua === '' || dataTiga === '') {
            alert('Please input the data!!')
        } else {
            const { idNumber, fullName, expireddate } = this.state

            this.props.firebase.committeesDb().doc().set({
                idNumber,
                fullName,
                expireddate
            }).then(() => {
                window.location.reload()
            }).catch(err => {
                console.log(err);
                alert(err.message)
            })
        }
    }

    ambilData = async () => {
        const anggota = this.props.firebase.committeesDb()
        const snapshot = await anggota.get();
        snapshot.forEach(async doc => {
            const newCommittees = this.state.committees
            newCommittees.push(doc.data())
            await this.setState({
                ...this.state,
                committees: newCommittees
            })
            
            this.newTabel()
        });
    }

    componentDidMount() {
        this.ambilData()
    }

    newTabel = () => {
        let tabelBaru = this.state.committees
        this.list = document.querySelector("#listCommittees tbody")
        this.rows = ''

        for (let i = 0; i < tabelBaru.length; i++) {
            this.rows += `
                <tr>
                    <td>${i+1}</td>
                    <td>${tabelBaru[i].idNumber}</td>
                    <td>${tabelBaru[i].fullName}</td>
                    <td>${tabelBaru[i].expireddate}</td>
                    <td>
                        <button>Edit</button>
                        <button onClick={this.delete}>Delete</button>
                    </td>
                </tr>`
        }
    
        this.list.innerHTML = this.rows
    }

    searchTable = () => {
        let input;
        let saring;
        let status; 
        let tbody; 
        let tr; 
        let td;
        let i; 
        let j;
        input = document.getElementById("input");
        saring = input.value.toUpperCase();
        tbody = document.getElementsByTagName("tbody")[0];;
        tr = tbody.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td");
            for (j = 0; j < td.length; j++) {
                if (td[j].innerHTML.toUpperCase().indexOf(saring) > -1) {
                    status = true;
                }
            }
            if (status) {
                tr[i].style.display = "";
                status = false;
            } else {
                tr[i].style.display = "none";
            }
        }
    }

    delete = (id) => {
        this.props.firebase.committeesDb().doc(id).delete();
    }

    render() { 
        return ( 
            <div className='margin'>
                <h2>List of Committee</h2>
                <form style={{marginBottom: '20px'}}>
                    <label>Id Number:</label>
                    <input name="idNumber" onChange={(el) => this.setValue(el.target)} type="text" />
                    <label style={{marginLeft: '30px'}}>Full Name:</label>
                    <input name="fullName" onChange={(el) => this.setValue(el.target)} type="text" />
                    <label style={{marginLeft: '30px'}}>Expired Date:</label>
                    <input name="expireddate" onChange={(el) => this.setValue(el.target)} type="date" />
                    <button style={{marginLeft: '30px'}} onClick={this.submit}>Submit</button>
                </form>

                <input placeholder='Search...' type='text' id='input' onKeyUp={this.searchTable} style={{marginBottom: '20px'}} />
                <table id='listCommittees'>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Id Number</th>
                            <th>Full Name</th>
                            <th>Expired Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        );
    }
}

class AddCommittee extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <FirebaseContext.Consumer>
                {firebase => <AddCommitteeForm {...this.props} firebase={firebase} />}
            </FirebaseContext.Consumer>
         );
    }
}
 
export default AddCommittee;