import products from '../../components/products';

export const GET_FIRMS = 'GET_FIRMS';
export const GET_LAPTOPS = 'GET_LAPTOPS';

export function getFirms() {
  return (dispatch) => {
    const firms = Object.keys(products);
    dispatch({
      type: GET_FIRMS,
      payload: firms,
    });
  };
}

export function getLaptops() {
  return (dispatch) => {
    const laptops = products;
    // eslint-disable-next-line no-console
    console.log(laptops);
    dispatch({
      type: GET_LAPTOPS,
      payload: laptops,
    });
  };
}
