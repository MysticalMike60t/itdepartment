import React from 'react'

const Student = ({firstName, lastName,  age, grade}) => {
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{age}</td>
      <td>{grade}</td>
    </tr>
  )
}

export default Student