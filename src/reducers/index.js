// reducers/index.js
import { combineReducers } from 'redux';

const initialState = {
  name: '',
  email: '',
  password: '',
  errors: {},
  isSubmit: false,
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { ...state, name: action.payload };
    case 'UPDATE_EMAIL':
      return { ...state, email: action.payload };
    case 'UPDATE_PASSWORD':
      return { ...state, password: action.payload };
    case 'SET_ERRORS':
      return { ...state, errors: action.payload };
    case 'SET_SUBMIT':
      return { ...state, isSubmit: action.payload };
    case 'CLEAR_FORM':
      return initialState;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  form: formReducer,
});

export default rootReducer;
