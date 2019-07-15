
import React, { Component } from 'react';
import {Dimensions, View, StyleSheet, Text, SafeAreaView, Image, TouchableHighlight} from 'react-native';



// import {Button, Icon } from 'react-native-elements';

import {Navigation} from 'react-native-navigation';

import {  DeckSwiper, Card, CardItem, Thumbnail, Left, Body } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';






const SCREEN_WIDTH = Dimensions.get('window').width;
export default class UserProfileScreenIndex extends Component{

    constructor(props){
        super(props);

        this.state={
            index: 0,
            imageWidth: null
        }
    }

    componentDidMount(){
        let homeIcon;
        Icon.getImageSource('plus', 20).then((source) => { homeIcon = source});
        console.log('ICON ' + homeIcon)
    }
  
   
    render(){
        
        return(



            
                 <SafeAreaView style = {styles.mainScreenContainerStyle}>
                    <Text>Profile</Text>
                    <Icon name={'plus'} />
                
                 
                    
                 </SafeAreaView>
           
        );
    }
};
const styles = {
    mainScreenContainerStyle: {
        flex:1,
        // alignItems: 'flex-start' 
    },
    container: {
        flex: 1,
        // height:100,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center'
       
    },
    // image: {
    //     flex: 2,
    //     width: 320,
    //     justifyContent: 'flex-end',
    //     alignItems: 'center'
    // },
    imageLabel: {
        textAlign: 'center',
        backgroundColor: 'rgba(100, 100, 100, 0.5)',
        color: 'white',
        width: 320
    },
    empty: {
        flex: 1
    }
    
}
