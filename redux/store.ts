import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import authReducer from './reducers/authReducer';
import productReducer from './reducers/productReducer';

export const createStore = () => {
  const store = configureStore({
    // redux devtools object name
    // auth: {}, product: {}
    reducer: { auth: authReducer, product: productReducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
  return store;
};

export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<typeof createStore>; // RootState 타입
export type AppDispatch = AppStore['dispatch']; // dispatch 타입
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>; // Thunk 를 위한 타입

export const wrapper = createWrapper(createStore);
