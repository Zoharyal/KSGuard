import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import api from '../utilities/api';

export default class Profile extends Component {
  static navigationOptions = {
    title: 'Profile',
  };

  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }

  componentWillMount() {
    api.getUser().then((res) => this.setState({
      user: res.user
    }));
    api.getUser().then((res) => console.log('res', res));
    // console.log('this.state.user :', this.state.user);
  }
  
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={ require('../assets/images/user.png')
        }/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{this.state.user.firstName} {this.state.user.lastName}</Text>
              <Text style={styles.info}>Mail: {this.state.user.mail}</Text>
              <Text style={styles.info}>Phone Number: {this.state.user.phone}</Text>           
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#08182f",
    height:100,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:30
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:30,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:18,
    color: "#000000",
    marginTop:10,
    fontWeight: 'bold',
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});