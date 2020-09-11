import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buatList: []
         }
    }

    componentDidMount() {
        // let skrg = this.state.buatList
        let nih = this.props.tahEta
        // skrg.push(nih)
        this.setState({
            buatList: nih
        })
    }

    tbledt = (inih) => {
        // alert('edit')
        this.props.edtDong(inih)
    }

    tbldlt = (nama) => {
        // alert(nama)
        this.props.dltDong(nama)
    }

    render() {
        return (
            <View>
                <View>
                    <TextInput></TextInput>
                </View>
                <View style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column-reverse'}}>
                    {this.state.buatList.map((e) => (
                        // <View style={{flexDirection: 'column-reverse'}}>
                            <View style={styles.listNama}>
                                {/* <Image style={{height: '85%', width: '100%'}} source={{uri: e.gmbr}} /> */}
                                {/* <Text>{e.gmbr}</Text> */}
                                <Text style={{color: 'black', fontSize: 20}}>{e.fname}</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Button onPress={() => this.tbledt(e.fname)} color='orange' title="Edit" />
                                    <Button onPress={() => this.tbldlt(e.fname)} color='red' title="Delete" />
                                </View>
                            </View>
                        // </View>
                    ))}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listNama: {
        height: 50,
        marginBottom: 3,
        flexDirection: 'row',
        // opacity: 0.6,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        // color: 'white'
    },
});

export default List;
