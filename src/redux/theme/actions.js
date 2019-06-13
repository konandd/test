export const CHECK_THEME = 'CHECK_THEME';
export const GET_THEME = 'GET_THEME';


export function switchTheme(theme) {
  return (dispatch) => {
    localStorage.setItem('theme', JSON.stringify(!theme));
    dispatch({
      type: CHECK_THEME,
      payload: !theme,
    });
  };
}

export function getTheme() {
  return (dispatch) => {
    const currentTheme = localStorage.getItem('theme');
    // eslint-disable-next-line no-console
    console.log(currentTheme);
    dispatch({
      type: GET_THEME,
      payload: JSON.parse(currentTheme),
    });
  };
}
