import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('app/addContact', text => ({
  payload: { id: shortid.generate(), text },
}));

const deleteContact = createAction('app/deleteContact');
const changeFilter = createAction('app/changeFilter');

const exportModule = { addContact, deleteContact, changeFilter };

export default exportModule;
