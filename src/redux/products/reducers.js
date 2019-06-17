import { GET_FIRMS, GET_LAPTOPS } from './actions';

const initialState = {
  firms: '',
  laptops: '',
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FIRMS:
      return { ...state, firms: action.payload };

    case GET_LAPTOPS:
      return { ...state, laptops: action.payload };

    default:
      return state;
  }
}

export default productsReducer;
