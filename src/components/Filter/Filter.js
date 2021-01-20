import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import s from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label className={s.label}>
      Find contacts by name:
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={event =>
          dispatch(actions.changeFilter(event.currentTarget.value))
        }
      />
    </label>
  );
};

export default Filter;
