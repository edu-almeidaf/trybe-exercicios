import {
  REQUEST_STARTED,
  REQUEST_SUCCESSFUL,
  REQUEST_FAILED
} from '../actions';

const initialState = {
  isFetching: false,
  imageURL: '',
  errorMessage: '',
};

const dogReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isFetching: true,
        errorMessage: '',
        imageURL: '',
      };
    
    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        isFetching: false,
        imageURL: payload,
        errorMessage: '',       
      };

    case REQUEST_FAILED:
      return {
        ...state,
        isFetching: false,
        imageURL: '',
        errorMessage: payload,       
      };

    default:
      return state;
  }
}

export default dogReducer;