
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

import sushiImg from "../../../../../assets/images/sushi.jpeg";



const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
export default class ChatRoomScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    
    };
    this.renderList.bind(this);
   
  }
  
  renderList(){
      return this.props.selectedDatedTimes.map(dateTime => 
            <View key={dateTime.date+dateTime.time}>
                <Text>{dateTime.date}</Text>
                <Text>{dateTime.time}</Text>

            </View>
        );




  }


  renderButton(){
      if(this.props.selectedDatedTimes[0]){
          return(

                <Button
            
                icon={
                    <Icon
                    name="x"
                    type="feather"
                    size={18}
                    color="black"
                    iconStyle={{
                        position: "absolute",
                        padding:0,
                        left:20
                        // right: 10,
                        // bottom: 12
                    }}
                    />
                }
                iconRight
                type="clear"
                onPress={() => this.props.removeSelectedDateTime(0)}
            />
          )

      }else{
          return null;
      }
    
      

  }

  renderButton2(){
    if(this.props.selectedDatedTimes[1]){
        return(

              <Button
          
              icon={
                  <Icon
                  name="x"
                  type="feather"
                  size={18}
                  color="black"
                  iconStyle={{
                      position: "absolute",
                      padding:0,
                      left:20
                      // right: 10,
                      // bottom: 12
                  }}
                  />
              }
              iconRight
              type="clear"
              onPress={() => this.props.removeSelectedDateTime(1)}
          />
        )

    }else{
        return null;
    }
  
    

}

renderButton3(){
    if(this.props.selectedDatedTimes[2]){
        return(

              <Button
          
              icon={
                  <Icon
                  name="x"
                  type="feather"
                  size={18}
                  color="black"
                  iconStyle={{
                      position: "absolute",
                      padding:0,
                      left:20

                      // right: 10,
                      // bottom: 12
                  }}
                  />
              }
              iconRight
              type="clear"
              onPress={() => this.props.removeSelectedDateTime(2)}
          />
        )

    }else{
        return null;
    }
  
    

}



  render() {
    console.log('Selected Date');

    console.log(this.props.selectedDatedTimes);
  

    if((this.props.selectedDatedTimes=== undefined || this.props.selectedDatedTimes.length === 0)){
        return(
            <View></View>
        )
            
    }
   

    return (
        
        <View>
            <View style={{alignSelf:'center'}}>
                <Text>
                    Selected Times: 
                </Text>
            </View>

            <View style={{alignSelf:'flex-start', width:150, marginRight:40}}>
                <View style={{flexDirection:'row', marginTop:5}}>
                    <Text>{this.props.selectedDatedTimes[0]? this.props.selectedDatedTimes[0].date : ''}</Text>
                    <Text style={{marginLeft:5}}>{this.props.selectedDatedTimes[0]? this.props.selectedDatedTimes[0].time : ''}</Text>
                    {this.renderButton()}
                    
                </View>

                <View style={{flexDirection:'row', marginTop:5}}>
                    <Text>{this.props.selectedDatedTimes[1]? this.props.selectedDatedTimes[1].date : ''}</Text>
                    <Text style={{marginLeft:5}}>{this.props.selectedDatedTimes[1]? this.props.selectedDatedTimes[1].time : ''}</Text>
                    {this.renderButton2()}

                </View>

                <View style={{flexDirection:'row', marginTop:5}}>
                    <Text>{this.props.selectedDatedTimes[2]? this.props.selectedDatedTimes[2].date : ''}</Text>
                    <Text style={{marginLeft:5}}>{this.props.selectedDatedTimes[2]? this.props.selectedDatedTimes[2].time : ''}</Text>
                    {this.renderButton3()}
                </View>
            

            </View>
           
            

        </View>
      
    );
  }
}


