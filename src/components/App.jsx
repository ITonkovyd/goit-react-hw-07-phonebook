import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import {
  getContacts,
  getError,
  getFilter,
  getLoadingStatus,
} from 'redux/selectors';
import { Container } from './App.styled';
import ContactList from './ContactList';
import ContactsForm from './ContactsForm';
import Filter from './Filter';
import Loader from './Loader/Loader';

export function App() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoadingStatus);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  function handleFilter() {
    if (contacts.length > 0) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return contacts;
    }
  }

  return (
    <Container>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <>
          <h1>Phonebook</h1>
          <ContactsForm />
          {handleFilter().length > 0 ? (
            <h2>Contacts: {handleFilter().length}</h2>
          ) : (
            <h2>Contacts</h2>
          )}

          {contacts.length === 0 && !isLoading ? (
            <p>
              No contacts yet. <br /> You`re alone :c
            </p>
          ) : (
            <>
              {isLoading ? (
                <Loader />
              ) : (
                <>
                  <Filter />
                  {filter.trim() !== '' && handleFilter().length === 0 ? (
                    <p>You don`t have contacts with this name.</p>
                  ) : (
                    <ContactList contacts={handleFilter()} />
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </Container>
  );
}
