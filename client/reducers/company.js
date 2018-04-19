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

var companyIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'COMPANY_IS_LOADING':
      return action.companyIsLoading;

    default:
      return state;
  }
}

export default combineReducers({
  companyIsLoading,
  companyIsError,
  company
});
