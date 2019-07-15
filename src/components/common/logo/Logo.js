import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import logoImg from '../../../assets/images/icon.png';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={logoImg} style={styles.image} />
        <Text style={styles.text}>OUTING</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    top:'20%',
    flex: 1,
    alignItems: 'center',
    bottom: '10%'
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
    fontSize: 30
  },
});