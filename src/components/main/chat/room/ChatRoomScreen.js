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

import Modal from "react-native-modal";

import { Icon, Avatar, Button } from "react-native-elements";

import { Navigation } from "react-native-navigation";

import {
  List,
  ListItem,
  Card,
  CardItem,
  Body,
  Left,
  Right,
  Accordion,
  Content
} from "native-base";

import {
  GiftedChat,
  InputToolbar,
  Composer,
  Bubble
} from "react-native-gifted-chat";

import InterestRecModal from './InterestRecModal';

import westernImg from "../../../../assets/images/western.jpeg";
import sushiImg from "../../../../assets/images/sushi.jpeg";

const dataArray = [
  {
    title: "Suggested Times",
    content: [
      { date: "1/1/2018", time: "7:00 PM" },
      { date: "1/2/2018", time: "7:00 PM" },
      { date: "1/3/2018", time: "7:00 PM" }
    ]
  }
];

export function isIphoneX() {
  const dim = Dimensions.get("window");

  return (
    // This has to be iOS
    Platform.OS === "ios" &&
    // Check either, iPhone X or XR
    (isIPhoneXSize(dim) || isIPhoneXrSize(dim))
  );
}

export function isIPhoneXSize(dim) {
  return dim.height == 812 || dim.width == 812;
}

export function isIPhoneXrSize(dim) {
  return dim.height == 896 || dim.width == 896;
}

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
export default class ChatRoomScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      isRecModalVisible: false,
      isTimeModalVisible:false,
      scrollOffset: 0,
      currentMessage: {}
    };
    this.onSend.bind(this);
    this.setRecModalVisibility.bind(this);
    this.setTimeModalVisibility.bind(this);
    this.handleBookingDate.bind(this)
  }

  static options() {
    return {
      topBar: {
        visible: true,
        // noBorder: false,
        drawBehind: true,
        background: {
          color: "transparent"
        },

        backButton: {
          title: ""
        }
      }
    };
  }

  setRecModalVisibility(b){
      this.setState({isRecModalVisible:b})
  }
  setTimeModalVisibility(b){
      this.setState({isTimeModalVisible:b})
  }

  componentDidMount() {
    
  }

  onSend(messages = []) {
    console.log(messages);
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }

  renderAction(props) {

    return (
      <Button
        title="Book Date"
        onPress={() => {
            this.setState({isRecModalVisible:true})

        }}
        // onPress={this.handleBookingDate.bind(this)}
        containerStyle={{
          height: 30,
          marginBottom: 8,
          // marginTop:10,
          marginLeft: 5,
          padding: 0,
          borderRadius: 15
        }}
        titleStyle={{
          // justifyContent:'center',
          // alignSelf:'center',
          fontWeight: "bold",

          fontSize: 10
        }}
        type="outline"
      />
    );
  }

  handleBookingDate(props) {
    const message = {};
    message._id = this.messageIdGenerator();
    message.createdAt = Date.now();
    (message.user = {
      _id: 1,
      name: "Tom",
      avatar: "https://placeimg.com/640/480/people"
    }),
      (message.messageType = "date");
    message.text = "";
    message.date = true;
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, message)
    }));
  }

  _renderHeader(item, expanded) {
    return (
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#A9DAD6",
          borderTopStartRadius: 10,
          borderTopRightRadius: 10
        }}
      >
        <Text style={{ fontWeight: "600" }}> {item.title}</Text>
        {expanded ? (
          <Icon style={{ fontSize: 18 }} name="remove-circle" />
        ) : (
          <Icon style={{ fontSize: 18 }} name="add-circle" />
        )}
      </View>
    );
  }

  renderContent(item) {
    return (
      <View style={{ backgroundColor: "#e3f1f1" }}>
        <FlatList
          style={{
            borderBottomEndRadius: 10,
            padding: 10,
            fontStyle: "italic"
          }}
          data={item.content}
          keyExtractor={a => a.date + a.time}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 0.2,
                  marginTop: 10
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontWeight: "bold" }}>Date: </Text>
                  <Text>{item.date} </Text>
                </View>
                <View style={{ flexDirection: "row", marginBottom: 10 }}>
                  <Text style={{ fontWeight: "bold" }}>Time: </Text>
                  <Text>{item.time}</Text>
                  <Button
                    title=""
                    // onPress={this.handleBookingDate.bind(this)}
                    icon={
                      <Icon
                        name="right"
                        type="antdesign"
                        size={15}
                        color="black"
                        iconStyle={{
                          position: "absolute",
                          right: 100,
                          bottom: 0
                        }}
                      />
                    }
                    type="clear"
                  />
                </View>
              </View>
            );
          }}
        />
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <Text>Can't Make It </Text>
        </View>
        <Text />
      </View>
    );
  }

  renderDateMessage = props => {
    return !props.currentMessage.date ? (
      <View />
    ) : (
      <View style={{ justifyContent: "space-between" }}>
        <Card style={{ width: '100%', borderRadius: 15 }}>
          <CardItem style={{ borderRadius: 15 }}>
            <Left>
              <Body>
                <Text style={{ fontWeight: "bold", alignSelf: "center" }}>
                  Tokyo Arigato
                </Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={sushiImg} style={{ width: 250, height: 90 }} />
          </CardItem>
          <CardItem>
            <Left>
              <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                Address:{" "}
              </Text>
              <Text style={{ fontSize: 10 }}>
                12211 SE 59th St Bellevue, WA 98006
              </Text>
            </Left>
          </CardItem>
          <CardItem style={{ borderRadius: 15 }}>
            <Content padder>
              <Accordion
                style={{}}
                dataArray={dataArray}
                expanded={1}
                renderHeader={this._renderHeader}
                renderContent={this.renderContent}
              />
            </Content>
          </CardItem>
        </Card>
      </View>
    );
  };

  renderBubble(props) {
    console.log(props);
    return (
      <View>
        {this.renderDateMessage(props)}
        <Bubble {...props}  
          wrapperStyle={{
            right:{
              width:'60%'
            },
            left:{
              width:'60%'
            }
          }}/>
      </View>
    );
  }

  messageIdGenerator() {
    // generates uuid.
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
      let r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  handleOnScroll = event => {
    this.setState({
      scrollOffset: event.nativeEvent.contentOffset.y
    });
  };

  handleScrollTo = p => {
    if (this.scrollViewRef) {
      this.scrollViewRef.scrollTo(p);
    }
  };

  renderInputToolbar(props) {
    return (
      <SafeAreaView style={{ flex: 1, height: 1 }}>
        <InputToolbar
          {...props}
          primaryStyle={{}}
          containerStyle={{
            borderTopColor: "transparent",
            backgroundColor: "rgb(245, 245, 245)"
          }}
        />
      </SafeAreaView>
    );
  }

  renderComposer(props) {
    return (
      <View
        style={{
          borderColor: "black",
          borderWidth: 0.2,
          borderRadius: 20,
          width: SCREEN_WIDTH - 150,
          marginLeft: 5
        }}
      >
        <Composer
          {...props}
          textInputStyle={{ borderRadius: 40, width: SCREEN_WIDTH - 170 }}
        />
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.mainScreenContainerStyle}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          showUserAvatar
          user={{
            _id: 1,
            name: "Tom",
            avatar: "https://placeimg.com/640/480/people"
          }}
          minInputToolbarHeight={isIphoneX() ? 44 : 44}
          // minComposerHeight={0}
          maxComposerHeight={100}
          // renderAccessory={this.renderAccessory2.bind(this)}
          renderActions={this.renderAction.bind(this)}
          // renderComposer={this.renderComposer.bind(this)}
          // renderInputToolbar={this.renderInputToolbar.bind(this)}
          bottomOffset={isIphoneX() ? 85 : 50}
          renderBubble={this.renderBubble.bind(this)}
          showAvatarForEveryMessage
        />
        <InterestRecModal 
            showRecModal={this.state.isRecModalVisible} 
            setRecModalVisibility={(b) => this.setRecModalVisibility(b)}
            isTimeModalVisible={this.state.isTimeModalVisible}
            setTimeModalVisibility={(b)=>this.setTimeModalVisibility(b)}
            handleBookingDate={()=>this.handleBookingDate()}
        />

       
      </SafeAreaView>
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
