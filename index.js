import React from 'react';
import { AppRegistry } from 'react-native';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './App';
import rootReducer from './src/Redux/reducers';

let store = createStore(rootReducer);

const AppWithStore = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent('NumberYourDays', () => AppWithStore);
