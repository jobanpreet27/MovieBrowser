import * as React from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import DetailPage from './screens/DetailPage';
import MainPage from './screens/MainPage';
import SearchPage from './screens/SearchPage'
import { Card } from 'react-native-paper';

const MainNavigator = createStackNavigator(
  {
      'MainPage'   : MainPage ,
      'DetailPage' : DetailPage,
      'SearchPage' : SearchPage,
  },
  {
     initialRouteName : 'MainPage'
  });

const Con = createAppContainer(MainNavigator);
export default Con;
