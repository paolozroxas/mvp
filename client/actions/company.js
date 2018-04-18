var company = (company) => {
  return {
    type: 'CHANGE_COMPANY',
    company: company
  };
};

var companyIsError = (isError) => {
  return {
    type: 'COMPANY_HAS_ERRORED',
    isError: isError
  };
};

var companyIsLoading = (isLoading) => {
  return {
    type: 'COMPANY_IS_LOADING',
    isLoading: isLoading
  };
};

export { company, companyIsError, companyIsLoading };
