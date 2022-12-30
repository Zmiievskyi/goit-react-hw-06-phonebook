import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { phonebookReducer } from './phonebookSlice';

export const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
    filter: filterReducer,
  },
});
