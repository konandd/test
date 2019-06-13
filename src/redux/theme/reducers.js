import { CHECK_THEME, GET_THEME } from './actions';

const initialState = {
  theme: true,
};

function themeReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_THEME:
      return { ...state, theme: action.payload };

    case GET_THEME:
      return { ...state, theme: action.payload };

    default:
      return state;
  }
}

export default themeReducer;
