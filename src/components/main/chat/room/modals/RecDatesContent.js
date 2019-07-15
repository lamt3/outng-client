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

import { Tab, Tabs } from "native-base";

import Modal from "react-native-modal";

import { Icon, Avatar, Button } from "react-native-elements";

import { Navigation } from "react-native-navigation";

import westernImg from "../../../../../assets/images/western.jpeg";
import sushiImg from "../../../../../assets/images/sushi.jpeg";

const data = [
  {
    imgSrc: westernImg,
    name: "Bobs Fillet",
    address: "12211 SE 59 St Bellevue, WA 98006"
  },
  {
    imgSrc: sushiImg,
    name: "Tom Sushi House",
    address: "12211 SE 59 St Bellevue, WA 98006"
  },
  {
    imgSrc: sushiImg,
    name: "Freddy Sushi House",
    address: "12211 SE 59 St Bellevue, WA 98006"
  }
];

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
              justifyContent: "center",
              borderWidth: 0.2,
              borderRadius: 20
            }}
          >
            {/* MODAL TITLE AND BUTTON CLICK OUT */}
            <View style={{ borderBottomWidth: 0.2, height: 40 }}>
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                  marginTop: 10
                }}
              >
                Date Recommendations
              </Text>

              <Button
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
                onPress={() => this.props.setRecModalVisibility(false)}
              />
            </View>

            {/* COMMON INTEREST RECOMMENDATIONS */}
            <Text
              style={{
                alignSelf: "center",
                fontWeight: "bold",
                fontSize: 15,
                marginTop: 10,
                marginBottom: 5
              }}
            >
              Common Interests
            </Text>
            <Tabs>
              <Tab heading="Japanese">
                <FlatList
                  data={data}
                  keyExtractor={item => item.name + item.address}
                  renderItem={({ item }) => {
                    return (
                      <View
                        style={{
                          height: 70,
                          marginTop: 10,
                          borderBottomColor: "black",
                          borderBottomWidth: 0.2
                        }}
                      >
                        <TouchableOpacity
                          onPress={() =>
                            this.props.setTimeModalVisibility(true)
                          }
                        >
                          <View style={{ flexDirection: "row" }}>
                            <Image
                              source={item.imgSrc}
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
                                {item.name}
                              </Text>
                              <Text>{item.address}</Text>
                              <Text>4.3/5</Text>
                            </View>
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
                                    left: 30,
                                    // position: "absolute",
                                    // right: 100,
                                    top: 10
                                  }}
                                />
                              }
                              type="clear"
                            />
                          </View>
                        </TouchableOpacity>
                      </View>
                    );
                  }}
                />
              </Tab>

              <Tab heading="Mexican">
                <FlatList
                  data={data}
                  keyExtractor={item => item.name + item.address}
                  renderItem={({ item }) => {
                    return (
                      <View
                        style={{
                          height: 70,
                          marginTop: 10,
                          borderBottomColor: "black",
                          borderBottomWidth: 0.2
                        }}
                      >
                        <TouchableOpacity
                          onPress={() =>
                            this.props.setTimeModalVisibility(true)
                          }
                        >
                          <View style={{ flexDirection: "row" }}>
                            <Image
                              source={item.imgSrc}
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
                                {item.name}
                              </Text>
                              <Text>{item.address}</Text>
                              <Text>4.3/5</Text>
                            </View>
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
                                    left: 30,
                                    // position: "absolute",
                                    // right: 100,
                                    top: 10
                                  }}
                                />
                              }
                              type="clear"
                            />
                          </View>
                        </TouchableOpacity>
                      </View>
                    );
                  }}
                />
              </Tab>

              <Tab heading="Drinks">
                <FlatList
                  data={data}
                  keyExtractor={item => item.name + item.address}
                  renderItem={({ item }) => {
                    return (
                      <View
                        style={{
                          height: 70,
                          marginTop: 10,
                          borderBottomColor: "black",
                          borderBottomWidth: 0.2
                        }}
                      >
                        <TouchableOpacity
                          onPress={() =>
                            this.props.setTimeModalVisibility(true)
                          }
                        >
                          <View style={{ flexDirection: "row" }}>
                            <Image
                              source={item.imgSrc}
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
                                {item.name}
                              </Text>
                              <Text>{item.address}</Text>
                              <Text>4.3/5</Text>
                            </View>
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
                                    left: 30,
                                    // position: "absolute",
                                    // right: 100,
                                    top: 10
                                  }}
                                />
                              }
                              type="clear"
                            />
                          </View>
                        </TouchableOpacity>
                      </View>
                    );
                  }}
                />
              </Tab>
            </Tabs>
          </View>
        </View>
      
    );
  }
}

