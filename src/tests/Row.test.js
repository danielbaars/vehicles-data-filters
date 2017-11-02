import React from 'react';
import renderer from 'react-test-renderer';

import Row from '../components/Row';

describe('Row', () => {
  const component = <Row extraClasses='class-name'><div>Some Child</div></Row>;
  it('renders and matches our snapshot', () => {
    const sComponent = renderer.create(component);
    const tree = sComponent.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
