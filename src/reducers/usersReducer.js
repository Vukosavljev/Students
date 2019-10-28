import { FETCH_USERS, FETCH_STUDENTS } from '../actions/Types';

const initialState = {
  users: [],
  user: {},
  students: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case FETCH_STUDENTS:
      return {
        ...state,
        students: action.payload,
      };
    default:
      return state
  }
}