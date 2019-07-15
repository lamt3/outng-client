
import React, { Component } from 'react';
import {TextInput, KeyboardAvoidingView,View, StyleSheet, Text, Dimensions} from 'react-native';

import { Input, Icon } from 'react-native-elements';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class NewUserBreadCrumb extends Component{
    constructor(props){
        super(props);
        this.state={
            iconRender:this.props.number
        }
    }
    render(){
        return(
            <View style={styles.breadCrumbGroupStyle}>
                    <Icon 
                        name={'assignment-ind'} 
                        size={40}
                        color={this.state.iconRender===1?'#EF3054':'#E5C1BD'}
                    />
                    <Text style={styles.lineStyle}>_________</Text>
                    <Icon 
                        name='heart' 
                        type='antdesign'
                        color={this.state.iconRender===2?'#EF3054':'#E5C1BD'}
                        iconStyle={styles.iconStyle}
                        size={40}
                    />
                    <Text style={styles.lineStyle}>_________</Text>
                    <Icon 
                        name={'add-a-photo' }
                        color={this.state.iconRender===3?'#EF3054':'#E5C1BD'}
                        size={40}
                    />
                </View>
        );
    }
};

const styles = {
    breadCrumbGroupStyle:{
        position: 'absolute',
        marginBottom:50,
        
        height:50,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
    },
    lineStyle:{
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        color:'#E5C1BD'
    },
    iconStyle:{
        // marginLeft:10,
        // marginRight:10
    }
}