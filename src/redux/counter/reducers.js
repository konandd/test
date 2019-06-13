import { INCREASE, DECREASE } from './actions';

const initialState = {
  value: 2,
};

function countReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return { ...state, value: state.value + action.payload };
    case DECREASE:
      return { ...state, value: state.value - action.payload / 2 };
    default:
      return state;
  }
}

export default countReducer;
