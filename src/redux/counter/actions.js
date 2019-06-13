export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

export function increase(value) {
  return (dispatch) => {
    dispatch({
      type: INCREASE,
      payload: value,
    });
  };
}

export function decrease(value) {
  return (dispatch) => {
    dispatch({
      type: DECREASE,
      payload: value,
    });
  };
}
