import React from 'react';

export default (props) => {
  let idValue = `column${props.columnNumber}`;
  return (
    <td id={idValue}>
    {/* {idValue} */}
    </td>
  );
}