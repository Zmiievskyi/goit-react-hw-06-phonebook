import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/actions';
import { Filter } from '../Filter/Filter';
import { Box } from '../Common/Common.styled';
import { getSearchName, getContacts } from 'redux/selector';

export const Contacts = () => {

  const contactsList = useSelector(getContacts);
  const searchName = useSelector(getSearchName);

  const filtredList = contactsList.filter(contact =>
    contact.name.toLowerCase().includes(searchName)
  );
  
  const dispatch = useDispatch();

  return (
    <Box border="1px solid">
      <Filter />
      <ul>
        {filtredList.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <Box display="flex" justifyContent="space-between">
                {name}:<span>{number}</span>
                <button onClick={() => dispatch(deleteContact(id))}>
                  Delete
                </button>
              </Box>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};
