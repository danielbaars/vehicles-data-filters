import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import NoContent from '../components/NoContent';

describe('NoContent', () => {
  const mockFetchData = jest.fn();
  const component = <NoContent fetchData={mockFetchData} />;
  const sComponent = shallow(component);
  it('renders and matches our snapshot', () => {
    const rComponent = renderer.create(component);
    const tree = rComponent.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('calls the passed in fetchData function when the try again button is clicked', () => {
    sComponent.find('.no-content__button').simulate('click');
    expect(mockFetchData).toBeCalled();
  });
});
