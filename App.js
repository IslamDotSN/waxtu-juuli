/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { BottomNavigation, Navigation, Card, Tab } from 'react-router-navigation';
import LaPriere from "./src/pages/LaPriere";
import LesChartes from "./src/pages/LesChartes";
import Conferences from "./src/pages/Conferences";
import AlJuma from "./src/pages/AlJuma";
import { NativeRouter, Link } from 'react-router-native';
import IslamIcon from "./src/assets/Icons";
// import { Navigation, Card } from 'react-router-navigation'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

  _renderIcon = (props, name) =>{
      let color = props.focused ? props.sceneProps.tabActiveTintColor : props.sceneProps.tabTintColor
      return <IslamIcon name={name} size={30} color={color}/>
  }
  render() {
    return (
      <NativeRouter>
      <BottomNavigation
        lazy={false}
        tabTintColor="#595959"
        tabActiveTintColor="#029e3d"
        tabBarStyle={{ backgroundColor: "#ebebeb"}}
      >
        <Tab label="La Prière" 
          path="/" 
          renderTabIcon={(props)=>(this._renderIcon(props, "muslim-praying"))} 
          component={LaPriere} />
        <Tab label="Les Chartes" 
          path="/les-chartes" 
          renderTabIcon={(props)=>(this._renderIcon(props, "quran-book"))} 
          component={LesChartes} />

        <Tab label="Al Juma" 
          path="/al-juma" 
          renderTabIcon={(props)=>(this._renderIcon(props, "islamic-friday-prayer"))} 
          component={AlJuma} />
        <Tab label="Conférences" 
          path="/conferences" 
          renderTabIcon={(props)=>(this._renderIcon(props, "muslim-man"))} 
          component={Conferences} />
      </BottomNavigation>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    fontFamily: "Anton",
    textAlign: 'center',
    margin:10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
