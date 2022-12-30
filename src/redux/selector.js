// import { useSelector } from 'react-redux';

// export const contactsList = useSelector(state => state.contacts);

// export const searchName = useSelector(state => state.filter);
export const getContacts = state => state.contacts;
export const getSearchName = state => state.filter.filter;