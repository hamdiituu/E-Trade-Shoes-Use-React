import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from "./CombineReducer";

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware
  )
);

export default store;