import { FETCH_USERS } from './Types';

export const fetchUsers = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({
      type: FETCH_USERS,
      payload: data,
    }));
}