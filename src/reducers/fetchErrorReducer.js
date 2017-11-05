import { FETCH_ERROR } from '../constants/actionTypes';

const fetchErrorReducer = (state = false, action) => {
  switch (action.type) {
    case FETCH_ERROR:
      return action.payload;
    default:
      return state;
  }
};

export default fetchErrorReducer;
