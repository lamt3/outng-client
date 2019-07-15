/* global require */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Dimensions, FlatList, View, StyleSheet, Text, SafeAreaView, Image, TouchableHighlight} from 'react-native';


import PropTypes from 'prop-types';
import {Button, Icon, Avatar, SearchBar } from 'react-native-elements';

import Modal from "react-native-modal";

import {Navigation} from 'react-native-navigation';

import {List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';






const SCREEN_WIDTH = Dimensions.get('window').width;
export default class FilterModal extends Component{


    constructor(props){
        super(props);
       

        
        this.state={
            isModalVisible:true
        }
      
        
    }

    componentDidMount(){
   



    }

    componentDidUpdate(){
       
    }

    
   
    render(){

        

     
       
  
        return( 
            
                <Modal
                        isVisible={this.state.isModalVisible}
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
                                            // height: "100%",
                                            // width: "100%",
                                            backgroundColor: "#fff",
                                            justifyContent: "flex-start",
                                            borderWidth: 0.2,
                                            borderRadius: 20
                                        }}
                                    >

                                        <Text style={{marginTop:300}} >
                                           
                                            Filter By
                                        </Text>
                                        <Text>
                                            Changes
                                        </Text>

                                </View>
                                
                        </View>
                        
                    </Modal>
                
                      
                 
               
        );
    }
};
const styles ={
    bottomModal: {
        justifyContent: "flex-end",
        margin: 0
      },
}





