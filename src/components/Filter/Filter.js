import { useDispatch } from 'react-redux';
import { Label } from 'components/Common/Common.styled';
import { setFilter } from 'redux/actions';

export const Filter = () => {

  const dispatch = useDispatch()

  const handleFilter = evt => {
    
    const searchName = evt.target.value.toLowerCase();
    // console.log(searchName);
    dispatch(setFilter(searchName));
  };

  return (
    <Label>
      Find contacts by name
      <input autoComplete="off" type="text" onChange={handleFilter} />
    </Label>
  );
};
