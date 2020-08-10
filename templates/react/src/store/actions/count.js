export const INCREMENT = 'INCREMENT';

export function add() {
  return { type: INCREMENT };
}

export function dec() {
  return { type: 'DECREMENT' };
}

export function asyncDec() {
  return (dispatch) => new Promise((resolve) => {
    setTimeout(() => {
      dispatch(dec());
      resolve();
    }, 2000);
  });
}
