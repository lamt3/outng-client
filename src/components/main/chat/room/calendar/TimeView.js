import React, {Component} from 'react';
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

const timeData = [
    '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM',
    '7PM', '8PM', '9PM', '10PM', '11PM'
];

export default class TimeView extends Component{
    constructor(props){
        super(props);
        this.state={
            date:'',
            time:''
        }
    }

    render(){
        return(
            <FlatList
                style={{height:150}}
                data={timeData}
                keyExtractor={(item) => item}
                renderItem={({item})=>{
                    return(
                        <TouchableOpacity onPress={() => {
                            this.props.selectedDate ? this.props.selectedDateTime(item, this.props.selectedDate) : console.log('nothing happened')
                        }}>
                            <View style={{width:'95%', borderWidth:0.2, borderColor:'black', marginTop:5, height:20}}>
                                <Text style={{alignSelf:'center'}}>{item}</Text>
                            </View>
                            
                        </TouchableOpacity>
                    );
                
                }}



            />

        );
            

            

    }

        
   




}





