import React, { Component } from 'react';
// import './style.css';
import { FirebaseContext } from '../../config/firebase';


class InputBookForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            booksId: '',
            title: '',
            author: '',
            yearOfPublication: '',
            edition: '',
            pageNumber: '',
            numberOfBooks: '',
            physicalRecords: '',
            books: []
        }
    }

    setValue = (el) => {
        this.setState({
            [el.name]: el.value
        })
    }

    submit = (event) => {
        event.preventDefault()
        let dataSatu = this.state.booksId
        let dataDua = this.state.title
        let dataTiga = this.state.author
        let dataEmpat = this.state.yearOfPublication
        let dataLima = this.state.edition
        let dataEnam = this.state.pageNumber
        let dataTujuh = this.state.numberOfBooks
        let dataDelapan = this.state.physicalRecords
        if (dataSatu === '' || dataDua === '' || dataTiga === '' || dataEmpat === '' || dataLima === '' || dataEnam === '' || dataTujuh === '' || dataDelapan === '') {
            alert('Please input the data!!')
        } else {
            const { booksId, title, author, yearOfPublication, edition, pageNumber, numberOfBooks, physicalRecords } = this.state

            this.props.firebase.booksDb().doc().set({
                booksId,
                title,
                author,
                yearOfPublication,
                edition,
                pageNumber,
                numberOfBooks,
                physicalRecords
            }).then(() => {
                window.location.reload()
            }).catch(err => {
                console.log(err);
                alert(err.message)
            })
        }
    }

    ambilData = async () => {
        const buku = this.props.firebase.booksDb()
        const snapshot = await buku.get();
        snapshot.forEach(async doc => {
            const newBooks = this.state.books
            newBooks.push(doc.data())
            await this.setState({
                ...this.state,
                books: newBooks
            })
            
            this.newTabel()
        });
    }

    componentDidMount() {
        this.ambilData()
    }

    newTabel = () => {
        let tabelBaru = this.state.books
        this.list = document.querySelector("#listBooks tbody")
        this.rows = ''

        for (let i = 0; i < tabelBaru.length; i++) {
            this.rows += `
                <tr>
                    <td>${i+1}</td>
                    <td>${tabelBaru[i].booksId}</td>
                    <td>${tabelBaru[i].title}</td>
                    <td>${tabelBaru[i].author}</td>
                    <td>${tabelBaru[i].yearOfPublication}</td>
                    <td>${tabelBaru[i].edition}</td>
                    <td>${tabelBaru[i].pageNumber}</td>
                    <td>${tabelBaru[i].numberOfBooks}</td>
                    <td>${tabelBaru[i].physicalRecords}</td>
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
        this.props.firebase.booksDb().doc(id).delete();
    }

    render() { 
        return ( 
            <div className='margin'>
                <h2>List of Book</h2>
                <form style={{marginBottom: '20px'}}>
                    <label>Books Id:</label>
                    <input style={{marginLeft: '80px', width: '80%'}} name="booksId" onChange={(el) => this.setValue(el.target)} type="text" /><br />
                    <label>Title:</label>
                    <input style={{marginLeft: '110px', width: '80%'}} name="title" onChange={(el) => this.setValue(el.target)} type="text" /><br />
                    <label>Author:</label>
                    <input style={{marginLeft: '93px', width: '80%'}} name="author" onChange={(el) => this.setValue(el.target)} type="text" /><br />
                    <label>Year of Publication:</label>
                    <input style={{marginLeft: '6px', width: '80%'}} name="yearOfPublication" onChange={(el) => this.setValue(el.target)} type="number" /><br />
                    <label>Edition:</label>
                    <input style={{marginLeft: '92px', width: '80%'}} name="edition" onChange={(el) => this.setValue(el.target)} type="text" /><br />
                    <label>Page Number:</label>
                    <input style={{marginLeft: '43px', width: '80%'}} name="pageNumber" onChange={(el) => this.setValue(el.target)} type="number" /><br />
                    <label>Physical Records:</label>
                    <input style={{marginLeft: '18px', width: '80%'}} name="physicalRecords" onChange={(el) => this.setValue(el.target)} type="text" /><br />
                    <label>Number of Books:</label>
                    <input style={{marginLeft: '16px', width: '80%'}} name="numberOfBooks" onChange={(el) => this.setValue(el.target)} type="number" /><br />
                    <button style={{marginTop: '15px'}} onClick={this.submit}>Submit</button>
                </form>

                <input placeholder='Search...' type='text' id='input' onKeyUp={this.searchTable} style={{marginBottom: '20px'}} />
                <table id='listBooks'>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Books Id</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Year of Publication</th>
                            <th>Edition</th>
                            <th>Page Number</th>
                            <th>Number of Books</th>
                            <th>Physical Records</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        );
    }
}

class InputBook extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <FirebaseContext.Consumer>
                {firebase => <InputBookForm {...this.props} firebase={firebase} />}
            </FirebaseContext.Consumer>
         );
    }
}
 
export default InputBook;