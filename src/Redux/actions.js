// Action creators. Each will be imported into their respective components and passed as props, then dispatched to the reducers when called.

export function setUserAge(value) {
    // setUserAge is an ActionCreator. It needs to return an Action - an object
    // with a type property.
    return {
      type: 'SET_AGE',
      payload: value,
    };
  }
  
  export function setUserGender(value) {
    return {
      type: 'SET_GENDER',
      payload: value,
    };
  }
  
  export function setUserCountry(value) {
    return {
      type: 'SET_COUNTRY',
      payload: value,
    };
  }
  
  export function calculateDaysLeft(value) {
    return {
      type: 'CALCULATE_DAYSLEFT',
      payload: value,
    };
  }