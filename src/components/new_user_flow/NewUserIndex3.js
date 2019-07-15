
import React, { Component } from 'react';
import { Dimensions, View, StyleSheet, Text, SafeAreaView} from 'react-native';
import NewUserPage1 from './new_user_page1/NewUserPage1'
import NewUserPage0 from './NewUserPage0'
import NewUserPage3 from './new_user_page3/NewUserPage3'
import NewUserBreadCrumb from './bread_crumb/NewUserBreadCrumb'
import DismissKeyboard from '../common/keyboard/DismissKeyboard'
import {Button, Icon } from 'react-native-elements';

import {Navigation} from 'react-native-navigation';
import {PropTypes} from 'prop-types';
import {goToHomeIndex, goToLoginIndex} from '../../navigation/main_screens/MainScreenNavRouter'






const SCREEN_WIDTH = Dimensions.get('window').width;

export default class NewUserScreenIndex3 extends Component{

    constructor(props){
        super(props);
        this.state={
            screenToRender:this.props.breadCrumbIndex

        }
    }
    static propTypes = {
        componentId: PropTypes.string,
      };

    buttonPress(){
        console.log('j')
       
    }

    render(){

        return(
            // <DismissKeyboard>
                 <SafeAreaView style = {styles.mainScreenContainerStyle}>
                 <View style={{flex:0.1, justifyContent:'flex-end'}}>
                 <View style={{ flexDirection:'row', alignSelf:'center', justifyContent:'space-between', width:SCREEN_WIDTH-40, marginRight:15}}>
                        <Button
                            containerStyle={{
                                bottom:20,
                                
                            }}
                            icon={
                                <Icon
                                name="left"
                                type="antdesign"
                                size={15}
                                color="black"
                                iconStyle={{marginRight:5, marginTop:4}}
                                />
                            }
                            
                            type="clear"
                            title="Back"
                            onPress={()=>{
                                Navigation.pop(this.props.componentId)
                            }}
                        />
                        <Button
                            containerStyle={{
                                bottom:20,
                                
                            }}
                            // icon={
                            //     <Icon
                            //     name="right"
                            //     type="antdesign"
                            //     size={15}
                            //     color="black"
                            //     iconStyle={{marginLeft:5, marginTop:4}}
                            //     />
                            // }
                            iconRight
                            type="clear"
                            title="Done"
                            onPress={()=>{
                                goToHomeIndex();

                                // Navigation.push(this.props.componentId, {
                                //     component: {
                                //     name: 'outng.HomeScreenIndex',
                                //     }
                                // });
                            }}
                        />
                        </View>
                    </View>
                
                     <View style={{flex:0.75, justifyContent:'center', marginTop:30}}>
                         <NewUserPage3 />
                     </View>
                   
                     <View style = {{flex:0.15, justifyContent:'flex-end'}}>
                      <NewUserBreadCrumb number={this.state.screenToRender}/>
                    </View>
                    
                 </SafeAreaView>
            // </DismissKeyboard>
        
            
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