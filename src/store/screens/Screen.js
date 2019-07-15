import {Navigation} from 'react-native-navigation';
import { Provider } from 'react-redux';

import LoginScreenIndex from '../../components/login/LoginScreenIndex'
import AuthLoadingScreen from '../../components/common/loading/AuthLoadingScreen'



import HomeScreenIndex from '../../components/main/HomeScreenIndex'
import ChatScreenIndex from '../../components/main/chat/ChatScreenIndex'
import ChatProfileScreen from '../../components/main/chat/profile/ChatProfileScreen'
import ChatRoomScreenIndex from '../../components/main/chat/room/ChatRoomScreen'
import ChatMenuScreen from '../../components/main/chat/menu/ChatMenuScreen'
import FilterModal from '../../components/main/chat/menu/modals/FilterModal'


import UserProfileScreenIndex from '../../components/main/profile/UserProfileScreenIndex'


import NewUserScreenIndex from '../../components/new_user_flow/NewUserIndex'
import NewUserScreenIndex2 from '../../components/new_user_flow/NewUserIndex2';
import NewUserScreenIndex3 from '../../components/new_user_flow/NewUserIndex3';


export function registerScreens(store){
    //LOGIN/AUTH SCREENS
    Navigation.registerComponentWithRedux('outng.LoginScreenIndex', () => LoginScreenIndex, Provider, store)
    Navigation.registerComponent('outng.AuthLoadingScreen', () => AuthLoadingScreen)


    //MAIN SCREENS
    Navigation.registerComponentWithRedux('outng.HomeScreenIndex', () => HomeScreenIndex, Provider, store)
    Navigation.registerComponentWithRedux('outng.ChatScreenIndex', () => ChatScreenIndex, Provider, store)
    Navigation.registerComponentWithRedux('outng.UserProfileScreenIndex', () => UserProfileScreenIndex, Provider, store)

    //MAIN SCREENS - CHAT
    Navigation.registerComponentWithRedux('outng.ChatProfileScreenIndex', () => ChatProfileScreen, Provider, store)
    Navigation.registerComponentWithRedux('outng.ChatRoomScreen', () => ChatRoomScreenIndex, Provider, store)
    Navigation.registerComponentWithRedux('outng.ChatMenuScreen', () => ChatMenuScreen, Provider, store)
    Navigation.registerComponentWithRedux('outng.FilterModal', () => FilterModal, Provider, store)

    
    // NEW USER SCREENS
    Navigation.registerComponentWithRedux('outng.NewUserScreenIndex', () => NewUserScreenIndex, Provider, store)
    Navigation.registerComponentWithRedux('outng.NewUserScreenIndex2', () => NewUserScreenIndex2, Provider, store)
    Navigation.registerComponentWithRedux('outng.NewUserScreenIndex3', () => NewUserScreenIndex3, Provider, store)
}