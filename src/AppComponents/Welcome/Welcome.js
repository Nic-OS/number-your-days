import React, {Component} from 'react'
import {View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'

export default class Welcome extends Component {

render() {

  return(
    <View style={styles.container}>
        <Text style={styles.mainText}>
          Welcome to the Number Your Days app.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Age')}>
          <Text style={styles.buttonText}>
            Let's begin
          </Text>
        </TouchableOpacity>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: 'white'
  },
  mainText: {
    color: 'black', 
    fontSize: 40, 
    fontWeight: 'bold', 
    textAlign: 'center',
    paddingBottom: 20
  },
  button: {
    padding: 20, 
    marginLeft: 75, 
    marginRight: 75,
    marginTop: 35,
    backgroundColor: 'skyblue', 
    alignItems: 'center'
  },
  buttonText: {
    fontWeight: 'bold', 
    color: 'white', 
    fontSize: 20
  }
})