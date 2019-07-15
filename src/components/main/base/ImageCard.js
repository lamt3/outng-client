
import React, { Component } from 'react';
import {Dimensions, View, Text, SafeAreaView, Image, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';


import {  DeckSwiper, Card, CardItem, Left, Body } from 'native-base';

import {Button, Icon } from 'react-native-elements';



const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class ProfileCard extends Component{

    constructor(props){
        super(props);

        this.state={
            i:0,
            imageWidth: null
        }
        console.log('index is ' + this.state.index);
        this.nextImage.bind(this)
    }

   
    

    nextImage(event, size, index) {
        const { imageWidth } = this.state,
              X = event.nativeEvent.locationX,
              delta = (X < imageWidth/2) ? -1 : +1;

        let newIndex = (index + delta) % size

        if (newIndex < 0) {
            newIndex = size - Math.abs(newIndex);
        }
        console.log('index is ' + newIndex);

        this.setState({
            i: newIndex
        }, this.props.onChangeImgIndex(newIndex));
    }

    onImageLayout(event) {
        this.setState({
            imageWidth: event.nativeEvent.layout.width
        });
    }

        
   
    render(){
        
        return(
                <View style={styles.container}>
                    <View style={styles.empty} />
                    <TouchableOpacity activeOpacity={1} onPress={(event) => this.nextImage(event , this.props.user.imagesLength, this.props.imageIndex)}
                                        style={{activeOpacity:0}}>
                        <Image style={{  borderRadius:10, width: SCREEN_WIDTH-50, height: SCREEN_HEIGHT/3, alignSelf:'center' }} source={this.props.user.images[this.props.imageIndex].props.source}
                            onLayout={this.onImageLayout.bind(this)}>
                        </Image>
                        
                        
                    </TouchableOpacity>
                    <View style={{width:30,  borderRadius:5, backgroundColor:'rgba(255,255,255,0.8)', bottom:5, left:25, position:'absolute'}}>
                        <Text style={{alignSelf:'center'}}>
                            {this.props.imageIndex + 1 +"/" + this.props.user.imagesLength }
                        </Text>
                        
                    </View>
                    
                    <View style={styles.empty} />
                </View>      
           
        );
    }
};
const styles = {
    mainScreenContainerStyle: {
        flex:1,
        // alignItems: 'flex-start' 
    },
    container: {
        flex: 1,
        // height:100,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center'
       
    },
    // image: {
    //     flex: 2,
    //     width: 320,
    //     justifyContent: 'flex-end',
    //     alignItems: 'center'
    // },
    imageLabel: {
        textAlign: 'center',
        backgroundColor: 'rgba(100, 100, 100, 0.5)',
        color: 'white',
        width: 320
    },
    empty: {
        flex: 1
    }
    
}
