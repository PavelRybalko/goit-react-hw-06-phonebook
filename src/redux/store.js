import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducers from './contacts/contacts-reducer';

const store = createStore(contactsReducers, composeWithDevTools());

export default store;
