import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import filterOptions from '../actions';
import { capFirstCharInString } from '../utility';

const Option = ({ option }) => {
  return (
    <option value={option}>{capFirstCharInString(option)}</option>
  );
};

export const FilterComponent = (props) => {
  const { keyValue, placeholder, options } = props;
  return [
    <h2 className='filters__title' key={`${keyValue}__title`}>{capFirstCharInString(keyValue)}:</h2>,
    <div className='filters__group input-group' key={`${keyValue}__select`}>
      <select onChange={event => props.filterOptions(keyValue, event.target.value)} name={`select-${keyValue}`} id={`select-${keyValue}`} value={options.length === 1 ? options[0] : (props[keyValue] || '')} className={`input-group-field filters__select filters__select--${keyValue}`}>
        <option value='' disabled>{placeholder}</option>
        {options.map((option) => {
          return (
            <Option option={option} key={`${keyValue}-${option}`} />
          );
        })}
      </select>
      <div className='input-group-button'>
        {props[keyValue]
          ? <button onClick={() => props.filterOptions(keyValue, undefined)} className='button small'>Clear</button>
          : <button className='button small hollow' disabled>Clear</button>
        }
      </div>
    </div>,
  ];
};

const mapStateToProps = (state) => {
  return state.filtersReducer;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ filterOptions }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent);

Option.propTypes = {
  option: PropTypes.string.isRequired,
};

FilterComponent.propTypes = {
  keyValue: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};
