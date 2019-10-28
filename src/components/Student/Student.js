import React from 'react';
import './Student.scss';

export default function Student(props) {
  const { name, age, averageGrade } = props.details;

  return (
    <div className="student-contrainer">
      <h4>{name}</h4>
      <p>Age: {age}</p>
      <p>Average grade: {averageGrade} </p>
    </div>
  )
}