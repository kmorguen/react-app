import React from 'react'

import { View, TextInput, Button } from 'react-native'

class Search extends React.Component{

  render(){
        return(
            <View>
                <TextInput placeholder="Titre du Film"/>
                <Button title="Recherche" onPress={() => {}}/>
            </View>
        )
    }

}

export default Search