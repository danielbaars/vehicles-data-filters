import React from 'react';
import { shallow } from 'enzyme';

import { AppComponent } from '../containers/App';

describe('App', () => {
  const mockFetchData = jest.fn();
  it('renders without crashing', () => {
    shallow(<AppComponent fetchData={mockFetchData} error={false} />);
  });
});
