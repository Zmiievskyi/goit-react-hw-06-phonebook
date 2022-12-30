import { createReducer } from '@reduxjs/toolkit';
import { addContact, setFilter, deleteContact } from './actions';


const initialStateContact = [
  { id: 0, name: 'Anton', number: '0509118071' },
  { id: 1, name: 'Mark', number: '0675450660' },
];

export const contactReducer = createReducer(initialStateContact, {
  [addContact]: (state, action) => {
    const checkSimilar = state.some(
      item => item.name.toLowerCase() === action.payload.name.toLowerCase()
    );
    if (!checkSimilar) {
      state.push(action.payload);
    } else {
      return alert(`${action.payload.name} is already in contacts`);
    }
  },
  [deleteContact]: (state, action) => {
    console.log(action);
    return state.filter(contact=>contact.id!==action.payload)
  },
});

const initialStateFilter = {filter: ''};

export const filterReducer = createReducer(initialStateFilter, {
  [setFilter]: (state, action) => {
    state.filter = action.payload;
  },
});
