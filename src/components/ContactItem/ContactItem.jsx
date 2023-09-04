import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Button, Li, Span } from './ContactItem.styled';

export default function ContactItem({ id, name, phone }) {
  const dispatch = useDispatch();

  return (
    <Li>
      <Span>
        {' '}
        &bull; {name}: <br /> {phone}
      </Span>

      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </Li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
