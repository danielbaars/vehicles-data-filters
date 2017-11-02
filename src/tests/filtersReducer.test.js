import { FILTER_OPTIONS } from '../constants/actionTypes';

import filtersReducer from '../reducers/filtersReducer';

const initialState = {
  colors: undefined,
  type: undefined,
  brand: undefined,
};

const testState = {
  colors: undefined,
  type: 'Batmobile',
  brand: undefined,
};

describe('filtersReducer', () => {
  it('returns proper initial state', () => {
    expect(filtersReducer(undefined, {})).toEqual(initialState);
  });
  it('changes the value in one piece of state', () => {
    expect(filtersReducer(testState, {
      type: FILTER_OPTIONS,
      payload: { colors: 'yellow' },
    })).toEqual({
      colors: 'yellow',
      type: 'Batmobile',
      brand: undefined,
    });
  });
  it('returns same state for unknown action', () => {
    expect(filtersReducer(
      testState,
      { type: 'UNKNOWN_ACTION' },
    )).toEqual(testState);
  });
});
