import { combineReducers } from 'redux';
import fetchErrorReducer from './fetchErrorReducer';
import dataReducer from './dataReducer';
import filtersReducer from './filtersReducer';

export default combineReducers({
  error: fetchErrorReducer,
  data: dataReducer,
  filtersReducer,
});
