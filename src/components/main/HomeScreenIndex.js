
import React, { Component } from 'react';
import {Dimensions, View, Text, SafeAreaView, Image, TouchableHighlight, TouchableOpacity} from 'react-native';


import {  DeckSwiper, Card, CardItem, Left, Body } from 'native-base';

import Swiper from 'react-native-deck-swiper'

import {Button, Icon } from 'react-native-elements';
import {Navigation} from 'react-native-navigation';


import ProfileCard from './base/ProfileCard'

import westernImg from '../../assets/images/western.jpeg';
import curryImg from '../../assets/images/curry.jpg';
import vegImg from '../../assets/images/vegeterian.jpg';
import drinksImg from '../../assets/images/drinks.jpg';



const Images = [
    {   url:'',
        props:{
            url:'',
            source:curryImg
        },
        label: "A cat toy"
    },
    {   
        url:'',
        props:{
            url:'',
            source:westernImg
        },        
        label: "Cat on a blue blanket"
    },

    
    {
        url:'',
        props:{
            url:'',
            source:vegImg
        }, 
        source: "A cat toy"
    },
    {
        url:'',
        props:{
            url:'',
            source:drinksImg
        }, 
        label: "A cat toy"
    }

   
];

const User = {
    images:Images,
    imagesLength:4,
    name:'Chadacaadadvadad',
    age:22,
    imageIndexStart:0

}

const User2 = {
    images:Images,
    imagesLength:4,
    name:'Fred',
    age:21,
    imageIndexStart:0

}

const User3 = {
    images:Images,
    imagesLength:4,
    name:'Fobboy',
    age:41,
    imageIndexStart:0

}

const User4 = {
    images:Images,
    imagesLength:4,
    name:'Fobboy',
    age:31,
    imageIndexStart:0

}

const User5 = {
    images:Images,
    imagesLength:4,
    name:'awela;kfla;e',
    age:21,
    imageIndexStart:0

}

const users=[User,User2, User3, User4, User5]

const SCREEN_WIDTH = Dimensions.get('window').width;
export default class NewUserScreenIndex extends Component{

    constructor(props){
        super(props);

        this.state={
            imageIndex:0,
            // cards: [...range(1, 50)],
            swipedAllCards: false,
            swipeDirection: '',
            cardIndex: 0
        }
        this.changeImageIndex.bind(this);
        
    }

    componentDidMount(){
        Navigation.mergeOptions('chatBottomTab', {
            bottomTab: {
              badge: 'New'
            }
        });

    }

    static options() {
		return {
			topBar: {
                visible:true,
				noBorder: true,
				drawBehind: true,
				background: {
					color: 'transparent'
                },
                title:{text:'Suggested'}
			},
		};
    }
    
    changeImageIndex(index){
        this.setState({imageIndex:index})
    }

  
    render(){
  
     
        return(
            
                 <SafeAreaView style = {styles.mainScreenContainerStyle}>
              
                    <DeckSwiper
                        ref={(c) => this._deckSwiper = c}
                        style={{
                            alignSelf:'center',
                            alignItems:'center',
                            justifyContent:'center',
                            width:SCREEN_WIDTH-100,
                            borderRadius:10,
                            flex:1
                            
                            
                        }}
                        onSwipeRight={()=>{
                            users.shift()
                            this.setState({imageIndex:0})
                        }}
                               
                        onSwipeLeft={()=>{
                            users.shift()
                            this.setState({imageIndex:0})
                        }}
                        dataSource={users}
                        renderItem={user =>
                            <ProfileCard user={user} imgIndex={this.state.imageIndex} onChangeImgIndex={(index) =>this.changeImageIndex(index)}/>
                        }
                    /> 
                    {/* <View style={{ bottom: 20, width:SCREEN_WIDTH, flexDirection: "row", flex: 1, position: "absolute",  left: 0, right: 0, justifyContent: 'space-evenly', padding: 15 }}>
                        
                        <Icon
                            containerStyle={{
                                marginRight:30

                            }} 
                            reverse
                            // onPress={() => this._deckSwiper._root.swipeLeft()}
                            onPress={() => { 
                                Navigation.mergeOptions('chatBottomTab', {
            bottomTab: {
              badge: 'New'
            }
        });
                            }}
                            type='octicon'
                            name={'x'}
                            size={25}
                            color={'gray'}
                            iconStyle={{
                                alignSelf:'center',
                                
                             
                            }}

                        />
                        <Icon 
                            containerStyle={{
                                marginLeft:30

                            }} 
                            reverse
                            onPress={() => this._deckSwiper._root.swipeRight()}
                            name='heart' 
                            type='antdesign'
                            color={'#E5C1BD'}
                            iconStyle={{
                                alignSelf:'center',
                                marginTop:2,
                              
                            }}
                         
                            size={25}
                        />
                  
                        </View> */}
                    

                   
                    
                 </SafeAreaView>
           
        );
    }
};
const styles = {
    mainScreenContainerStyle: {
        flex:1,
        background:'white'
        // alignItems: 'flex-start' 
    },
   
    
}
