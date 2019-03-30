import { SET_FLATS } from '../actions';

export default function(state, action) {
  if (state === undefined) {
    return [];
  }

  if (action.type === SET_FLATS) {
    return action.payload;
  }
  return state;
}
