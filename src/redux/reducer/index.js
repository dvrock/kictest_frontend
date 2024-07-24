import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import RootReducer from './RootReducer';
export const rootReducer = combineReducers({
  AuthReducer,
});
