import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import fetchVehicles from './actions/fetchVehicles';
import fetchError from './actions/fetchError';

import trafficMeister from './data.js';
import { alphabetizeArrayOfObjects } from './utility';
import App from './containers/App.js';

const target = document.getElementById('root');

const fetchTrafficMeisterData = () => {
  return trafficMeister.fetchData((err, data) => {
    if (err) {
      store.dispatch(fetchError(true));
    } else {
      const sortedData = alphabetizeArrayOfObjects(data, 'brand');
      store.dispatch(fetchVehicles(sortedData));
      store.dispatch(fetchError(false));
    }
  });
};

fetchTrafficMeisterData();

render(
  <Provider store={store}>
    <App fetchData={fetchTrafficMeisterData} />
  </Provider>,
  target,
);
