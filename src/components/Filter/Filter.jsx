import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/slices/contactsSlice';
import { FilterWrapper, Input, P } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <FilterWrapper>
      <label htmlFor="filter">
        <P>Find contact by name</P>
        <Input
          type="text"
          name="filter"
          // ! До диспатча додати операцію фільтрування контактів (попередньо створивши її ----->   e.target.value.toLowerCase())
          onChange={e => dispatch(filterContacts(e.target.value.toLowerCase()))}
        />
      </label>
    </FilterWrapper>
  );
}
