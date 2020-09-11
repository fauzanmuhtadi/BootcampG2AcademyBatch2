import React, { Component } from 'react';
import { Text, TouchableOpacity, TextInput, StyleSheet, View } from 'react-native';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
        fullname: "",
        image: "",
        // dataBaru: []
        nama: "",
        gambar: ""
    }
  }

  componentDidMount() {
      let nih = this.props.ygdiedit
      let nihgbr = this.props.edtgbry
      this.setState({
          ...this.state,
          nama: nih,
          gambar: nihgbr
      })
  }

  newDataEdit = () => {
    let fname = this.state.fullname
    let gmbr = this.state.image
    // console.log(this.state.dataBaru)
    this.props.nihDataEdit({ fname, gmbr })
  }

  render() {
    return (
      <View style={styles.backgrd1}>
          <View style={styles.backgrd}>
            <Text style={styles.heading}>FORM EDIT</Text>
            <TextInput
              style={styles.inputan}
            //   placeholder={this.state.nama}
              placeholderTextColor="white"
              onChangeText={text => this.setState({fullname:text})}
            >{this.state.nama}</TextInput>
            <TextInput
              style={styles.inputan}
            //   textContentType="image"
            //   placeholder={this.state.gambar}
              placeholderTextColor="white"
              onChangeText={text => this.setState({image:text})}
            >{this.state.gambar}</TextInput>
            <TouchableOpacity
              title="Edit"
              style={styles.loginRgs}
              onPress={this.newDataEdit}
            >
                <Text style={styles.textdlm}>Save</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputan: {
    height: 50,
    borderColor: 'white',
    borderWidth: 1,
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    justifyContent: "center",
    color: 'white'
  },
  heading: {
      color: 'white',
      fontSize: 20,
      marginBottom: 10,
  },
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
  loginRgs: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    marginTop: 10,
    justifyContent: "center",
    // marginBottom: 10,
    fontSize: 16,
    textAlign: "center",
    backgroundColor: 'green',
    color: 'white'
   }
});

export default Edit;