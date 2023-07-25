// actions/formActions.js
export const updateName = (name) => ({
    type: 'UPDATE_NAME',
    payload: name,
  });
  
  export const updateEmail = (email) => ({
    type: 'UPDATE_EMAIL',
    payload: email,
  });
  
  export const updatePassword = (password) => ({
    type: 'UPDATE_PASSWORD',
    payload: password,
  });
  
  export const setErrors = (errors) => ({
    type: 'SET_ERRORS',
    payload: errors,
  });
  
  export const setSubmit = (isSubmit) => ({
    type: 'SET_SUBMIT',
    payload: isSubmit,
  });
  
  export const clearForm = () => ({
    type: 'CLEAR_FORM',
  });
  