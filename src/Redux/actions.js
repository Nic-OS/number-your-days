import React from 'react';

// Action creators. Each will be imported into their respective components and passed as props, then dispatched to the reducers when called.

export const setUserAge = value => {
    // setUserAge is an ActionCreator. It needs to return an Action - an object
    // with a type property.
    return {
      type: 'SET_AGE',
      payload: value,
    };
  }
  
export const setUserGender = value => {
  return {
    type: 'SET_GENDER',
    payload: value,
  };
}

export const setUserCountry = value => {
  return {
    type: 'SET_COUNTRY',
    payload: value,
  };
}

export const calculateDaysLeft = value => {
  return {
    type: 'CALCULATE_DAYSLEFT',
    payload: value,
  };
}

export const startOver = () => {
  return {
    type: 'START_OVER'
  };
}