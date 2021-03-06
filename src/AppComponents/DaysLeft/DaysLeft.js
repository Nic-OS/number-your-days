import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { calculateDaysLeft, startOver } from '../../Redux/actions';

class DaysLeft extends Component {
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

  calculateDaysLeft = () => {
    const {calculateDaysLeft} = this.props

    const genderCountryLifeExpectancy = [
      [61.9, 80.7, 77.5, 54.0, 78.6, 79.9, 77.7, 84.8, 83.9, 75.8, 79.1, 77.9, 73.1,
        77.9, 78.0, 83.5, 73.1, 61.1, 70.1, 73.3, 79.7, 68.1, 78.7, 79.2, 78.0, 60.5,
        61.6, 75.0, 70.7, 58.6, 84.1, 54.1, 54.5, 83.4, 77.6, 78.4, 65.2, 66.3, 82.2,
        54.4, 81.2, 81.4, 82.7, 81.7, 74.0, 61.5, 82.5, 65.3, 77.1, 79.0, 73.2, 77.9,
        60.0, 67.0, 82.0, 66.8, 73.1, 83.8, 85.4, 67.2, 62.5, 78.3, 83.4, 63.9, 83.6,
        76.1, 75.2, 59.8, 60.5, 68.5, 65.5, 77.0, 79.1, 84.1, 69.9, 71.2, 76.6, 71.8,
        83.4, 84.3, 84.8, 78.6, 86.8, 75.9, 74.7, 65.8, 68.8, 76.0, 75.1, 67.2, 79.2,
        76.5, 55.4, 62.9, 75.6, 79.1, 84.0, 67.0, 59.9, 77.3, 80.2, 58.3, 83.7, 64.6,
        77.8, 79.5, 70.6, 73.2, 78.1, 75.4, 59.4, 68.5, 68.3, 70.8, 83.6, 83.3, 77.9,
        62.8, 55.6, 83.7, 79.2, 67.5, 81.1, 65.4, 76.0, 78.0, 72.0, 81.3, 83.9, 80.0,
        85.5, 76.2, 78.8, 76.3, 71.1, 77.9, 75.2, 77.5, 69.4, 76.0, 68.6, 78.4, 78.0,
        50.8, 86.1, 80.2, 83.7, 70.8, 56.6, 66.2, 58.6, 85.5, 78.3, 65.9, 74.7, 61.1,
        84.0, 85.3, 69.9, 73.6, 78.0, 77.8, 70.1, 61.1, 76.4, 74.8, 77.8, 78.9, 70.5,
        64.3, 76.1, 78.6, 83.0, 63.8, 81.6, 80.4, 72.7, 74.0, 78.5, 80.7, 67.2, 64.7,
        62.3],
  
      [59.3, 75.1, 73.8, 50.9, 74.1, 72.7, 71.6, 80.9, 79.0, 69.6, 72.9, 76.2, 70.6,
        73.1, 66.5, 78.6, 67.5, 58.8, 69.5, 68.2, 75.0, 63.3, 71.4, 76.3, 71.1, 59.1,
        57.7, 71.3, 66.6, 55.9, 80.2, 50.9, 51.7, 77.4, 74.6, 71.2, 61.9, 63.2, 77.1,
        52.3, 74.7, 76.9, 78.3, 75.9, 67.0, 58.3, 78.6, 61.8, 70.9, 73.5, 68.8, 68.8,
        56.6, 62.4, 72.7, 62.8, 67.0, 78.3, 79.4, 64.7, 59.8, 70.3, 78.7, 61.0, 78.3,
        71.2, 68.5, 58.2, 57.2, 63.9, 61.5, 72.3, 72.3, 81.2, 66.9, 67.1, 74.5, 66.2,
        79.4, 80.6, 80.5, 73.9, 80.5, 72.5, 65.7, 61.1, 63.7, 73.7, 67.2, 64.1, 69.6,
        73.5, 51.7, 59.8, 70.1, 68.1, 79.8, 63.9, 56.7, 72.7, 76.9, 58.2, 79.7, 61.6,
        71.4, 73.9, 68.1, 64.7, 74.1, 73.3, 55.7, 64.6, 63.1, 67.7, 80.0, 80.0, 71.5,
        60.9, 53.4, 79.8, 75.0, 65.5, 74.7, 60.6, 72.2, 73.1, 65.3, 73.6, 78.2, 77.4,
        78.8, 67.9, 71.4, 64.7, 60.9, 72.6, 71.3, 70.9, 65.6, 73.2, 64.6, 72.9, 69.1,
        49.3, 80.0, 72.9, 77.9, 67.9, 53.5, 59.3, 56.1, 80.1, 71.6, 62.4, 68.6, 56.6,
        80.7, 81.3, 59.9, 66.6, 71.9, 73.5, 66.6, 58.6, 70.6, 67.9, 73.0, 72.6, 62.2,
        60.3, 66.3, 76.4, 79.4, 59.9, 76.9, 73.3, 66.1, 70.1, 70.0, 71.3, 64.3, 59.0,
        59.0]
      ]

    const userLifeExpectancy = genderCountryLifeExpectancy[
      this.props.gender][this.props.country];

    const days = Number((userLifeExpectancy - this.props.age).toFixed()) * 365;

    calculateDaysLeft(days)

    return this.props.daysLeft
  }

  startOver = () => {
    const {startOver} = this.props
    const returntoHomeScreen = () => this.props.navigation.navigate('WelcomeScreen')

    returnToHomeScreen()
    startOver()
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>
          You have approximately {this.calculateDaysLeft()} days left.
        </Text>
        <TouchableOpacity
            style={styles.button}
            onPress={this.startOver}>
            <Text style={styles.buttonText}>
              Start over
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
    backgroundColor: 'white'
  },
  mainText: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black'
  },
  button: {
    padding: 20, 
    marginLeft: 75, 
    marginRight: 75,
    marginTop: 20, 
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
  age: state.age,
  gender: state.gender,
  country: state.country,
  daysLeft: state.daysLeft
})

const mapDispatchToProps = dispatch => ({
  calculateDaysLeft: value => dispatch(calculateDaysLeft(value)),
  startOver: () => dispatch(startOver())
})

export default connect(mapStateToProps, mapDispatchToProps)(DaysLeft);
