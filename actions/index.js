export function setUserAge(value) {
  // setUserAge is an ActionCreator. It needs to return an Action - an object
  // with a type property.
  return {
    type: 'SET_AGE',
    payload: value,
  };
}
