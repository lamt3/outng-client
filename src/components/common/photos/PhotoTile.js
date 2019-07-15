
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



const SCREEN_WIDTH = Dimensions.get('window').width;

export default class PhotoTile extends Component{

    state = {
        avatarSource: null,
        videoSource: null,
      };
    
      constructor(props) {
        super(props);
    
        this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
        
      }
    
      selectPhotoTapped() {
        const options = {
          allowsEditing:true,
          quality: 1.0,
          maxWidth: 500,
          maxHeight: 500,
          storageOptions: {
            skipBackup: true,
          },
        };
    
        ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled photo picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            let source = { uri: response.uri };
    
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
    
            this.setState({
              avatarSource: source,
            });
          }
        });
      }
    
      
    
      render() {
        return (
          
            <View style={styles.container}>
                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                    <View
                        style={[
                        styles.avatar,
                        styles.avatarContainer,
                        { marginBottom: 20 },
                        ]}
                    >
                    {this.state.avatarSource === null ? 
                        (<Text>Select a Photo</Text>) 
                        : 
                        (<Image style={styles.avatar} source={this.state.avatarSource} />)
                    }
                    </View>
                </TouchableOpacity>            
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