export default CountryReducer = (state = null, action) => {
  switch(action.type) {
  case 'SET_COUNTRY':
    return action.payload;
  }

  return state;
}
