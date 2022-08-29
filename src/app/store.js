import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import todoSlice from './slices/todoSlice';

const logger = createLogger();

export const store = configureStore({
  reducer: {
    todoList: todoSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});
