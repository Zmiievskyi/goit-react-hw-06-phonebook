import { createAction, nanoid } from '@reduxjs/toolkit';


export const addContact = createAction('phonebook/addContact', contact => {
  return {
    payload: {
      ...contact,
      id: nanoid(),
    },
  };
});

export const deleteContact = createAction('contacts/deleteContact');

export const setFilter = createAction('filters/filtredContacts');