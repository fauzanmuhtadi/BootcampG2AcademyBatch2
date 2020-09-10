import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
// import { Card, Button, ButtonGroup } from 'react-bootstrap';
// import { Link } from "react-router-dom";
import { FirebaseContext } from '../../../config/firebase';

// import firebase from "../../../config/firebase";
// import firebase from "firebase";

class HomeForm extends Component {
    constructor(props) {
        super(props);
        this.ref = this.props.firebase.usersDb();
        this.state = { 
            newStudent: []
         }
    }

    collectionStudent = (querySnapshot) => {
        const newStudent = [];
        querySnapshot.forEach((doc) => {
          const { name, username, address } = doc.data();
          newStudent.push({ name, username, address });
        });
        this.setState({
          newStudent
        });
    };
    
    componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.collectionStudent);
    }

    render() { 
        return ( 
            <div>
                <div style={{ display: 'inline-block', margin: '33px' }}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img style={{height: '180px', width: '286px'}} variant="top" src="https://media-exp1.licdn.com/dms/image/C5103AQEHNSw5h-XKyQ/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=q3mdmY5CS8fDIiY3eofXj1bAfJfpHROXfy_j_qAIqwo" />
                        <Card.Body>
                            <Card.Title>Jason Rich Darmawan Onggo Putra</Card.Title>
                            <Card.Text>
                                Focus on testing the MVP, everything else can wait. Learn from the mistakes.
                            </Card.Text>
                            <Button variant="primary" href="https://github.com/kidfrom">Portfolio</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div style={{ display: 'inline-block', margin: '33px' }}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img style={{height: '180px', width: '286px'}} variant="top" src="#taufik" />
                        <Card.Body>
                            <Card.Title>Taufik Muharrom</Card.Title>
                            <Card.Text>
                                Your future is created by what you to do today, not tommorow.
                            </Card.Text>
                            <Button variant="primary" href="https://github.com/taufik-muharrom">Portfolio</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div style={{ display: 'inline-block', margin: '33px' }}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img style={{height: '180px', width: '286px'}} variant="top" src="https://avatars0.githubusercontent.com/u/57663851?s=460&u=7bd2cabb95e920ea9cc3bea599b9f9baff618e9f&v=4" />
                        <Card.Body>
                            <Card.Title>Aisah Taufik Hidayat Abdullah</Card.Title>
                            <Card.Text>
                                Do good and good will come to you.
                            </Card.Text>
                            <Button variant="primary" href="https://github.com/athaisyah">Portfolio</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div style={{ display: 'inline-block', margin: '33px' }}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img style={{height: '180px', width: '286px'}} variant="top" src="https://i.ibb.co/JnZrPVP/Whats-App-Image-2020-03-23-at-09-15-17.jpg" />
                        <Card.Body>
                            <Card.Title>Fauzan Muhtadi</Card.Title>
                            <Card.Text>
                                Today must better than yesterday.
                            </Card.Text>
                            <Button variant="primary" href="https://github.com/fauzanmuhtadi/BootcampG2AcademyBatch2">Portfolio</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div style={{ display: 'inline-block', margin: '33px' }}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img style={{height: '180px', width: '286px'}} variant="top" src="#rifqi" />
                        <Card.Body>
                            <Card.Title>Rifqi Fakhirin</Card.Title>
                            <Card.Text>
                                Being good is about how to combine consistency and integrity.
                            </Card.Text>
                            <Button variant="primary" href="https://github.com/rifqifakhirin">Portfolio</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div style={{ display: 'inline-block', margin: '33px' }}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img style={{height: '180px', width: '286px'}} variant="top" src="#ryan" />
                        <Card.Body>
                            <Card.Title>Ryan Suryohadiprojo S</Card.Title>
                            <Card.Text>
                                ASK! Attitude, Skill and Knowledge.
                            </Card.Text>
                            <Button variant="primary" href="https://github.com/RYANSUTODIWIRYO">Portfolio</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div style={{ display: 'inline-block', margin: '33px' }}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img style={{height: '180px', width: '286px'}} variant="top" src="#yusal" />
                        <Card.Body>
                            <Card.Title>Yusal Sumardi</Card.Title>
                            <Card.Text>
                                Aku Lebih Memilih Untuk Merobek Otakku, Membawanya Ke Perempatan Terdekat, Dan Bermain Lompat Tali Dengannya Dari Pada Harus Jadi Tetangga Kalian.
                            </Card.Text>
                            <Button variant="primary" href="https://github.com/yusalsumardi">Portfolio</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div style={{ display: 'inline-block', margin: '33px' }}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img style={{height: '180px', width: '286px'}} variant="top" src="https://i.ibb.co/yFkZY5y/photoku.jpg" />
                        <Card.Body>
                            <Card.Title>Ahmad Nabil</Card.Title>
                            <Card.Text>
                                Seharusnya kamu belajar berjalan dulu, nak! Barulah kamu bisa berlari.
                            </Card.Text>
                            <Button variant="primary" href="https://github.com/nbl77">Portfolio</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    {this.state.newStudent.map((e) => (
                        <div style={{ display: 'inline-block', margin: '33px' }}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img style={{height: '180px', width: '286px'}} variant="top" src="https://i.ibb.co/yFkZY5y/photoku.jpg" />
                                <Card.Body>
                                    <Card.Title>{e.name}</Card.Title>
                                    <Card.Text>
                                        {e.username}
                                    </Card.Text>
                                    <Button variant="primary" href="https://github.com/nbl77">Portfolio</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
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