import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import kemejaSlice from '../features/kemeja/kemejaSlice';
import kaosSlice from '../features/kaos/kaosSlice';
import celanaSlice from '../features/celana/celanaSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    kemeja: kemejaSlice,
    kaos: kaosSlice,
    celana: celanaSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
