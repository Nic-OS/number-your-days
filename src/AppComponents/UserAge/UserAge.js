import React, { Component } from 'react';

import { 
  View, 
  TextInput, 
  Text, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  StyleSheet, 
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';

import { connect } from 'react-redux';

import { setUserAge } from '../../Redux/actions';

class UserAge extends Component {

  state = {age: ''}

  onChangeText = (age) => this.setState({age})

  onSubmit = () => {
  //setUserAge prop passes in the ActionCreator setUserAge, which updates global
  //state {age} by returning payload value equal to the value of the user input.
    const {setUserAge} = this.props
    const {age} = this.state

    if (!age) return

    setUserAge(age)
    this.setState({age})
  }

  render() {

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainTextView}>
          <Text style={styles.mainText}>
            What's your age?
          </Text>
          <TextInput
            style={{margin: 25}}
            value={this.state.age}
            placeholder='Enter age here:'
            keyboardType='numeric'
            enablesReturnKeyAutomatically={true} //iOS only
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmit}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Gender')}>
            <Text style={styles.buttonText}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
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
  mainTextView: {
    width: 400,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainText: {
    fontSize: 45, 
    fontWeight: 'bold',
    color: 'black'
  },
  inputView: {
    height: 200,
    width: 200,
    marginTop: 20,
    justifyContent: 'center'
  },
  button: {
    padding: 20, 
    marginLeft: 75, 
    marginRight: 75, 
    backgroundColor: 'skyblue', 
    alignItems: 'center'
  },
  buttonText: {
    fontWeight: 'bold', 
    fontSize: 20,
    color: 'white'
  }
})

/*
React-Redux stuff. The following three functions "connect" the child component to Redux by creating a wrapper 
component that's able to access and modify the state in the Redux store. 

`mapStateToProps()` accepts the current state tree in the Redux store and allows you 
to map a piece of the state to this child component's props. Then you can use those props to either display or 
modify the value of the state through action creators, which brings me to the next function.

`mapDispatchToProps` simplifies the process of dispatching your action creators to the reducer(s) when you want
to update the state. After importing an action creator in your component, this function allows you to map a 
DISPATCHED version of the action creator to your props. This means that your props, when called, will dispatch 
their returned value (the action itself) to the reducer, thereby updating the state. Easy peasy.

`connect()` does all the hard work of creating the abstraction layer on your actual component that can access
Redux. It combines what was returned from the first two functions and your actual component and creates a new
wrapper component that's connected to Redux. This promotes reusability of your components while allowing
you to easily connect to Redux when necessary.
*/

// Accepts current Redux store state tree. Maps the piece (or pieces) of state you want onto props to be used in
// your component. `age` attribute key represents prop name. `state.age` represents piece of state to map.
const mapStateToProps = state => {
  return {
    age: state.age
  };
}

// Anything returned from this function will end up as props in the UserAge component.
const mapDispatchToProps = dispatch => ({
  // Whenever setUserAge is called, the result will be passed to all reducers.
  setUserAge: value => dispatch(setUserAge(value))
})

// Promote UserAge from 'dumb' component to 'smart' container that's connected to Redux.
export default connect(mapStateToProps, mapDispatchToProps)(UserAge);
