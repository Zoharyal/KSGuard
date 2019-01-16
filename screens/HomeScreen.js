import React from 'react';
import SocketIOClient from 'socket.io-client';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Icon } from 'react-native-elements';


import api from '../utilities/api';


export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      alarm: [],
      socket: []
    };
  }

  componentDidMount() {
    this.socket = SocketIOClient('http://king-secure.alwaysdata.net:80');
    this.socket.on('statusUpdate', function(data) {
      this.setState({ socket: data })
    }.bind(this));
    api.getAlarm().then((res) => this.setState({
      alarm: res.alarm
    }));
    api.getAlarm().then((res) => console.log('res', res.alarm));
  }

  static navigationOptions = {
    header: null,
  };

  async triggerAlarm() {
    let status = this.state.alarm.status;
    let updatedStatus;
    { status === 'off' ? updatedStatus = {status: 'on'} : updatedStatus = {status: 'off'}}
    api.setAlarm(updatedStatus).then((res) => (res));
    this.setState(prevState => ({
      alarm: {
        ...prevState.alarm,
        status: updatedStatus.status
      }
    }));
  }



  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={ require('../assets/images/ks_logo_mini.jpg')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <Text style={styles.getKSText}>KS Guard</Text>
            <Text style={styles.getStartedText}>
              Alarm: 
            </Text>
            <Text style={styles.getAlarmText}>{this.state.alarm.name}</Text>
            <Text style={styles.getStartedText}>Status: { this.state.alarm.status === 'on' ? <Text style={styles.alarmProtected}>Protected</Text> : <Text style={styles.alarmUnprotected}>Unprotected</Text> } </Text>
          </View>

          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => this.triggerAlarm()}>
            <Icon name="fingerprint" size={70} reverse containerStyle={styles.powerbutton}/>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08182f',
  },
  alarmProtected: {
    color: '#32cd32'
  },
  alarmUnprotected: {
    color: '#ff0000'
  },
  contentContainer: {
    paddingTop: 30
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    flex: 1,
    width: 300,
    resizeMode: 'contain'
  },
  powerbutton: {
    paddingTop: 10
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 20,
    color: '#fff',
    lineHeight: 24,
    textAlign: 'center',
    margin: 5
  },
  getAlarmText: {
    fontSize: 20,
    color: '#fff',
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  getKSText: {
    paddingTop: 20,
    fontSize: 28,
    color: '#fff',
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
