import { combineReducers } from 'redux';

var company = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_COMPANY':
      return action.company;

    default:
      return state;
  }
};

var companyIsError = (state = false, action) => {
  switch (action.type) {
    case 'CHANGE_HAS_ERRORED':
      return action.isError;

    default:
      return state;
  }
}

var companyIsLoading = (state = true, action) => {
  switch (action.type) {
    case 'COMPANY_IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
}

export default combineReducers({
  companyIsLoading,
  companyIsError,
  company
});
