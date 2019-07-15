
import React, { Component } from 'react';
import { View, StyleSheet, Text, SafeAreaView} from 'react-native';
import NewUserPage1 from './new_user_page1/NewUserPage1'

import NewUserBreadCrumb from './bread_crumb/NewUserBreadCrumb'
import DismissKeyboard from '../common/keyboard/DismissKeyboard'
import {Button, Icon } from 'react-native-elements';

import {Navigation} from 'react-native-navigation';

import NewUserButton from './NewUserButton'




export default class NewUserScreenIndex extends Component{

    constructor(props){
        super(props);
        this.handleProfileInput.bind(this);
        this.handleBirthDateInput.bind(this);
        this.handleIAmInput.bind(this);

        this.state={
            screenToRender:1,
            user:{
                basicInfo:{},
                interests:{},
                photos:{}
            },
            
            basicInfo2:{
                profileName:'',
                birthDate:'',
                iam:'',
                lookingFor:''
            }
           
        }
        
    }
    

    handleProfileInput(profileText){
        
        this.setState({
            basicInfo2: {
                ...this.state.basicInfo2,
                profileName: profileText.nativeEvent.text
            }
        }, );
        // console.log(this.state.basicInfo2.profileName)
        // this.setState({
        //     user:{
        //         ...this.state.user,
        //         basicInfo:this.state.basicInfo2
        //     }
        // })
    }

    handleBirthDateInput(birthDateText){
        this.setState({
            basicInfo2: {
                ...this.state.basicInfo2,
                birthDate: birthDateText.nativeEvent.text
            }
        }, );

    }

    handleIAmInput(iamText){
        this.setState({
            basicInfo2: {
                ...this.state.basicInfo2,
                iam: iamText
            }
        }, );

    }
    handleLookingForInput(lookingForText){
        this.setState({
            basicInfo2: {
                ...this.state.basicInfo2,
                lookingFor: lookingForText
            }
        }, );

    }
   
    render(){

        return(
            <DismissKeyboard>
                 <SafeAreaView style = {styles.mainScreenContainerStyle}>
                 <View style={{flex:0.1, justifyContent:'flex-end'}}>
                        <NewUserButton 
                            breadCrumbIndex={2} 
                            buttonText='Next' 
                            componentId={this.props.componentId}
                            profileName={this.state.basicInfo2.profileName}
                            birthDate = {this.state.basicInfo2.birthDate}
                            iam = {this.state.basicInfo2.iam}
                            into = {this.state.basicInfo2.lookingFor}
                        />
                    </View>
                 
                     <View style={{flex:0.75, justifyContent:'center'}}>
                         <NewUserPage1 
                             handleProfileInput={(text) => this.handleProfileInput(text)}
                             handleBirthDateInput={(text) => this.handleBirthDateInput(text)}
                             handleIAmInput={(text)=>this.handleIAmInput(text)}
                             handleLookingForInput={(text)=>this.handleLookingForInput(text)}
                         />
                     </View>
                   
                     <View style = {{flex:0.15, justifyContent:'center'}}>
                        <NewUserBreadCrumb number={this.state.screenToRender}/>
                    </View>
                    
                 </SafeAreaView>
            </DismissKeyboard>
        );
    }
};
const styles = {
    mainScreenContainerStyle: {
        flex:1, //height (according to its parent)
        // flexDirection:'column',
        // alignItems:'stretch',
        // justifyContent:'space-around',
        // overflow:'hidden'
    }
}