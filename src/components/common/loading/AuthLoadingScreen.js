import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  View,
} from 'react-native';

import {goToHomeIndex, goToLoginIndex} from '../../../navigation/main_screens/MainScreenNavRouter'


export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  bootstrapAsync = async () => {
    try{
      const userToken = await AsyncStorage.getItem('userToken');
      if(userToken){
        goToHomeIndex();
      }else{
        goToLoginIndex();
      }

    }catch(error){
      console.log(error);
      goToLoginIndex();
    }
    
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={[styles.container]}>
        <ActivityIndicator size="large" color="#0000ff"/>
      </View>
    );
  };
  
  
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center'
  }
}



