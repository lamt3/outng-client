/* global require */import React, { Component } from 'react';
import {Dimensions, View, StyleSheet, Text, SafeAreaView, Image, TouchableHighlight} from 'react-native';


import PropTypes from 'prop-types';
import {Button, Icon, Avatar } from 'react-native-elements';

import {Navigation} from 'react-native-navigation';

import {  List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';









const SCREEN_WIDTH = Dimensions.get('window').width;
export default class ChatProfileScreenIndex extends Component{

    constructor(props){
        super(props);
        
        this.state={
            
            
        }
        
        
    }

    static options() {
		return {
			topBar: {
                visible:true,
				noBorder: true,
				drawBehind: true,
				background: {
					color: 'transparent'
                },
                
                backButton: {
                    
                    title: ''
                  },
			},
		};
    }
    componentDidMount(){
        // this.navigationEventListener = Navigation.events().bindComponent(this);
  
        // const bottomTabEventListener = Navigation.events().registerBottomTabSelectedListener(({selectedTabIndex ,unselectedTabIndex}) => {
        //     if(selectedTabIndex === 2){
        //         Navigation.mergeOptions('chatBottomTab', {
        //             bottomTab: {
        //               badge: ''
        //             }
        //         });

        //     }
            

        // });
    }

    componentWillAppear() {
   
    }

    
  
   
    render(){
  
        return(            
                 <SafeAreaView style = {styles.mainScreenContainerStyle}>
                    <Text>hI</Text>
                    
                    
                 </SafeAreaView>
           
        );
    }
};
const styles = {
    mainScreenContainerStyle: {
        flex:1,
        // alignItems: 'flex-start' 
    },
   
    
}
