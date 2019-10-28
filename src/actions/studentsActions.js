import { FETCH_STUDENTS } from '../actions/Types';
import uuid from 'uuid';

export const fetchStudents = () => dispatch => {
  const dis = {
    type: FETCH_STUDENTS,
    payload: [
      {
        name: 'Jerome',
        id: uuid(),
        age: 15,
        averageGrade: 4.5
      },
      {
        id: uuid(),
        name: 'Monica',
        age: 15,
        averageGrade: 4.8
      },
      {
        id: uuid(),
        name: 'Sam',
        age: 15,
        averageGrade: 5
      }
    ]
  }
  return dispatch(dis)
}
