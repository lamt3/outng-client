
import React, { Component } from 'react';
import {KeyboardAvoidingView,View, Text, Dimensions} from 'react-native';

import { Icon, Button } from 'react-native-elements';

import {Navigation} from 'react-native-navigation';

import InputForm1 from './InputForm1'
import { empty } from 'rxjs';



const SCREEN_WIDTH = Dimensions.get('window').width;

export default class NewUserPage1 extends Component{

    constructor(props){
        super(props);
        
        this.state={
            // basicInfo:{
            //     profileName:empty,
            //     birthDate:empty,
            //     iam:empty,
            //     lookingFor:empty
            // }
        }
        this.buttonPress.bind(this);
        // this.handleProfileInput.bind(this);
       
    }
        
   

    buttonPress(){
        navigator.geolocation;

    }
    
    // handleProfileInput(profileName){
    //     console.log(profileName);
    //     this.props.a(profileName)
    // }




    render(){
     
        return(
            <KeyboardAvoidingView  keyboardVerticalOffset={10} behavior='position' enabled>
                <View style={styles.inputStyle}>


                   
                    <Text style={styles.bodyTextStyle}>Just a few steps to get started!</Text>
                    
                    <InputForm1 
                        handleProfileInput={this.props.handleProfileInput}
                        handleBirthDateInput={this.props.handleBirthDateInput}
                        handleIAmInput={this.props.handleIAmInput}
                        handleLookingForInput={this.props.handleLookingForInput}
                    />

                     <Text style={styles.bodyTextStyle2}>Discover Foodies Around You</Text>

                     <View style={{ justifyContent:'center', alignItems:'stretch', alignSelf:'center', height:100,}}> 
                        <Button
                            containerStyle={{
                                
                            }}
                            icon={
                                <Icon
                                name="location-pin"
                                type="entypo"
                                size={25}
                                color="black"
                                iconStyle={{marginLeft:5, marginTop:0}}
                                />
                            }
                            iconRight
                            type="clear"
                            title="Share My Location"
                            onPress={this.buttonPress}
                        />
                     </View> 

                     

  


               </View> 

         </KeyboardAvoidingView> 






        );
    }
};

const styles = {
    headerTextStyle: {
        fontSize:50
    },
    inputStyle:{
        // alignItems:'center',
        // alignSelf:'center',
        flex:0,
        
        // marginTop: 60,
        position: 'relative',


    },

    bodyTextStyle: {
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center',
        // marginTop: 30,
        // marginLeft: 25,
        marginRight:20,
        fontWeight:'bold',
       
        fontSize:20
    },
    bodyTextStyle2: {
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center',
        marginTop: 80,
        // marginRight:20,
        // marginLeft: 25,
        // marginRight:40,
       
        fontSize:20
    }

}
