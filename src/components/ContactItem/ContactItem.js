import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../../redux/contacts/contacts-actions';
import s from './ContactItem.module.css';

const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <li className={s.ContactList__item}>
        <p className={s.ContactList__text}>
          <span>{name}</span> : <span>{number}</span>
        </p>
        <button
          type="button"
          onClick={() => dispatch(actions.deleteContact(id))}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
