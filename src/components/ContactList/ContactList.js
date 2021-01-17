import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import ContactItem from '../ContactItem';

const ContactList = ({ contacts, filter }) => {
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <>
      <h2 className={s.title}>Contacts</h2>
      <ul className={s.ContactList}>
        {getVisibleContacts(contacts).map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = state => ({
  filter: state.filter,
  contacts: state.contacts,
});

export default connect(mapStateToProps, null)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};
