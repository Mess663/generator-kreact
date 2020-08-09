import { ThunkAction } from 'redux-thunk';

export const INCREMENT = 'INCREMENT';
interface initState {
    count: number
}
interface Action {
    type: string
}

export function add(): Action {
  return { type: INCREMENT };
}

export function dec(): Action {
  return { type: 'DECREMENT' };
}

export function asyncDec(): ThunkAction<void, initState, unknown, Action> {
  return (dispatch) => new Promise((resolve) => {
    setTimeout(() => {
      dispatch(dec());
      resolve();
    }, 2000);
  });
}
