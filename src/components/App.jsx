import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import { Container } from './App.styled';
import ContactList from './ContactList';
import ContactsForm from './ContactsForm';
import Filter from './Filter';

export function App() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactsForm />

      <h2>Contacts</h2>

      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>
          No contacts yet. <br /> It's time to create new contacts!
        </p>
      )}
    </Container>
  );
}
