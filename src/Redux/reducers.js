// Specify initial state since Redux will call the reducers with an undefined state for the first time.

const initialState = {
    age: '',
    gender: '',
    country: '',
    daysLeft: '',
}

// The app's main reducer that will receive the actions dispatched to it and update the state object based on
// the action type. Each action's payload will become the new value for that piece of state.

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_AGE':
      return Object.assign({}, state, {
        age: action.payload
      })
    case 'SET_GENDER':
      return Object.assign({}, state, {
        gender: action.payload
      })
    case 'SET_COUNTRY':
      return Object.assign({}, state, {
        country: action.payload
      })
    case 'CALCULATE_DAYSLEFT':
      return Object.assign({}, state, {
        daysLeft: action.payload
      })
    default:
      return state
  }
}

export default rootReducer;