import { FETCH_VEHICLES } from '../constants/actionTypes';

export default function fetchVehicles(data) {
  return {
    type: FETCH_VEHICLES,
    payload: data,
  };
}
