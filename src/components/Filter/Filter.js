import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import s from './Filter.module.css';

const Filter = ({ filter, onChange }) => (
  <label className={s.label}>
    Find contacts by name:
    <input className={s.input} type="text" value={filter} onChange={onChange} />
  </label>
);

const mapStateToProps = state => ({ filter: state.filter });
const mapDispatchToProps = dispatch => ({
  onChange: filter => dispatch(changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
