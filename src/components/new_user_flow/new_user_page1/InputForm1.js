

import React, { Component } from 'react';
import {DatePickerIOS, TextInput, KeyboardAvoidingView,View, StyleSheet, Text, Dimensions} from 'react-native';


import { Icon, } from 'react-native-elements';


import {Picker, Button, Label, Container, Header, Content, Form, Item, Input } from 'native-base';


// import DateTimePicker from 'react-native-modal-datetime-picker';


// import {Icon} from 'react-native-vector-icons/Ionicons';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class InputForm1 extends Component{

    constructor(props){
        super(props);
        console.log(this.props.onProfileInput)
        this.state = {
            formData:{},
            chosenDate: new Date(),
            isDateTimePickerVisible: false,
            selected2: undefined,
            selected: undefined,

            basicInfo:{
                profileName:'',
                birthDate:'',
                iam:'',
                lookingFor:''
            }

        }
    }

    onValueChange2(value) {
        const v = value == 'key0' ? 'male' : 'female'
        console.log(v)
        this.setState({
            selected2: value,
            iam: value
          }, this.props.handleIAmInput(v));
        
       
      }
      onValueChange(value) {
        const v = value == 'key0' ? 'male' : 'female'
        this.setState({
            selected: value,
            lookingFor: value
          }, this.props.handleLookingForInput(v));
        
      }


    render(){
        // let {profileName} = this.state.basicInfo
        // const dateFormat =  '/^\d{2}([./-])\d{2}\1\d{4}$/'

        return(
            <View style={{marginTop:40}}>
                <Form style={{ width:SCREEN_WIDTH-20, justifyContent:'center', alignSelf:'center'}}>
                    
                    <Item floatingLabel style={{width: SCREEN_WIDTH-70}}>
                        <Label>Profile Name</Label>
                        <Input onEndEditing={(text) => {
                            // this.setState({
                            //     basicInfo: {
                            //     ...this.state.basicInfo,
                            //     profileName: text
                            //     }
                            // });
                            this.props.handleProfileInput(text);
                            // console.log(this.state.basicInfo.profileName);
                        }}/>
                       
                    </Item>
                    

                    <Item floatingLabel style={{width: SCREEN_WIDTH-70}}>
                        <Label>Birth Date (MM.DD.YYY)</Label>
                        
                        <Input                    
                            maxLength={10} 
                            keyboardType='numeric' 
                            onEndEditing={(text) => {
                            // this.setState({
                            //     basicInfo: {
                            //     ...this.state.basicInfo,
                            //     birthDate: text
                            //     }
                            // });
                            this.props.handleBirthDateInput(text);
                            // console.log(this.state.basicInfo.profileName);
                        }}/>
                        
                        {/* <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this._handleDatePicked}
                            onCancel={this._hideDateTimePicker}
                        /> */}
                        
                        {/* <DatePicker
                            defaultDate={new Date(2018, 4, 4)}
                            minimumDate={new Date(1950, 1, 1)}
                            maximumDate={new Date(2018, 12, 31)}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={'slide'}
                            androidMode={"default"}
                            placeHolderText="Select date"
                            textStyle={{ color: "black", right:10 }}
                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                            onDateChange={this.setDate}
                            disabled={false}
                        
                        /> */}
                       
                    </Item>

                    <View style={{flexDirection:'row', marginTop:30,  }}>
                        <Item picker style={{marginLeft:15, width:  SCREEN_WIDTH / 2- 50}}>
                            
                            <Picker
                                mode="dialog"
                                iosIcon={<Icon name="arrow-drop-down" IconType='MaterialIcons' />}
                                style={{ marginLeft:0, width: SCREEN_WIDTH / 2- 50}}
                                placeholder="I am a"
                                placeholderStyle={{ color: "black", justifyContent:'flex-start', paddingLeft:2}}
                                textStyle={{justifyContent:'flex-start', paddingLeft:2}}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.selected2}
                                onValueChange={this.onValueChange2.bind(this)}
                            >
                                <Picker.Item label="Male" value="key0" />
                                <Picker.Item label="Female" value="key1" />
            
                            </Picker>
                            <Item picker style={{marginLeft: 35, width:  SCREEN_WIDTH / 2 -50 }}>
                            <Picker
                                mode="dropdown"
                            
                                iosIcon={<Icon name="arrow-drop-down" IconType='MaterialIcons' />}
                                style={{ width: SCREEN_WIDTH / 2 - 50}}
                                placeholder="Looking for"
                                placeholderStyle={{ color: "black", justifyContent:'flex-start', paddingLeft:2 }}
                                placeholderIconColor="#007aff"
                                textStyle={{justifyContent:'flex-start', paddingLeft:2}}
                                selectedValue={this.state.selected}
                                onValueChange={this.onValueChange.bind(this)}
                            >
                                <Picker.Item label="Male" value="key0" />
                                <Picker.Item label="Female" value="key1" />
            
                            </Picker>

                            </Item>
                            
                        </Item>

                    </View>

                    
                    
                    
                </Form>


                
                   
                    

        
                 







            </View>
            
        );
    }
};

