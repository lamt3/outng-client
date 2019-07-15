import React, { Component } from 'react';
import {Button} from 'react-native'

import Login from './Login'
import WallPaper from '../common/wallpaper/WallPaper'
import Logo from '../common/logo/Logo'

export default class LoginScreenIndex extends Component {
    
  render() {
      return (
       <WallPaper>
          
          <Logo />
          <Login />
       </WallPaper>
      );
    }
  }
