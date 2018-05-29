/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import MyAccount from './src/pages/MyAccount';
import Main from './Main';
import { createStackNavigator } from 'react-navigation';


export default class App extends Component{
  render() {
    return <NavigationStack screenProps="wafaa"/>

  }
}
const NavigationStack = createStackNavigator({
  Main: {
      screen: Main,
      path:'/Main'
  },
  MyAccount: {
      screen: MyAccount,
      path: '/MyAccount'
    }
},
{
  headerMode: 'none'
})