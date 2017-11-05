import { FILTER_OPTIONS } from '../constants/actionTypes';

export default function filterOptions(key, value) {
  return {
    type: FILTER_OPTIONS,
    payload: { [key]: value },
  };
}
