import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all, call } from 'redux-saga/effects';
import { duck, saga } from '../services/dashboard';

export const rootReducer = combineReducers({
  dashboard: duck.reducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

function* rootSaga() {
  yield all([
    call(saga),
  ]);
}

sagaMiddleware.run(rootSaga);

export default store;
