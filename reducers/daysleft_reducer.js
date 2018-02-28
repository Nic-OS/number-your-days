export default DaysLeftReducer = (state = null, action) => {
  switch(action.type) {
    case 'CALCULATE_DAYSLEFT':
      return action.payload;
  }
  
  return state;
}
