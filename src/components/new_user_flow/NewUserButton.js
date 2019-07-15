
import React, { Component } from 'react';
import { View, StyleSheet, Text, SafeAreaView} from 'react-native';
import NewUserPage1 from './new_user_page1/NewUserPage1'
import NewUserPage0 from './NewUserPage0'
import NewUserPage3 from './new_user_page3/NewUserPage3'
import NewUserBreadCrumb from './bread_crumb/NewUserBreadCrumb'
import DismissKeyboard from '../common/keyboard/DismissKeyboard'
import {Button, Icon } from 'react-native-elements';

import {Navigation} from 'react-native-navigation';
import {PropTypes} from 'prop-types';
import {goToHomeIndex, goToLoginIndex} from '../../navigation/main_screens/MainScreenNavRouter'

const NewUserButton = (props) => {
    return(
        <Button
            disabled={(!props.profileName || !props.birthDate || !props.iam || !props.into)}

            containerStyle={{
                bottom:20,
                marginLeft:250
            }}
            icon={
                <Icon
                    name="right"
                    type="antdesign"
                    size={15}
                    color="black"
                    iconStyle={{marginLeft:5, marginTop:4}}
                />
            }
            iconRight
            type="clear"
            title={props.buttonText}
            onPress={()=>{
                Navigation.push(props.componentId, {
                    component: {
                        name: 'outng.NewUserScreenIndex2',
                        passProps:{
                            breadCrumbIndex:props.breadCrumbIndex,
                            profileName:props.profileName,
                            birthDate:props.birthDate,
                            iam:props.iam,
                            into:props.into
                        }
                    }
                });
            }}
        />

    )
    
}

export default NewUserButton