import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import todoSlice from './slices/todoSlice';
import { todoApi } from '../api/TodoSlice';

const logger = createLogger();

export const store = configureStore({
  reducer: {
    todoList: todoSlice.reducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});
