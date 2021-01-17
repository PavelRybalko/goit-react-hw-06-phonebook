import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootreducer from './contacts/contacts-reducer';

const store = createStore(
  combineReducers({
    contacts: rootreducer,
  }),
  composeWithDevTools(),
);

export default store;
