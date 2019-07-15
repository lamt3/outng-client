import React, { Component } from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

import { clientService } from '../../services/clients/ClientService'
import {goToHomeIndex, goToNewUserIndex} from '../../navigation/main_screens/MainScreenNavRouter'


const MARGIN = 40;
export default class Login extends Component {
  constructor(props){
    super(props);
    this.pushToNextScreen.bind(this);


  }
  
  pushToNextScreen(resp){
    if(resp.newUser){
      goToNewUserIndex();

    }else{
      goToHomeIndex();
    }
  }

  fbAuth() {
    clientService.fbAuth(this.pushToNextScreen);
  }
  render() {
    return (
        
        <View style={styles.move}>
          <TouchableOpacity style={styles.button} onPress={this.fbAuth.bind(this)}>
            <Text style={styles.text}>Sign In with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Sign In with Phone Number</Text>
          </TouchableOpacity>
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  move:{
    height: 150,
    marginBottom: 100,
    alignItems: 'center',
    justifyContent:'space-around'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fe6667',
    height: MARGIN,
    width: 300,
    borderRadius: 20,
    zIndex: 100,
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },

});