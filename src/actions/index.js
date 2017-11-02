import * as types from '../constants/actionTypes';

export default function filterOptions(key, value) {
  return {
    type: types.FILTER_OPTIONS,
    payload: { [key]: value },
  };
}
