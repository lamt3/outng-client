/* global require */import React, { Component } from 'react';
import {Dimensions, View, StyleSheet, Text, SafeAreaView, Image, TouchableHighlight} from 'react-native';
import { connect } from 'react-redux';



import PropTypes from 'prop-types';
import {Button, Icon, Avatar } from 'react-native-elements';

import {Navigation} from 'react-native-navigation';

import {  List, ListItem, Left, Body, Right, Thumbnail, Tabs, Tab} from 'native-base';

import ChatMenuScreen from './menu/ChatMenuScreen'







const SCREEN_WIDTH = Dimensions.get('window').width;
class ChatScreenIndex extends Component{

    


    constructor(props){
        super(props);
        
        this.state={
            chatUsers:[]
            
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
                title:{text:'Matches'},
                backButton: {
                    
                    visible: false
                  },
			},
		};
    }
    componentDidMount(){
        
       
        
        

        this.navigationEventListener = Navigation.events().bindComponent(this);
  
        Navigation.events().registerBottomTabSelectedListener(({selectedTabIndex ,unselectedTabIndex}) => {
            if(selectedTabIndex === 2){
                Navigation.mergeOptions('chatBottomTab', {
                    bottomTab: {
                      badge: ''
                    }
                });

            }
            

        });
    }

    componentWillAppear() {
   
    }

    
  
   
    render(){
  
        return(            
                 <SafeAreaView style = {styles.mainScreenContainerStyle}>

                    <Tabs locked={true}>
                        <Tab heading="Messages">
                            <ChatMenuScreen />
                        </Tab>

                        <Tab heading="Dates">
              
                        </Tab>
                    </Tabs>


                    
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

export default connect()(ChatScreenIndex);
