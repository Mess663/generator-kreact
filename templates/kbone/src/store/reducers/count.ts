enum ActionType {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT'
}

interface ActionObj {
  type: ActionType,
}

export default function count(state = 0, action: ActionObj): number {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state - 1;
  default:
    return state;
  }
}
