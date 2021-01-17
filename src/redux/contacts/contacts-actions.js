import shortid from 'shortid';
import actionTypes from './contacts-types';

export const addContact = (name, number) => {
  return {
    type: actionTypes.ADD,
    payload: { name, number, id: shortid.generate() },
  };
};

export const deleteContact = contactId => ({
  type: actionTypes.DELETE,
  payload: contactId,
});

export const changeFilter = value => ({
  type: actionTypes.CHANGE_FILTER,
  payload: value,
});
