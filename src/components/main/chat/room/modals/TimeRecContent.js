/* global require */
import React, { Component } from "react";
import {
  FlatList,
  Platform,
  TextInput,
  ScrollView,
  Dimensions,
  View,
  SafeAreaView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Image
} from "react-native";

import CalendarStrip from 'react-native-calendar-strip';



import { Icon, Avatar, Button } from "react-native-elements";


import TimeView from '../calendar/TimeView'
import RenderDateTimeSuggestions from './RenderDateTimeSuggestions'

import sushiImg from "../../../../../assets/images/sushi.jpeg";



const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
export default class ChatRoomScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      isVisible: false,
      scrollOffset: 0,
      currentMessage: {},
      selectedDate:'',
      
      selectedDateTimes:[],
      isDateSelected:false
    
    };
    this.selectedDateTime.bind(this);
  }

  selectedDateTime(time, date){
    console.log(time);
    console.log('date '  + date);
    let oldDateTime = [...this.state.selectedDateTimes]
    if(oldDateTime && oldDateTime.length > 2){
        oldDateTime.shift();
      }
      const newDateTime = {'date': date, 'time':time};
      
      oldDateTime.push(newDateTime);

    //   oldDateTime.sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));

      this.setState({selectedDateTimes:oldDateTime})
      
    //   this.setState(prevState => ({
    //     selectedDateTimes: [...prevState.selectedDateTimes, newDateTime]
    //   }))
  }

  removeSelectedDateTime(index){
    let oldDateTime = [...this.state.selectedDateTimes]
    oldDateTime.splice(index, 1)
    this.setState({selectedDateTimes:oldDateTime})

  }

  render() {
    return (
      <View
        style={{
          flex: 0.8,
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "transparent",
          opacity: 0.9
        }}
      >
        <View
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "#fff",
            justifyContent: "flex-start",
            borderWidth: 0.2,
            borderRadius: 20
          }}
        >

        
          <View style={{ borderBottomWidth: 0.2, height: 40 }}>
            <Text
              style={{
                alignSelf: "center",

                fontWeight: "bold",
                fontSize: 20,
                marginTop: 10
              }}
            >
              Pick A Time
            </Text>

            {/* <Button
              icon={
                <Icon
                  name="x"
                  type="feather"
                  size={18}
                  color="black"
                  iconStyle={{
                    position: "absolute",
                    right: 10,
                    bottom: 12
                  }}
                />
              }
              iconRight
              type="clear"
              onPress={() => this.props.setTimeModalVisibility(false)}
            /> */}
            <Button
              icon={
                <Icon
                  name="ios-arrow-back"
                  type="ionicon"
                  size={18}
                  color="black"
                  iconStyle={{
                    position: "absolute",
                    left: 10,
                    bottom: 10
                  }}
                />
              }
              iconRight
              type="clear"
              onPress={() => this.props.setTimeModalVisibility(false)}
            />
          </View>

          <View style={{marginTop:10}}>
            <View style={{ flexDirection: "row" }}>
                <Image
                    source={sushiImg}
                    style={{ marginLeft: 5, width: 60, height: 60 }}
                />
                <View
                    style={{
                    marginLeft: 5,
                    flexDirection: "column",
                    justifyContent: "space-evenly"
                    }}
                >
                    <Text style={{ fontWeight: "bold" }}>
                    Toms Sushi House
                    </Text>
                    <Text>12211 SE 59th St Bellevue, WA 98006</Text>
                    <Text>4.3/5</Text>
                </View>
                
                </View>
            
          </View>

          <View style={{flex:0.9, marginTop:20, width:'90%', alignSelf:'center'}}>
              <Text style={{alignSelf:'center', fontWeight:'bold'}}> Suggest Up To 3 Date Times</Text>
              <CalendarStrip
                innerStyle={{marginTop:5, fontSize:10}}
                style={{height:90, marginTop:10, }}
                daySelectionAnimation={this.state.isDateSelected ? {type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'blue'} : {}}
                onDateSelected={(date)=>{
                    this.setState({'isDateSelected' : true})
                    this.setState({'selectedDate': date.format('MM/DD/YYYY')})
                }}
               />
               <View style={{marginLeft:15}}>
                    <TimeView selectedDate={this.state.selectedDate} selectedDateTime={(time, date)=>this.selectedDateTime(time, date)}/>
               </View>
               <View style={{alignSelf:'center', marginTop:5}}>
                   <RenderDateTimeSuggestions removeSelectedDateTime={(index)=> {this.removeSelectedDateTime(index)}} selectedDatedTimes={this.state.selectedDateTimes}/>
               </View>
                
          </View>
         
          <View style={{alignSelf: 'center', width:'90%', justifyContent:'flex-start'}}>
                <Button
                    title="Send"
                    type="outline"
                    buttonStyle={{
                        borderRadius:10,
                      
                    }}
                    onPress={()=>{
                        this.props.handleBookingDate()
                        this.props.setRecModalVisibility(false)
                        this.props.setTimeModalVisibility(false)
                        
                    }}
                />
                <Button
                
                    title="Cancel"
                    textStyle={{
                      fontColor:'gray'
                    }}
                    containerStyle={{
                      
                        marginTop:5,
                    }}
                    buttonStyle={{
                        borderRadius:10,
                        borderColor:'gray'
                    }}
                    
                    type="outline"
                    onPress={()=>{
                        this.props.setTimeModalVisibility(false)
                    }}

                />
          </View>
          
          
          
          
          

                



        </View>
        



      </View>
    );
  }
}

