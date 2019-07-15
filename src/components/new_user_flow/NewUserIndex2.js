
import React, { Component } from 'react';
import { TouchableOpacity, Image, View, Text, SafeAreaView, Dimensions, ScrollView,FlatList, ImageBackground} from 'react-native';
import NewUserBreadCrumb from './bread_crumb/NewUserBreadCrumb'
import {Button, Icon } from 'react-native-elements';

import {Card, CardItem } from 'native-base';


import {Navigation} from 'react-native-navigation';

import pizzaImg from '../../assets/images/pizza.jpg';
import sushiImg from '../../assets/images/sushi.jpeg';
import tacoImg from '../../assets/images/mexican.jpg';
import curryImg from '../../assets/images/curry.jpg';
import koreanImg from '../../assets/images/korean.jpg';
import vegImg from '../../assets/images/vegeterian.jpg';
import drinksImg from '../../assets/images/drinks.jpg';
import westernImg from '../../assets/images/western.jpeg';






const SCREEN_WIDTH = Dimensions.get('window').width;

export default class NewUserScreenIndex2 extends Component{

    constructor(props){

        super(props);
        this.state={
            screenToRender:this.props.breadCrumbIndex,
            isChecked : [],
            select: {0: false, 1: false, 2:false, 3:false, 4:false, 5:false, 6:false, 7:false}
       
        }
        this.onPress.bind(this);
    }

    onPress(id){
        // const {select}=this.state;
        // select.forEach((elem)=>{
        //     elem.toggle=false
        //     if(elem.id===id){
        //         elem.toggle=true
        //     }
        // })
        const{select}=this.state;
        const newVal = select[id] === false ? true : false
        select[id]=newVal
        this.setState({select});

        // this.setState(prevState => ({
        //     select: [...prevState.select, id]
        // }))
    }


    render(){

        return(
            // <DismissKeyboard>
                <SafeAreaView style = {styles.mainScreenContainerStyle}>
                <View style={{flex:0.1,justifyContent:'flex-end', }}>
                        <View style={{ flexDirection:'row', alignSelf:'center', justifyContent:'space-between', width:SCREEN_WIDTH-10, marginRight:20}}>
                            <Button
                            containerStyle={{
                                bottom:20,
                                marginLeft:15,
                                paddingLeft:0
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
                            title="Next"
                            onPress={()=>{
                                Navigation.push(this.props.componentId, {
                                    component: {
                                        name: 'outng.NewUserScreenIndex3',
                                        passProps:{
                                            breadCrumbIndex:3
                                        }
                                    }
                                });
                            }}
                            />

                        </View>
                        

                    </View>

                    <View style={{flex:0.05, alignItems:'center'}}>
                        
                        <Text style={{fontWeight:'bold', fontSize:20}}>What are your interests?</Text>

                     </View>

                     <View style={{flex:0.8, width:SCREEN_WIDTH}}>
                
                        <Text style={{alignSelf:'center',fontWeight:'bold', fontSize:20}}>Foods & Beverages</Text>
                        <FlatList
                            // style={{
                            
                            // }}
                            data={[{index:0, item: 'Italian', imgSrc:pizzaImg}, {index:1, item: 'Japanese', imgSrc:sushiImg}, {
                                index:2, item: 'Mexican', imgSrc:tacoImg}, {index:3, item: 'Indian', imgSrc:curryImg},
                                {index:4, item: 'Korean', imgSrc:koreanImg}, {index:5, item: 'Vegeterian', imgSrc:vegImg},
                                {index:6, item: 'Alcoholic Drinks', imgSrc:drinksImg}, {index:7, item: 'Western', imgSrc:westernImg},
                                {index:8, item: 'Coffee', imgSrc:drinksImg} ]}
                            renderItem={({item}) => {
                            
                                return(
                                    
                                    <View style={{marginTop: 10, width: SCREEN_WIDTH-16, alignSelf:'center'} }>
                                    <TouchableOpacity onPress={() => this.onPress(item.index)}>
                                        <View style={{ width: SCREEN_WIDTH-16, marginTop:5, borderRadius:10}}>
                                            <Image source={item.imgSrc} style={{borderColor:this.state.select[item.index] === true? 'red': 'transparent', borderWidth:this.state.select[item.index] === true? 2 : 0, width: SCREEN_WIDTH-20, height: 50, borderRadius:10}} blurRadius={1}>
                                                
                                            </Image>
                                            <View style={{height:50, width:SCREEN_WIDTH-20, position:'absolute', backgroundColor:'rgba(255,255,255,0.5)'}}>
                                                    <Text style={{marginTop: 3,marginLeft: 13, alignItems: 'center', fontWeight:'bold', fontSize:20, color:'black'}}>{item.item}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                   
                                </View>

                                );
                                

                            }}
                            keyExtractor={(item) => item.item}
                                
                            

                            
                        />
                 
                     </View>
                   

                      

           
                 


                <View style = {{flex:0.15, justifyContent:'flex-end'}}>
                    <NewUserBreadCrumb number={this.state.screenToRender}/>
                </View>

            </SafeAreaView>
                 
         
            
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