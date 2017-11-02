import React from 'react';
import { createMockStore } from 'redux-test-utils';

import shallowWithStore from './shallowWithStore';

import testData from './testData';
import { ContentComponent } from '../containers/Content';

describe('Content', () => {
  const component = <ContentComponent data={testData} />;
  const testState = { test: {} };
  const store = createMockStore(testState);
  const sComponent = shallowWithStore(component, store);
  it('should render successfully if string is not provided by store', () => {
    expect(typeof sComponent).toBe('object');
  });
});
