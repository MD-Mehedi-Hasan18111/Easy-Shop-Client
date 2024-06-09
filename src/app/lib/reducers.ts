import storageSession from 'redux-persist/lib/storage/session';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './features/authSlice';

const reducers = combineReducers({
  Auth: authSlice
});

const persistConfig = {
  key: 'shop-store',
  storage: storageSession,
  blacklist: []
};

const persistedReducers = persistReducer(persistConfig, reducers);

export default persistedReducers;
