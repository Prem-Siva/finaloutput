// actions.js
import { REGISTER_USER, SET_ERRORS, SET_SUBMIT_STATUS } from './actionTypes';

export const registerUser = (userData) => {
  // You can perform any async tasks here, like the axios.post call in handleSubmit.
  // For simplicity, I'm just returning the user data as the payload.
  return {
    type: REGISTER_USER,
    payload: userData,
  };
};

export const setErrors = (errors) => {
  return {
    type: SET_ERRORS,
    payload: errors,
  };
};

export const setSubmitStatus = (isSubmit) => {
  return {
    type: SET_SUBMIT_STATUS,
    payload: isSubmit,
  };
};
