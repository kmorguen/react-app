import React from 'react'

import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native'

class Search extends React.Component{

  render(){
        return(
            <View style ={{marginTop : 20}}>
                <TextInput style = {styles.textinput} placeholder="Titre du Film"/>
                <Button title="Recherche" onPress={() => {}}/>
                <FlatList
                data = {[{key: 'a'},{key : 'b'}]}
                renderItem = {({item}) => <Text> {item.key} </Text>}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
    }
  }
)
export default Search