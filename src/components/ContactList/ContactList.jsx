import ContactItem from 'components/ContactItem';
import PropTypes from 'prop-types';
import { Ul } from './ContactList.styled';

export default function ContactList({ contacts }) {
  if (!Array.isArray(contacts)) {
    return <p>No contacts to display.</p>;
  }

  return (
    <Ul>
      {contacts.map(contact => {
        const { id, name, phone } = contact;
        return <ContactItem key={id} id={id} name={name} phone={phone} />;
      })}
    </Ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
};
