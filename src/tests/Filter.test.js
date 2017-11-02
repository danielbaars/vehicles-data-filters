import React from 'react';
import renderer from 'react-test-renderer';

import { FilterComponent } from '../containers/Filter';

describe('Filter', () => {
  const keyValue = 'colors';
  const placeholder = 'Select color';
  const options = ['red', 'green', 'blue'];
  const mockFilterOptions = jest.fn();
  const component = <FilterComponent keyValue={keyValue} placeholder={placeholder} options={options} filterOptions={mockFilterOptions} />;
  it('renders and matches our snapshot', () => {
    const rComponent = renderer.create(component);
    const tree = rComponent.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
