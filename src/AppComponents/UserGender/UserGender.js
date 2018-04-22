import React, { Component } from 'react';

import {
  View, 
  Picker, 
  Text, 
  Button,
  TouchableOpacity, 
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';

import { connect } from 'react-redux';

import {setUserGender} from '../../Redux/actions';

class UserGender extends Component {
  static navigationOptions = {
    title: 'Number Your Days',
    headerStyle: {
      backgroundColor: '#42c2f4',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }

  state = {
    gender: '',
  }

  onValueChange = (itemValue) => {
    const {setUserGender} = this.props

    setUserGender(itemValue)
    this.setState({gender: itemValue})
  }

    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.mainText}>
            What's your gender?
          </Text>
          <Picker
            style={styles.dropdownMenu}
            selectedValue={this.state.gender}
            onValueChange={this.onValueChange}>
            <Picker.Item label="Please select gender" value={''} />
            <Picker.Item label="Female" value={0} />
            <Picker.Item label="Male" value={1} />
          </Picker>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Country')}>
            <Text style={styles.buttonText}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    mainText: {
      fontSize: 35,
      fontWeight: 'bold',
      color: 'black',
    },
    dropdownMenu: {
      height: 75,
      width: 200,
      margin: 25
    },
    button: {
      padding: 20, 
      marginLeft: 75, 
      marginRight: 75, 
      backgroundColor: '#42c2f4', 
      alignItems: 'center'
    },
    buttonText: {
      fontWeight: 'bold', 
      fontSize: 20,
      color: 'white'
    }
  })

  const mapStateToProps = state => ({
    gender: state.gender
  })

  const mapDispatchToProps = dispatch => ({
    //Whenever setUserAge is called, the result should be passed to all reducers.
    setUserGender: value => dispatch(setUserGender(value))
  })

  export default connect(mapStateToProps, mapDispatchToProps)(UserGender);
