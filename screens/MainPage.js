import React from 'react';
import { Text, View,TextInput, StyleSheet,Button } from 'react-native';

const FetchMovies = async (title) => {
   const response = await fetch(`http://www.omdbapi.com/?s=${title}&apikey=d1004768`)
   const results = await response.json()
   return results.Search
}     
export default class MainPage extends React.Component{
   state = {
    search : '',
    title  : '',
  }
   textHandler = value => {
      this.setState({search : value})
      }
   
   FetchMoviestitle = async () => {
      let results = await FetchMovies(this.state.search);
      this.setState({ 
         title  : results[0].Title,
      })
   }
   msg = `Result for ${this.state.search}` 
   render(){
      return(
        <View>
          <TextInput 
           onChangeText = {this.textHandler}
           value = {this.state.search}
           placeholder = 'Enter the title here'
           />  
          <Button
          title = 'Search'
          onPress = {this.FetchMoviestitle}
           />
         <Text> {this.msg}</Text> 
         <Text> the title is {this.state.title}</Text>
        </View>  
      )
   }
}

 