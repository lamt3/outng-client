{/* 
    Service Class To Interact With 3rd Party APIs
    1. FB API
    2. FB Account API (Phone# login)
*/}

import axios from 'axios';

import FBSDK from 'react-native-fbsdk'


const { AccessToken, LoginManager } = FBSDK 

class ClientService{
    constructor(){

    }

    fbAuth(callback) {
    
        LoginManager.logInWithReadPermissions(['public_profile']).then(
          function (result) {
            if (result.isCancelled) {
              console.log('Login was cancelled');
            } else {
              if(AccessToken.getCurrentAccessToken){
                let response = {
                  newUser:true
                };
                callback(response);
              }
            
              console.log('Login was successful with permissions: ' + result.grantedPermissions.toString());
              console.log(AccessToken.getCurrentAccessToken());
            }
          },
          function (error) {
            console.log('Login failed with error: ' + error);
          }
        );
    
        
      }


}

export const clientService = new ClientService()