import React, { Component } from 'react';
import './style.css';
import { FirebaseContext } from '../../config/firebase';


class HomeForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            borrowersid: '',
            booksid: '',
            expireddate: '',
            borrowers: []
        }
    }

    setValue = (el) => {
        this.setState({
            [el.name]: el.value
        })
    }

    submit = (event) => {
        event.preventDefault()
        let dataSatu = this.state.borrowersid
        let dataDua = this.state.booksid
        let dataTiga = this.state.expireddate
        if (dataSatu === '' || dataDua === '' || dataTiga === '') {
            alert('Please input the data!!')
        } else {
            const { borrowersid, booksid, expireddate } = this.state

            this.props.firebase.borrowersDb().doc().set({
                borrowersid,
                booksid,
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
        const peminjam = this.props.firebase.borrowersDb()
        const snapshot = await peminjam.get()
        snapshot.forEach(async doc => {
            const newBorrowers = this.state.borrowers
            newBorrowers.push(doc.data())
            await this.setState({
                ...this.state,
                borrowers: newBorrowers
            })

            this.newTabel()
        });
    }

    componentDidMount() {
        this.ambilData()
    }

    newTabel = () => {
        let tabelBaru = this.state.borrowers
        this.list = document.querySelector("#listBorrowers tbody")
        this.rows = ''

        for (let i = 0; i < tabelBaru.length; i++) {
            this.rows += `
                <tr>
                    <td>${i+1}</td>
                    <td>${tabelBaru[i].borrowersid}</td>
                    <td>${tabelBaru[i].booksid}</td>
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
        this.props.firebase.borrowersDb().doc(id).delete();
    }

    render() { 
        return ( 
            <div className='margin'>
                <h2>List of Borrowers</h2>
                <form style={{marginBottom: '20px'}}>
                    <label>Borrowers Id:</label>
                    <input name="borrowersid" onChange={(el) => this.setValue(el.target)} type="text" />
                    <label style={{marginLeft: '30px'}}>Books Id:</label>
                    <input name="booksid" onChange={(el) => this.setValue(el.target)} type="text" />
                    <label style={{marginLeft: '30px'}}>Expired Date:</label>
                    <input name="expireddate" onChange={(el) => this.setValue(el.target)} type="date" />
                    <button style={{marginLeft: '30px'}} onClick={this.submit}>Submit</button>
                </form>

                <input placeholder='Search...' type='text' id='input' onKeyUp={this.searchTable} style={{marginBottom: '20px'}} />
                <table id='listBorrowers'>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Borrowers Id</th>
                            <th>Books Id</th>
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

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <FirebaseContext.Consumer>
                {firebase => <HomeForm {...this.props} firebase={firebase} />}
            </FirebaseContext.Consumer>
         );
    }
}
 
export default Home;