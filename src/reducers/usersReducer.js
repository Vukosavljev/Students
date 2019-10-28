import { FETCH_USERS } from '../actions/Types';

const initialState = {
  users: [],
  user: {},
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      const a = {
        ...state,
        users: action.payload,
      }
      return a;
    default:
      return state
  }
}