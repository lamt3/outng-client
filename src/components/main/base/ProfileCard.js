
import React, { Component } from 'react';
import {FlatList, Modal, Dimensions, View, Text} from 'react-native';


import {  Content, DeckSwiper, Card, CardItem, Left, Body, Right } from 'native-base';

import {Button, Icon } from 'react-native-elements';

import ImageCard from './ImageCard'

import ImageViewer from 'react-native-image-zoom-viewer';





let v=0

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class ProfileCard extends Component{

    constructor(props){
        super(props);

        this.state={
           isVisible:false,
           modalIndex:0
        }
        this.popModal.bind(this)
        this.onCancelPress.bind(this)
        // this.onModalImageChange.bind(this)
  
    }

    popModal(){
        this.setState({isVisible: true})


    } 
    onCancelPress(){
        this.setState({isVisible: false})
    }

    onModalImageChange= (index) =>  {
        v=index;
      }
    


        
   
    render(){
        
        return(
                <View>
                    <Card style={{ borderRadius: 10, height:SCREEN_HEIGHT/1.25, elevation: 3, width:SCREEN_WIDTH-20, alignSelf:'center'}}>
                        
                        {/* HEADER CARD -- JUST TO GIVE PADDING */}
                        <CardItem style={{borderRadius: 10,}}>
                            <Left>
                                <Body>
                            
                                </Body>
                            </Left>
                        </CardItem>



                         {/* IMAGE CARD */}
                        <CardItem cardBody>
                            <ImageCard user={this.props.user} onChangeImgIndex={(index) => this.props.onChangeImgIndex(index)} imageIndex={this.props.imgIndex}/>
                            <Icon 
                                                name="arrow-expand"
                                                // reverse
                                                type="material-community"
                                                containerStyle={{
                                                    backgroundColor:'rgba(0,0,0,0.3)',
                                                    borderRadius:100/2
                                                }}
                                                size={30}
                                                color='rgb(254, 102, 103)'
                                                onPress={() => this.popModal()}
                                                iconStyle={{
                                                    // alignSelf:'center',
                                                    position:'absolute',
                                                    right:25,
                                                    top:95,
                                                    // backgroundColor:'rgba(0,0,0,0.3)',
                                                 
                                                    
                                                   
                                                    
                                                    
                                                    

                                                }}
                                />
                        </CardItem>
                        
                        {/* NAME AGE IMAGE EXPAND BUTTON CARD */}
                        <CardItem style={{paddingBottom:0, marginTop:15, justifyContent:'flex-end', alignSelf:'flex-end' }}>
                            <Left>
                                <Body>
                                    <View style={{width:SCREEN_WIDTH -70, flexDirection:'row'}}>
                                        {/* <Icon 
                                                name="arrow-up-circle"
                                                type="feather"
                                                size={45}
                                                color="#fe6667"
                                                onPress={() => this.popModal()}
                                                iconStyle={{
                                                    // alignSelf:'center',
                                                    position:'absolute',
                                                    
                                                    // top:0.5,
                                                    // bottom:0,
                                                    left:SCREEN_WIDTH -110,
                                                    
                                                    

                                                }}
                                            /> */}
                                        <Text style={{fontWeight:'bold', fontSize:25}}>{this.props.user.name}</Text>  
                                    </View>
                                    <Text style={{marginTop:3, marginLeft: 3, fontSize:20}}>{this.props.user.age}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        


                        {/* PROFILE BIO CARD */}
                        <Content>
                            {/* INTERESTS */}
                            <CardItem style={{ marginLeft: 3}}>
                                <Left> 
                                    <Body>
                                        <View>
                                            <Text style={{fontWeight:'bold', fontSize:20}}>Interests</Text>
                                            <FlatList 
                                                // horizontal
                                                data= {[{item:'Italian'}, {item:'Japanese'}, {item:'Mexican'}, {item:'Alcoholic Drinks'}, {item:'Coffee'}]}
                                                renderItem={({item})=>{
                                                    return(
                                                        <View>
                                                        <Text style={{fontSize:15}}>{item.item}</Text>

                                                        </View>
                                                        
                                                    );

                                                }}
                                                keyExtractor={(item) => item.item}

                                            />
                                        </View>
                                    </Body>
                                </Left>
                                <Right>
                                
                                    <Body>
                                        <View>
                                            <Text style={{fontWeight:'bold', fontSize:20}}>Looking For</Text>
                                            <FlatList 
                                                data= {[{item:'Food Buddy'}, {item:'Drinking Buddy'}, {item:'Relationship'}, {item:'Cheap Eats'}, {item:'Cafes'}]}
                                                renderItem={({item})=>{
                                                    return(
                                                        <View>
                                                            <Text style={{fontSize:15}}>{item.item}</Text>
                                                        </View>
                                                        
                                                    );

                                                }}
                                                keyExtractor={(item) => item.item}

                                            /> 
                                        </View>
                                    </Body>
                                
                                </Right>
                                
                            </CardItem>

                             {/* LOOKING FOR */}
                            {/* <CardItem style={{ marginLeft: 3}}>
                                <Left>
                                    <Body>
                                        <View>
                                            <Text style={{fontWeight:'bold', fontSize:20}}>Looking For</Text>
                                            <FlatList 
                                                data= {[{item:'Food Buddy'}, {item:'Drinking Buddy'}, {item:'Relationship'}, {item:'Cheap Eats'}, {item:'Cafes'}]}
                                                renderItem={({item})=>{
                                                    return(
                                                        <View>
                                                            <Text style={{fontSize:15}}>{item.item}</Text>
                                                        </View>
                                                        
                                                    );

                                                }}
                                                keyExtractor={(item) => item.item}

                                            /> 
                                        </View>
                                    </Body>
                                </Left>
                            </CardItem> */}

                             {/* OCCUPATION */}                
                            <CardItem style={{ marginLeft: 3}}>
                                <Left>
                                    <Body>
                                        <View>
                                            <Text style={{fontWeight:'bold', fontSize:15}}>Occupation</Text>
                                            <Text style={{fontSize:15}}>Doctor</Text>                                           
                                        </View>
                                        <View style={{marginTop:8}}>
                                            <Text style={{fontWeight:'bold', fontSize:15}}>Height</Text>
                                            <Text style={{fontSize:15}}>5ft 7in</Text>                                           
                                        </View>
                                        <View style={{marginTop:8}}>
                                            <Text style={{fontWeight:'bold', fontSize:15}}>University</Text>
                                            <Text style={{fontSize:15}}>University of Waterloo</Text>                                           
                                        </View>
                                        <View style={{marginTop:8}}>
                                            <Text style={{fontWeight:'bold', fontSize:15}}>Current City</Text>
                                            <Text style={{fontSize:15}}>San Francisco</Text>                                           
                                        </View>
                                    </Body>
                                </Left>

                            </CardItem>

                             {/* PADDING FOR BOTTOM OF CARD */}                        
                            <CardItem style={{ marginLeft: 3}}>
                                <Left> 
                                    <Body>
                                    </Body>
                                </Left>

                            </CardItem>
                        </Content>
                    </Card>

                    

                                        
                    <Modal visible={this.state.isVisible} transparent={true}>
                     
                        <ImageViewer 
                            renderFooter={ () => 
                                <View style={{flexDirection:'row',  justifyContent: 'center', alignItems:'center', width:SCREEN_WIDTH}}>
                                    <Button
                                        
                                        onPress={()=>{
                                            this.props.onChangeImgIndex(v);
                                            this.onCancelPress()
                                                                             
                                            }}
                                        containerStyle={{
                                            // position:'absolute',
                                            // marginTop:25,
                                            // width:SCREEN_WIDTH/2,
                                            // marginLeft:80,
                                            // alignSelf:'flex-end',
                                            // justifyContent:'flex-end',
                                            // alignItems:'center',
                                            marginBottom:50
                                        
                                        }}
                                        icon={
                                            <Icon
                                                name="down"
                                                type="antdesign"
                                                size={30}
                                                color="white"
                                                iconStyle={{marginLeft:3, marginTop:4}}
                                            />
                                        }
                                        type="clear"
                                        
                
                                    />
                                </View>
                               
                            }
                            enableSwipeDown={true} 
                            onSwipeDown={() => {
                                this.setState({isVisible:false})
                                this.props.onChangeImgIndex(v)
                                }} 
                            imageUrls={this.props.user.images}
                            // onChange={(index) => console.log(index)}
                            onChange={this.onModalImageChange}
                            index={this.props.imgIndex}   
                            />
                    </Modal>

                </View>
                

           
        );
    }
};
