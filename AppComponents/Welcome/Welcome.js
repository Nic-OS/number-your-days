import React, {Component} from 'react'
import {View, Text, Button } from 'react-native'
import StackNavigator from 'react-navigation';

export default class Welcome extends Component {

render() {

  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Welcome to the Number Your Days app.</Text>
      <Button
        title="Click here to begin"
        onPress={() => this.props.navigation.navigate('Age')}
      />
    </View>
    )
  }
}
