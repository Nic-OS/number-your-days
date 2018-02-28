export default GenderReducer = (state = null, action) => {
  switch(action.type) {
    case 'SET_GENDER':
      return action.payload;
  }

  return state;
}
