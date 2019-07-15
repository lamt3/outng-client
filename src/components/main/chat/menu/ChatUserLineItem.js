/* global require */
import React, { Component } from 'react';
import {Dimensions, View, TouchableHighlight, TouchableOpacity} from 'react-native';



import { Avatar } from 'react-native-elements';

import {Navigation} from 'react-native-navigation';

import { Text, ListItem, Left, Body, Right } from 'native-base';










const SCREEN_WIDTH = Dimensions.get('window').width;
export default class ChatUserLineItem extends Component{

    constructor(props){
        super(props);
    
        this.state={
            chatUsers:[]
            
        }
        
        
    }

    componentDidMount(){
    
    }
    
  
   
    render(){
  
        return(     
                <View>
                    <ListItem avatar style={{borderBottomColor:'transparent'}}>
                        <Left style={{borderBottomColor:'transparent', justifyContent:'flex-start'}}>
                            <Avatar 
                                onPress={() => {
                                    Navigation.push('chatScreenID', {
                                        component: {
                                            name: 'outng.ChatProfileScreenIndex',
                                            passProps:{
                                                chatUser:this.props.chatUser
                                            }
                                        },
                                        
                                    })
                                }}
                                rounded
                                icon={{name: 'user', type: 'font-awesome'}}
                                size="medium"
                                source={{
                                    uri:this.props.chatUser.avatarImageURI
                                    // uri:'https://placeimg.com/640/480/people'
                                }}
                             />
                        </Left>

                        <TouchableOpacity onPress={() => {
                            Navigation.push('chatScreenID', {
                                        component: {
                                            name: 'outng.ChatRoomScreen',
                                            passProps:{
                                                chatUser:this.props.chatUser
                                            }
                                        },
                                       
                                    })

                            }}>

                            <Body style={{width:SCREEN_WIDTH-100}}>
                                <Text>{this.props.chatUser.name}</Text>
                                <Text note>aegaeogkeaopgkopako</Text>
                           
                            </Body>
                            <Right style={{borderBottomColor:'transparent', width:5}}>
                            
                                    <Text style={{fontSize:10, bottom:50, left:250, color:'red', position:'absolute'}}>New</Text>


                            </Right>

                        </TouchableOpacity>
                        
                    </ListItem>
                </View>       
        );
    }
};
