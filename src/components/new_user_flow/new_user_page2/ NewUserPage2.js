
import React, { Component } from 'react';
import {Picker,  KeyboardAvoidingView,View, Text, Dimensions} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Input, Icon, Button } from 'react-native-elements';
import DatePicker from 'react-native-datepicker'
import {Dropdown} from 'react-native-material-dropdown'



const SCREEN_WIDTH = Dimensions.get('window').width;

export default class NewUserPage1 extends Component{

    constructor(props){
        super(props);
        this.buttonPress.bind(this);
        this.tp = this.updateRef.bind(this,'n')
        this.tp2 = this.updateRef.bind(this,'n2')
    }
    state = {
        userName: '',
        n:'',
        n2:'',
        d:''

    };

    buttonPress(){

    }

    updateRef(name, ref) {
        this[name] = ref;
      }
   



    render(){

        return{

        }
        
    }
};

const styles = {

}

