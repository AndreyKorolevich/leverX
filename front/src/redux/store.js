import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import requestFormReducer from './reducers/requestForm-reducer';
import requestReducer from './reducers/requests-reducer';
import modalReducer from './reducers/modal-reducer';

const reducers = combineReducers({
  requestForm: requestFormReducer,
  requests: requestReducer,
  modals: modalReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;
