export default AgeReducer = (state = null, action) => {
  switch(action.type) {
  case: 'SET_AGE':
    return action.payload;
  }

  return state;
}
