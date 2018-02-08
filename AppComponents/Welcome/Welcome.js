import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class Welcome extends Component {

render() {
  return(
    <View>
      <Text>Welcome to the Number Your Days app.</Text>
      <Button
        Title="Click here to begin"
        onPress={this.props.onPress};
      />
    </View>
  )
}

}
