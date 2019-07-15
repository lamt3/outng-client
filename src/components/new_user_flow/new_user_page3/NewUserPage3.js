
import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    PixelRatio,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import ImagePicker from 'react-native-image-picker';

  import PhotoTile from '../../common/photos/PhotoTile'


const SCREEN_WIDTH = Dimensions.get('window').width;

export default class NewUserPage3 extends Component{

    
      
    
      render() {
        return (
          <View style={{}}>
            <View style={{flexDirection:'row', justifyContent:'center',}}>
              <PhotoTile />
              <PhotoTile />
            </View>
            <View style={{flexDirection:'row', justifyContent:'center'}}>
              <PhotoTile />
              <PhotoTile />
            </View>
            <View style={{flexDirection:'row', justifyContent:'center'}}>
              <PhotoTile />
              <PhotoTile />
            </View>

          </View>
          
          
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#F5FCFF',
        backgroundColor:'white'
      },
      avatarContainer: {
        borderColor: '#9B9B9B',
        // borderWidth: 1 / PixelRatio.get(),
        borderWidth:1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      avatar: {
        borderRadius: 30,
        width: 150,
        height: 150,
      },
    });