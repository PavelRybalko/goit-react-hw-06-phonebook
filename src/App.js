import React from 'react';
import { connect } from 'react-redux';
import Container from './components/Container';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';

function App({ contacts }) {
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Container>
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
}

//Пропсы которые будут приходить в компонент
const mapStateToProps = state => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
});

export default connect(mapStateToProps, null)(App);
