import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import { getItems } from '../../redux/contacts/contacts-selectors';
import s from './ContactForm.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getItems);
  const dispatch = useDispatch();

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
    dispatch(actions.addContact(name, number));

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

export default ContactForm;
