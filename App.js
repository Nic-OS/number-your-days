import React, { Component } from 'react';

import {StackNavigator} from 'react-navigation';

import Welcome from './src/AppComponents/Welcome/Welcome';
import UserAge from './src/AppComponents/UserAge/UserAge';
import UserGender from './src/AppComponents/UserGender/UserGender';
import UserCountry from './src/AppComponents/UserCountry/UserCountry';
import DaysLeft from './src/AppComponents/DaysLeft/DaysLeft';

export default class App extends Component {

render() {

  const RootNavigator = StackNavigator({
      WelcomeScreen: {
        screen: Welcome,
      },
      Age: {
        screen: UserAge,
      },
      Gender: {
        screen: UserGender,
      },
      Country: {
        screen: UserCountry,
      },
      Days: {
        screen: DaysLeft,
      },
  },
{
    initialRouteName:  'WelcomeScreen',
    navigationOptions: {
      title: 'Number Your Days',
      headerStyle: {
        backgroundColor: 'skyblue',
      },
      headerTintColor: '',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
});

  return <RootNavigator />;
  }
}
