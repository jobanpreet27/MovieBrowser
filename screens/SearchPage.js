import React from 'react';
import { Text, View, TextInput, FlatList, StyleSheet, Button, TouchableHighlight } from 'react-native';
import { ListItem } from 'react-native-elements';
import DetailPage from './DetailPage';

export default class SearchResults extends React.Component {
    renderlist = ({ item }) => (

        <View style={{ backgroundColor: 'white' }}>
            <TouchableHighlight
                onPress={() => { console.log(item.Title) }}
            >
                <Text>{item.Title}</Text>
            </TouchableHighlight>
        </View>

    )
    renderlist2 = ({ item }) => (
            <TouchableHighlight
             onPress = {()=>{this.props.navigation.navigate('DetailPage',{item})}}
            >
             <ListItem
             leftAvatar  ={ {source : { uri: item.Poster }}}
             title ={item.Title}
             subtitle={item.Year}
             key = {item.imdbID} 
             bottomDivider />
             </TouchableHighlight>
    )
    render() {
        return (
            <View>
                <Text>
                    Results for your search
                </Text>
                <FlatList
                    
                    data={this.props.navigation.state.params.data}
                    renderItem={this.renderlist2}
                    keyExtractor = {item=>item.imdbID}
                />
            </View>

        )

    }
}