import { call, put, select, takeLatest } from 'redux-saga/effects';
import { getTransactionHistory } from '../api';
import { actionCreators, actionTypes } from './duck';

const fetchTransactionsSaga = function*() {
  try {
    const transactionHistory = yield call(getTransactionHistory);
    console.log('is this happening', transactionHistory)
    yield put(actionCreators.receiveTransactionHistory(transactionHistory));
  } catch (e) {
    console.log(e)
    yield put(actionCreators.errorTransactionHistory());
  }
};

const rootSaga = function*() {
  yield takeLatest(actionTypes.TRANSACTIONS_GET, fetchTransactionsSaga);
};

export default rootSaga;
