import {useDispatch, useSelector} from 'react-redux';

import {combineReducers, configureStore} from '@reduxjs/toolkit';
import carStoreReducer from './features/carstore/slicer';

const rootReducer = combineReducers({
  carStore: carStoreReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;
