import { FILTER_OPTIONS } from '../constants/actionTypes';

const initialState = {
  colors: undefined,
  type: undefined,
  brand: undefined,
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_OPTIONS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;
