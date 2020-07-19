import React from 'react';
import { Text, View, StyleSheet,Button,TextInput  } from 'react-native';

export default class DetailPage extends React.Component{
   render(){
      return(<View>
        
       <Button
          title = 'Detail Page'
          onPress = {()=>this.props.navigation.goBack()}/>
      </View>
      )
   }
}
