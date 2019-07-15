import React from 'react';
import { Navigation } from 'react-native-navigation';

import reducers from './reducers/RootReducer'
import {getStore} from './store/common/MainStore'
import {registerScreens} from './store/screens/Screen'
// import {Button, Icon } from 'react-native-elements';

import Icon from 'react-native-vector-icons/AntDesign';


const mainStore = getStore(reducers);
registerScreens(mainStore);

let homeIcon;
let suggestIcon;
let chatIcon;

export default class App extends React.Component{
    constructor(props){
        super(props);
        this._populateIcons().then(() => {
          // Start app only if all icons are loaded
          this.startApp();
        }).catch((error) => {
          console.error(error);
        });
        
    }

    _populateIcons = function () {
      return new Promise(function (resolve, reject) {
        Promise.all(
          [
            Icon.getImageSource('user', 20),
            Icon.getImageSource('hearto', 20),
            Icon.getImageSource('message1', 20),
           
          ]
        ).then((values) => {
          homeIcon = values[0];
          suggestIcon = values[1];
          chatIcon=values[2];
         
          resolve(true);
        }).catch((error) => {
          console.log(error);
          reject(error);
        }).done();
      });
    };

    startApp(){
      

        Navigation.events().registerAppLaunchedListener(() => {
            Navigation.setDefaultOptions({
              topBar:{
                visible:false
              }
            })
            // Navigation.setRoot({
            //   root: {
            //     stack:{
            //       id: 'App',
            //       children: [{
            //         component: {
            //           // name: 'outng.AuthLoadingScreen'
            //           name: 'outng.NewUserScreenIndex2'
            //           // name: 'outng.LoginScreenIndex'
            //         }

            //       }
                    
            //       ],
                  

            //     }
                
            //   }
            // });

            Navigation.setRoot({
              root: {
                bottomTabs: {
                  children: [{
                            stack: {
                              id:"profileBottomTab",
                              children: [{
                                component: {
                                  name: 'outng.UserProfileScreenIndex'
                                }
                              }],
                              options: {
                      
                                bottomTab: {
                                  text: 'Profile',
                                  icon:homeIcon,
                                  selectedIconColor: 'blue',
                          
                                 
                                  testID: 'FIRST_TAB_BAR_BUTTON'
                                },
                                

                              }
                            }
                          },

                          {stack: {
                            children: [{
                              component: {
                                name: 'outng.HomeScreenIndex',
                              }
                            }],
                            options: {
                              
                                bottomTab: {
                                  text: 'Suggested',
                                  icon:suggestIcon,
                                  selectedIconColor: 'blue',
                                  
                                  testID: 'SECOND_TAB_BAR_BUTTON'
                                },
                                

                            }
                          }
                        },
                        {stack: {
                          id:"chatBottomTab",
                          children: [
                            // {
                            // component: {
                            //   // id:"chatScreenID",
                            //   name: 'outng.ChatRoomScreen',

                            // }
                          
                            {
                            component: {
                              id:"chatScreenID",
                              name: 'outng.ChatScreenIndex',
                            },
                            
                            
                          },
                        ],
                          options: {
                            
                            bottomTab: {

                              text: 'Matches',
                              icon: chatIcon,
                              selectedIconColor: 'blue',
                              testID: 'THIRD_TAB_BAR_BUTTON',
                              animate:true,
                              alpha: {
                                  from: 0,
                                  to: 1
                                }
                              // badge: 'New',
                              // badgeColor: 'red',
                            }
                          }
                        }
                      },
                      ],
                      options: {
                          bottomTabs: {
                            iconInsets: { top:0, left: 0, bottom: 0, right: 0 },
                            currentTabIndex: 2,
                            // animate: true,
                            // alpha: {
                            //   from: 0,
                            //   to: 1
                            // }
                          },
                          
                        }
                }
              }
            });
          });
    }



}








