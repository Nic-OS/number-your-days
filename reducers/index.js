import {combineReducers} from 'redux';
import AgeReducer from './age_reducer';
import CountryReducer from './country_reducer';
import GenderReducer from './gender_reducer';
import DaysLeftReducer from './daysleft_reducer';
import GenderCountryLifeExpectancyReducer from './gendercountrylifeexpectancy_reducer';

const rootReducer = combineReducers({
  age: AgeReducer,
  gender: GenderReducer,
  country: CountryReducer,
  daysLeft: DaysLeftReducer,
  gendercountrylifeexpectancy: GenderCountryLifeExpectancyReducer
});

export default rootReducer;
