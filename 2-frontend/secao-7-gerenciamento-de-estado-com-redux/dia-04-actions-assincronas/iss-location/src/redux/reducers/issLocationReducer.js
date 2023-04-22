import {
  REQUEST_ISS_LOCATION_ERROR,
  REQUEST_ISS_LOCATION_LOADING,
  REQUEST_ISS_LOCATION_SUCCESS,
} from '../actions';

const INITIAL_STATE = {
  latitude: 10,
  longitude: 10,
  isLoading: false,
};

const issLocation = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case REQUEST_ISS_LOCATION_LOADING:
    return {
      ...state,
      isLoading: true,
    };

  case REQUEST_ISS_LOCATION_SUCCESS:
    return {
      ...state,
      latitude: payload.latitude,
      longitude: payload.longitude,
      isLoading: false,
    };

  case REQUEST_ISS_LOCATION_ERROR:
    return {
      ...state,
      isLoading: false,
    };

  default:
    return state;
  }
};

export default issLocation;
