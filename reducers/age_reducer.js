// State argument is not application state, only the state the reducer is
// responsible for
export default AgeReducer = (state = null, action) => {
  switch(action.type) {
  case 'SET_AGE':
    return action.payload;
  }

  return state;
}
