import { combineReducers } from 'redux';
// import { auth } from './auth/AuthReducer';
import { userMatchesListReducer } from './matches/MatchesReducer';

const rootReducer = combineReducers({
    // auth:auth,
    userMatches: userMatchesListReducer
  });
  
export default rootReducer;