import { FETCH_ERROR } from '../constants/actionTypes';

export default function fetchError(value) {
  return {
    type: FETCH_ERROR,
    payload: value,
  };
}
