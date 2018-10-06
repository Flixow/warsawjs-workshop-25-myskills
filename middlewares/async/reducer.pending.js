export const SET_PENDING = 'SET_PENDING';
export const DELETE_PENDING = 'DELETE_PENDING';

export const setPending = name => ({
  type: SET_PENDING,
  name,
});
export const deletePending = name => ({
  type: DELETE_PENDING,
  name,
});

export default function pendingReducer(state = [], action) {
  switch (action.type) {
    case SET_PENDING:
      const newPending = [...state, action.name]
        .filter((value, idx, arr) => arr.indexOf(value) === idx);
      return newPending;
    case DELETE_PENDING:
      return state.filter(item => item !== action.name);
    default:
      return state;
  }
}
