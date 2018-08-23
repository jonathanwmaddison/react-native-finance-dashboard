export const actionTypes = {
  TRANSACTIONS_GET: 'TRANSACTIONS_GET',
  TRANSACTIONS_RESPONSE: 'TRANSACTIONS_RESPONSE',
  TRANSACTIONS_ERROR: 'TRANSACTIONS_ERROR',
};

const initialState = {
  isFetching: false,
  transactions: null,
  error: false
}

export const actionCreators = {
  getTransactionHistory: (userId) => ({
    type: actionTypes.TRANSACTIONS_GET,
    payload: userId,
  });
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TRANSACTIONS_GET:
      return {
        isFetching: true,
        transactions: null
      };
    case actionTypes.TRANSACTIONS_RESPONSE:
      return {
        isFetching: false,
        transactions: action.payload
      };
    default:
      return {
        isFetching: false,
        error: true
      }
  }
}
