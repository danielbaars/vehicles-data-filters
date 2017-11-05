import { FETCH_VEHICLES } from '../constants/actionTypes';

const dataReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_VEHICLES:
      return action.payload;
    default:
      return state;
  }
};

export default dataReducer;
