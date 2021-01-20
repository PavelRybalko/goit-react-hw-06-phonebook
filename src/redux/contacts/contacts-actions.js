import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('app/addContact', (name, number) => ({
  payload: { id: shortid.generate(), name, number },
}));

const deleteContact = createAction('app/deleteContact');
const changeFilter = createAction('app/changeFilter');

const exportModule = { addContact, deleteContact, changeFilter };

export default exportModule;
