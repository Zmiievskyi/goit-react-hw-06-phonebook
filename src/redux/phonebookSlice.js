import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';


export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [
      { id: 0, name: 'Рустам Асланов', number: '911' },
      { id: 1, name: 'Репета Олександр', number: '111' },
    ],
    filter: '',
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        const checkSimilar = state.contacts.some(
          item => item.name.toLowerCase() === action.payload.name.toLowerCase()
        );
        if (!checkSimilar) {
          state.contacts.push(action.payload);
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
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;
