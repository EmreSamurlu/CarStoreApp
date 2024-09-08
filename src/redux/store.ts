import {useDispatch, useSelector} from 'react-redux';

import {combineReducers, configureStore} from '@reduxjs/toolkit';
import carStoreReducer from './features/carstore/slicer';
import cartReducer from './features/cart/slicer';
import productReducer from './features/product/slicer';
import favoritesReducer from './features/favorites/slicer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FLUSH,
  PERSIST,
  persistReducer,
  persistStore,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['products, favorites'],
};

const rootReducer = combineReducers({
  carStore: carStoreReducer,
  cart: persistReducer(persistConfig, cartReducer),
  product: productReducer,
  favorites: persistReducer(persistConfig, favoritesReducer),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PERSIST, REGISTER],
      },
    }),
});

const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export {store, persistor};
