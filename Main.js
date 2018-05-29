/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Button,Dimensions } from 'react-native';
import MyAccount from './src/pages/MyAccount';


export default class Main extends Component{
  
  render() {
    const screenWidth = Dimensions.get('window').width
    const screenHeigth = Dimensions.get('window').height
    console.log(this.props.navigation);
    return <View style={{width:screenWidth,height:screenHeigth }}>
      <MyAccount/>
    </View>

  }
}