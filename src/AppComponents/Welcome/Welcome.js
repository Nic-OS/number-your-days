import React, {Component} from 'react'
import {View, Text, Button, TouchableOpacity } from 'react-native'

export default class Welcome extends Component {

render() {

  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
      <View style={{height: 200, width: 400, justifyContent: 'center'}}>
        <Text style={{color: 'black', fontSize: 35, fontWeight: 'bold', textAlign: 'center'}}>
          Welcome to the Number Your Days app.
        </Text>
      </View>
      <View style={{height: 200, width: 400, justifyContent: 'center'}}>
        <TouchableOpacity
          style={{padding: 20, marginLeft: 75, marginRight: 75, backgroundColor: 'skyblue', alignItems: 'center'}}
          onPress={() => this.props.navigation.navigate('Age')}>
          <Text style={{fontWeight: 'bold', color: 'black', fontSize: 20}}>
            Let's begin
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    )
  }
}
