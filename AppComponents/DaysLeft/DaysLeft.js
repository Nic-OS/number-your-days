import React, { Component } from 'react';
import { Text, View} from 'react-native';
import { connect } from 'react-redux';
import { calculateDaysLeft } from '../actions/index';
import { bindActionCreators } from 'redux';

class DaysLeft extends Component {

  calculateDaysLeft = () => {
    const {calculateDaysLeft} = this.props

    const userLifeExpectancy = this.props.genderCountryLifeExpectancy[
      this.props.gender][this.props.country];

    const daysLeft = Number((userLifeExpectancy - this.props.age).toFixed()) * 365;

    calculateDaysLeft(daysLeft)
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          You have approximately {this.props.daysLeft} days left.
        </Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    age: state.age,
    gender: state.gender,
    country: state.country,
    genderCountryLifeExpectancy: state.genderCountryLifeExpectancy,
    daysLeft: state.daysLeft,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({calculateDaysLeft: calculateDaysLeft}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DaysLeft);
