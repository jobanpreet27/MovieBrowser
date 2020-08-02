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
      this.props.navigation.navigate('SearchPage',{data:results}) 
   }
   msg = `Result for ${this.state.search}` 
   render(){
      return(
        <View style = {{flex:1,justifyContent:'center',alignItems: 'center',}}>
           
       <Text style = {{marginBottom:3,fontSize : 50,}}>
          MovieBrowser 
       </Text> 
          <TextInput style = {{margin:3,width:150,borderBottomWidth:1, borderColor:'black',}} 
           onChangeText = {this.textHandler}
           value = {this.state.search}
           placeholder = 'Enter the Movie Name'
           />  
          <Button
          title = 'Search'
          onPress = {this.FetchMoviestitle}
           />
        </View>  
      )
   }
}

