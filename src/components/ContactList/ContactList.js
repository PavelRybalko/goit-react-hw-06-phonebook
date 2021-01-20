import React from 'react';
import { useSelector } from 'react-redux';
import s from './ContactList.module.css';
import ContactItem from '../ContactItem';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);

  return (
    <>
      <h2 className={s.title}>Contacts</h2>
      <ul className={s.ContactList}>
        {contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
