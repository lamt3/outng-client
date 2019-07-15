import React, {Component} from 'react';

import {StyleSheet, View, Image, ImageBackground, Dimensions} from 'react-native';

import bgSrc from '../../../assets/images/WallPaper2.png';


export default class Wallpaper extends Component {
    render() {
      return (
        // <ImageBackground style={styles.picture} source={bgSrc} resizemode='cover'>
        <View style={styles.picture}>

            {this.props.children}

        </View>
        // </ImageBackground>
      );
    }
  }
  
  const styles = StyleSheet.create({
    picture: {
      flex: 1,
    //   resizeMode: 'stretch',
    },
  });