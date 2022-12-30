import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: [
    { id: 0, name: 'Рустам Асланов', number: '911' },
    { id: 1, name: 'Репета Олександр', number: '111' },
  ],
  reducers: {
    addContact: {
      reducer(state, action) {
        console.log(action);
        const checkSimilar = state.some(
          item => item.name.toLowerCase() === action.payload.name.toLowerCase()
        );
        if (!checkSimilar) {
          state.push(action.payload);
        } else {
          return alert(`${action.payload.name} is already in contacts`);
        }
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;

// const initialStateFilter = { filter: '' };

// export const filterReducer = createReducer(initialStateFilter, {
//   [setFilter]: (state, action) => {
//     state.filter = action.payload;
//   },
// });