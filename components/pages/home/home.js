import React, { Component } from 'react';
import { Text, TouchableOpacity, Button, TextInput, Image, StyleSheet, View } from 'react-native';
import { Register, List, Edit } from '../../pages';
// import List from '../list/List';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dataBaru: [{fname: "Fauzan", gmbr:"https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"}],
            logout: false,
            dataUsers: [],
            pages: "home",
            buatEdit: "",
            gbredt: ""
         }
    }
    
    componentDidMount() {
        // this.dataRegister();
        let iniData = this.state.dataBaru
        this.setState({
            dataUsers: iniData
        })
    }

    ubahHome = () => {
        this.setState({
            ...this.state,
            pages: "home"
        })
    }

    ubahReg = () => {
        this.setState({
            ...this.state,
            pages: "register"
        })
    }

    ubahList = () => {
        this.setState({
            ...this.state,
            pages: "list"
        })
    }

    newData = async (datas) => {
        let dtbr = this.state.dataBaru
        const lastData = datas
        dtbr.push(lastData)
    
        await this.setState({
            dataBaru: dtbr
        })
        console.log(this.state.dataBaru)
    }

    newDataEdit = async (datas) => {
        let dtbr = this.state.dataBaru
        const lastData = datas
        dtbr.push(lastData)
    
        await this.setState({
            dataBaru: dtbr
        })
        // console.log(this.state.dataBaru)
    }

    logout = () => {
        this.props.keluar()
        alert('Terima kasih!')
    }

    delete = (nama) => {
        let ygini = nama
        let dtupd = this.state.dataBaru
        for (let i = dtupd.length - 1; i >= 0; i--) {
            if (dtupd[i].fname === ygini) {
                dtupd.splice(i, 1);
            }
        }
        this.setState({
            ...this.state,
            dataBaru: dtupd
        })
    }

    edit = async (inih) => {
        // alert('edit ' + inih)
        let iniya = inih
        let edtin = this.state.dataBaru
        for (let i = edtin.length - 1; i >= 0; i--) {
            if (edtin[i].fname === iniya) {
                await this.setState({
                    ...this.state,
                    dataBaru: edtin,
                    pages: "edit",
                    buatEdit: iniya,
                    gbredt: edtin[i].gmbr
                })
                edtin.splice(i, 1)
            }
        }
    }

    render() {
        if (this.state.pages === "register") {
            return (
                <View style={styles.backgrd1}>
                    <Button
                        title="Home"
                        onPress={this.ubahHome}
                    />
                    <Button
                        title="Register"
                        onPress={this.ubahReg}
                    />
                    <Button
                        title="List"
                        onPress={this.ubahList}
                    />
                    <Button
                        title="Logout"
                        onPress={this.logout}
                    />
                    <Register nihData={this.newData} />
                </View>
            )
        } else if (this.state.pages === "list") {
            return (
                <View style={styles.backgrd1}>
                    <Button
                        title="Home"
                        onPress={this.ubahHome}
                    />
                    <Button
                        title="Register"
                        onPress={this.ubahReg}
                    />
                    <Button
                        title="List"
                        onPress={this.ubahList}
                    />
                    <Button
                        title="Logout"
                        onPress={this.logout}
                    />
                    <List
                        tahEta={this.state.dataUsers}
                        dltDong={this.delete}
                        edtDong={this.edit}
                    />
                </View>
            )
        } else if (this.state.pages === "edit") {
            return (
                <View style={styles.backgrd1}>
                    <Button
                        title="Home"
                        onPress={this.ubahHome}
                    />
                    <Button
                        title="Register"
                        onPress={this.ubahReg}
                    />
                    <Button
                        title="List"
                        onPress={this.ubahList}
                    />
                    <Button
                        title="Logout"
                        onPress={this.logout}
                    />
                    <Edit
                        nihDataEdit={this.newDataEdit}
                        dataAwal={this.state.dataBaru}
                        ygdiedit={this.state.buatEdit}
                        edtgbry={this.state.gbredt}
                    />
                </View>
            )
        } else {
            return (
                <View style={styles.backgrd1}>
                    <Button
                        title="Home"
                        onPress={this.ubahHome}
                    />
                    <Button
                        title="Register"
                        onPress={this.ubahReg}
                    />
                    <Button
                        title="List"
                        onPress={this.ubahList}
                    />
                    <Button
                        title="Logout"
                        onPress={this.logout}
                    />
                    <View style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row'}}>
                        {this.state.dataUsers.map((e, index) => (
                            // <View style={{flexDirection: 'row'}}>
                                <View key={index} style={styles.card}>
                                    <Image style={{height: '85%', width: '100%'}} source={{uri: e.gmbr}} />
                                    {/* <Text>{e.gmbr}</Text> */}
                                    <Text style={{color: 'black', height: '15%'}}>{e.fname}</Text>
                                </View>
                            // </View>
                        ))}
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    backgrd1: {
      flex: 1,
      backgroundColor: '#465881'
    },
    backgrd: {
      flex: 1,
      backgroundColor: '#465881',
      justifyContent: "center",
      alignItems: "center"
    },
    textdlm: {
      color: "white",
      textAlign: "center",
      fontSize: 16,
    },
    card: {
        width: '47%',
        height: 150,
        margin: '1.5%',
        opacity: 0.6,
        alignItems: "center",
        backgroundColor: 'white',
        // flexDirection: 'row'
        // justifyContent: 'space-around'
        // borderColor: 'white'
    }
});
 
export default Home;