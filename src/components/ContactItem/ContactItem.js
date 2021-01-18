import React from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import s from './ContactItem.module.css';

const ContactItem = ({ contact: { id, name, number }, onDeleteContact }) => (
  <>
    <li className={s.ContactList__item}>
      <p className={s.ContactList__text}>
        <span>{name}</span> : <span>{number}</span>
      </p>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  </>
);

const mapDispatchToProps = dispatch => ({
  onDeleteContact: contactId => dispatch(actions.deleteContact(contactId)),
});

export default connect(null, mapDispatchToProps)(ContactItem);
