import React, {Component} from 'react'
import {View, Text, Button } from 'react-native'
import StackNavigator from 'react-navigation';

export default class Welcome extends Component {
static navigationOptions: {title: 'Welcome',};

render() {
  return(
    <View>
      <Text>Welcome to the Number Your Days app.</Text>
      <Button
        title="Click here to begin"
        onPress={() => this.props.navigation.navigate('Age', {
          placeholder: 'Enter age here',
          keyboardType: 'numeric',
        })}
      />
    </View>
  )
}

}
