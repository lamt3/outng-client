/* global require */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Dimensions, FlatList, View, StyleSheet, Text, SafeAreaView, Image, TouchableHighlight} from 'react-native';


import PropTypes from 'prop-types';
import {Button, Icon, Avatar, SearchBar } from 'react-native-elements';

import Modal from "react-native-modal";

import {Navigation} from 'react-native-navigation';

import {List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';

import ChatUserLineItem from './ChatUserLineItem';
import NewUserMatchesUserLineItem from './NewMatchesUserLineItem';

import {loadMatches} from '../../../../actions/matches/MatchesAction'

const chatUser1 = {
    userId:123,
    name:'Bob',
    avatarImageURI:'https://placeimg.com/640/480/people',
    profileInfo:{}


}
const chatUser2 = {
    userId:124,
    name:'Fred',
    avatarImageURI:'https://placeimg.com/640/480/people',
    profileInfo:{}


}
let chatUsersList = [chatUser1, chatUser2]



const SCREEN_WIDTH = Dimensions.get('window').width;
class ChatMenuScreen extends Component{


    constructor(props){
        super(props);
       

        
        this.state={
            chatUsers:chatUsersList,
            search: '',
            isModalVisible:false
        }
        this.ws = new WebSocket('ws://127.0.0.1:1234');
        
    }

    componentDidMount(){
   


        console.log('Trying to open websocket')
        console.log(this.ws)
        this.ws.onopen = () =>{
            console.log('CONNECTED WS')

        }

        this.ws.onmessage = (e) => {

        };




        this.props.loadMatches();

    }

    componentDidUpdate(){
       
    }

    
    updateSearch = search => {
        this.setState({ search });
      };
  
   
    render(){
        const { search } = this.state;
        

        if(this.props.isFetchingMatchedUsers){
            return (
                <View>
                    <Text>Loading</Text>
                </View>
            )
        }
       
       
  
        return( 
            <View style={{flex:1}}>

                <View style={{ width:'100%'}}>
                    <SearchBar
                        placeholder='Search'
                        onChangeText={this.updateSearch}
                        value={search}
                        containerStyle={{
                            // flex:0.08

                        }}
                        inputContainerStyle={{
                            backgroundColor:'white',
                            borderRadius:10,
                            width:'85%'

                        }}
                        lightTheme={true}

                    />
                    
                        <Icon
                            name="sliders"
                            type="font-awesome"
                            size={25}
                            color="black"
                            onPress={() => this.setState({isModalVisible:true})}
                            iconStyle={{
                            position: "absolute",
                            right: 22,
                            bottom: 18

                            }}
                        />
              
                       

                      
                </View>
                
                
                <View style={{flex:0.2}}>
                    <Text style={{marginLeft:8, marginTop:5}}>New Matches</Text>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        style={{}}
                        data={this.props.matchedUsers}
                        renderItem={({item}) =>{
                            return(
                                <NewUserMatchesUserLineItem key={item.userId}  chatUser={item} />
                            );

                            }}
                            keyExtractor={(user) => user.userId + user.name}
                    />
                </View>



                <View style={{marginTop:10,flex:0.7, height:'100%', width:'100%'}}>
                    <Text style={{marginLeft:10, marginTop:10}}>Messages</Text>
                    <FlatList
                        style={{}}
                        data={this.props.matchedUsers}
                        renderItem={({item}) =>{
                            return(
                                <ChatUserLineItem key={item.userId}  chatUser={item} />
                            );

                            }}
                            keyExtractor={(user) => user.userId + user.name}
                    />
                </View>


                <Modal
                        isVisible={this.state.isModalVisible}
                        animationIn="slideInRight"
                        animationOut="slideOutLeft"
                        onBackdropPress={() => this.setState({isModalVisible:false})}
                        scrollTo={this.handleScrollTo}
                        scrollOffset={this.state.scrollOffset}
                        scrollOffsetMax={600 - 300}
                        style={styles.bottomModal}
                    >
                        <View  style={{
                            flex: 0.6,
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            background: "transparent",
                            opacity: 0.9
                        }}>

                                <View
                                        style={{
                                            height: "100%",
                                            width: "100%",
                                            backgroundColor: "#fff",
                                            justifyContent: "flex-start",
                                            borderWidth: 0.2,
                                            borderRadius: 20
                                        }}
                                    >

                                        <Text>
                                            Filter By
                                        </Text>

                                </View>
                                
                        </View>
                        
                    </Modal>
                
            </View>           
                 
               
        );
    }
};
const styles ={
    bottomModal: {
        justifyContent: "flex-end",
        margin: 0
      },
}


ChatMenuScreen.propTypes = {
    matchedUsers: PropTypes.array,
};


function mapStateToProps(state){
    return {
        matchedUsers : state.userMatches.matchedUsers, 
        isFetchingMatchedUsers: state.userMatches.isFetching,
        activeConversations : state.userMatches.activeConversations
    }
}

export default connect(mapStateToProps, {loadMatches})(ChatMenuScreen);
