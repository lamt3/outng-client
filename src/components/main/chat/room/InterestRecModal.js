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

import {
    Tab,
    Tabs
  } from "native-base";

import Modal from "react-native-modal";

import { Icon, Avatar, Button } from "react-native-elements";

import { Navigation } from "react-native-navigation";

import RecDatesContent from './modals/RecDatesContent'
import TimeRecContent from './modals/TimeRecContent'


import westernImg from "../../../../assets/images/western.jpeg";
import sushiImg from "../../../../assets/images/sushi.jpeg";


const data = [{imgSrc: westernImg, name:'Bobs Fillet', address:'12211 SE 59 St Bellevue, WA 98006'}, {imgSrc: sushiImg, name:'Tom Sushi House', address:'12211 SE 59 St Bellevue, WA 98006'}, {imgSrc: sushiImg, name:'Freddy Sushi House', address:'12211 SE 59 St Bellevue, WA 98006'}]

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
export default class ChatRoomScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      isVisible: false,
      scrollOffset: 0,
      currentMessage: {}
    };
  
  }

  render() {
    return (


        <View>

                <Modal
                    isVisible={this.props.showRecModal}
                    onBackdropPress={() => this.props.setRecModalVisibility(false)}
                    scrollTo={this.handleScrollTo}
                    scrollOffset={this.state.scrollOffset}
                    scrollOffsetMax={600 - 300}
                    style={styles.bottomModal}
                >
                    <RecDatesContent  
                        showRecModal={this.props.isRecModalVisible} 
                        setRecModalVisibility={(b) => this.props.setRecModalVisibility(b)}
                        isTimeModalVisible={this.props.isTimeModalVisible}
                        setTimeModalVisibility={(b)=>this.props.setTimeModalVisibility(b)}
                    />
                    


                    {/* SECOND MODAL FOR TIME  */}
                    <Modal
                        animationIn="slideInRight"
                        animationOut="slideOutRight"
                        // animationIn="zoomInDown"
                        // animationOut="zoomOutUp"
                        animationInTiming={300}
                        // animationOutTiming={1000}
                        isVisible={this.props.isTimeModalVisible}
                        onBackdropPress={() => ()=> this.props.setTimeModalVisibility(false)}
                        scrollTo={this.handleScrollTo}
                        scrollOffset={this.state.scrollOffset}
                        scrollOffsetMax={600 - 300}
                        style={styles.bottomModal}
                    >
                        <TimeRecContent 
                            showRecModal={this.props.isRecModalVisible} 
                            setRecModalVisibility={(b) => this.props.setRecModalVisibility(b)}
                            isTimeModalVisible={this.props.isTimeModalVisible}
                            setTimeModalVisibility={(b)=>this.props.setTimeModalVisibility(b)}  
                            handleBookingDate={()=>this.props.handleBookingDate()}
                        />


                    </Modal>

                </Modal>



                
        </View>

               

                





    );
  }
}

const styles = {
  mainScreenContainerStyle: {
    flex: 1
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  scrollableModalContent1: {
    height: 600,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center"
  },
  scrollableModalContent2: {
    height: 600,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center"
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  },
  scrollableModal: {
    height: 300
  }
};
