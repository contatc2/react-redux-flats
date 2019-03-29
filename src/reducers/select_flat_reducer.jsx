export default function(action, state) {
  if (state === undefined) {
    return [];
  }

  if (action.type === 'SELECT_FLAT') {
    return action.payload;
  }
  return state;
}
