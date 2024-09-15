import React from 'react'

function TenthStudent(props) {
  return ( 
     <div>
        <p>{props.firstName}</p>
        <p>{props.lastName}</p>
        <p>{props.engMarks}</p>
        <p>{props.hinMarks}</p>
        <p>{props.telMarks}</p>
        <p>{props.sciMarks}</p>
        <p>{props.socMarks}</p>
        <p>{props.mathsMarks}</p>

    </div>
  );
}

export default TenthStudent;