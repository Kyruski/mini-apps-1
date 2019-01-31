import React from 'react';

export default (props) => {
  let idValue = `input${props.inputNumber}`;
  return (
    <td id={idValue}>
    {idValue}
    </td>
  );
}