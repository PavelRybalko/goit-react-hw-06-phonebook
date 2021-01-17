import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-actions';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

// const INITIAL_STATE = { name: "", number: "" };

function ContactForm({ contacts, onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`Тип поля name - ${name} не обрабатывается!`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isValidatedForm = validateForm();
    if (!isValidatedForm) return;
    onSubmit(name, number);

    setName('');
    setNumber('');
  };

  const validateForm = () => {
    if (!name || !number) {
      alert('Some fields are empty! Please write something');
      return;
    }

    const isExistContact = !!contacts.find(contact => contact.name === name);
    isExistContact && alert('Contact is already exist!');

    return !isExistContact;
  };

  return (
    <>
      <h2 className={s.title}>Phonebook</h2>
      <form className={s.ContactForm} onSubmit={handleSubmit}>
        <label>
          Name
          <input
            autoComplete="off"
            className={s.input}
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label>
          Number
          <input
            autoComplete="off"
            className={s.input}
            name="number"
            type="tel"
            value={number}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    </>
  );
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => dispatch(addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
