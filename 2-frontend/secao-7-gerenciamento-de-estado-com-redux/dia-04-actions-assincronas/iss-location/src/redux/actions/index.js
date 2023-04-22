import getCurrentISSLocation from '../../services/issAPI';

export const REQUEST_ISS_LOCATION_LOADING = 'REQUEST_ISS_LOCATION_LOADING';
export const REQUEST_ISS_LOCATION_SUCCESS = 'REQUEST_ISS_LOCATION_SUCCESS';
export const REQUEST_ISS_LOCATION_ERROR = 'REQUEST_ISS_LOCATION_ERROR';

const requestISSLocationLoading = () => ({
  type: REQUEST_ISS_LOCATION_LOADING,
});

const requestISSLocationError = () => ({
  type: REQUEST_ISS_LOCATION_ERROR,
});

const requestISSLocationSuccess = (latitude, longitude) => ({
  type: REQUEST_ISS_LOCATION_SUCCESS,
  payload: {
    latitude,
    longitude,
  },
});

export const actionFetchISSLocation = () => {
  console.log('actionFetchISSLocation');
  return async (dispatch) => {
    try {
      dispatch(requestISSLocationLoading());

      const dataApi = await getCurrentISSLocation();
      console.log(dataApi);
      const { iss_Position: issPosition } = dataApi;

      dispatch(
        requestISSLocationSuccess(
          Number(issPosition.latitude),
          Number(issPosition.longitude),
        ),
      );
    } catch (error) {
      dispatch(requestISSLocationError());
    }
  };
};
