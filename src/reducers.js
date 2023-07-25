// reducers.js
import { combineReducers } from 'redux';
import { REGISTER_USER, SET_ERRORS, SET_SUBMIT_STATUS } from './actionTypes';

const initialState = {
  name: '',
  email: '',
  password: '',
  errors: {},
  isSubmit: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      // You can update the state here according to your application's logic.
      // For now, I'm just returning the payload as the new state.
      return {
        ...state,
        ...action.payload,
      };
    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case SET_SUBMIT_STATUS:
      return {
        ...state,
        isSubmit: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
