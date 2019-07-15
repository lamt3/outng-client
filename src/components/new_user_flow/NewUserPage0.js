import React, { Component } from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import NewUserPage1 from './new_user_page1/NewUserPage1'
import NewUserPage3 from './new_user_page3/NewUserPage3'
import NewUserBreadCrumb from './bread_crumb/NewUserBreadCrumb'
import DismissKeyboard from '../common/keyboard/DismissKeyboard'
import { Icon, Button } from 'react-native-elements';


export default class NewUserPage0 extends Component{
    constructor(props){
        super(props);
        // this.state={
        //     user:this.props.passedProps
        // }
    }

    render(){
        return(
            <View><NewUserPage3 />

            </View>
            
        );
    }
}