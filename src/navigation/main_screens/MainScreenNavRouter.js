import { Navigation } from 'react-native-navigation'

import Icon from 'react-native-vector-icons/AntDesign';

export const goToLoginIndex = () => Navigation.setRoot({
  root: {
    component: {
        name: 'outng.LoginScreenIndex'
      }
  }
    
});


let homeIcon;
let suggestIcon;
let chatIcon;


export const _populateIcons = function () {
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

export const goToHomeIndex = () => 
_populateIcons().then(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [{
                  stack: {
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
                children: [{
                  component: {
                    name: 'outng.ChatScreenIndex',
                  }
                }],
                options: {
                  
                  bottomTab: {
                    text: 'Chat',
                    icon: chatIcon,
                    selectedIconColor: 'blue',
                    testID: 'THIRD_TAB_BAR_BUTTON',
                    badge: 'New',
                    badgeColor: 'red',
                  }
                }
              }
            },
            ],
            options: {
                bottomTabs: {
                  iconInsets: { top:0, left: 0, bottom: 0, right: 0 },
                  currentTabIndex: 1
                },
                
              }
      }
    }
  });



 
  }).catch((error) => {
    console.error(error);
  });






export const goToNewUserIndex = () => Navigation.setRoot({
  root: {
    stack:{
      id: 'App',
      children: [{
        component: {
   
          name: 'outng.NewUserScreenIndex'
          
        }

      }
        
      ],
      

    }
    
  }
});