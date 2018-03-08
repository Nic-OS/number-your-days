import {combineReducers} from 'redux';

// Specify initial state since Redux will call the reducers with an undefined state for the first time.

const initialState = {
    age: '',
    gender: '',
    country: '',
    daysLeft: '',
}

// Reducers. State argument is not application state, but only the piece of state
// the reducer is responsible for.

AgeReducer = (state = initialState, action) => {
  switch(action.type) {
  case 'SET_AGE':
    return action.payload;
  default:
    return state
  }
}

GenderReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_GENDER':
      return action.payload;
    default:
      return state
  }
}

CountryReducer = (state = initialState, action) => {
  switch(action.type) {
  case 'SET_COUNTRY':
    return action.payload;
  default:
    return state
  }
}

DaysLeftReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CALCULATE_DAYSLEFT':
      return action.payload;
    default:
      return state
  }
}

// The combined rootReducer that will be passed as an argument to the Redux store

export default const rootReducer = combineReducers({
  age: AgeReducer,
  gender: GenderReducer,
  country: CountryReducer,
  daysLeft: DaysLeftReducer,
});