import {rootReducer} from '../redux/reducer/index';
import {configureStore} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['AuthReducer'],
  version:1,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore(
{reducer:persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
}
);
export const persistor = persistStore(store);
export default store