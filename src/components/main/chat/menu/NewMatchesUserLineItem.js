/* global require */
import React, { Component } from 'react';
import {Dimensions, View, TouchableHighlight, TouchableOpacity} from 'react-native';



import { Avatar } from 'react-native-elements';

import {Navigation} from 'react-native-navigation';

import { Text, ListItem, Left, Body, Right } from 'native-base';










const SCREEN_WIDTH = Dimensions.get('window').width;
export default class NewMatchesUserLineItem extends Component{

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
                <View style={{}}>
                    <ListItem avatar style={{borderBottomColor:'transparent', marginLeft:0}}>
                        <Body style={{borderBottomColor:'transparent'}}>
                            <Text style={{fontWeight:'bold',fontSize:10, alignSelf: 'center', justifyContent: 'center', marginLeft:10, marginBottom:3}}>{this.props.chatUser.name}</Text>
                            <View style={{alignSelf: 'center', justifyContent: 'center'}}>
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
                                    overlayContainerStyle={{
                                        borderRadius:10,
                                        // borderTopEndRadius:30
                                        // height:100,
                                        // width:100

                                    }}
                                    avatarStyle={{
                                        borderRadius:10,
                                        // borderTopEndRadius:30
                                        // height:100,
                                        // width:100

                                    }}
                                    
                                    icon={{name: 'user', type: 'font-awesome'}}
                                    size="medium"                                  
                                    source={{
                                        uri:this.props.chatUser.avatarImageURI
                                        // uri:'https://placeimg.com/640/480/people'
                                    }}
                                />

                            </View>
                            
                        </Body>

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

                            {/* <Body style={{width:SCREEN_WIDTH-100}}>
                                <Text>{this.props.chatUser.name}</Text>
                                <Text note>aegaeogkeaopgkopako</Text>
                           
                            </Body>
                            <Right style={{borderBottomColor:'transparent', width:5}}>
                            
                                    <Text style={{fontSize:10, bottom:50, left:250, color:'red', position:'absolute'}}>New</Text>


                            </Right> */}

                        </TouchableOpacity>
                        
                    </ListItem>
                </View>       
        );
    }
};
