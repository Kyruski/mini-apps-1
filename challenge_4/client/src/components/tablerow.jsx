import React from 'react';
import TableColumn from './tablecolumn.jsx';

export default (props) => {
  let columnArray = [0,1,2,3,4,5,6];
  let idValue = `row${props.rowNumber}`;

  return (
    <tr id={idValue}>
      {columnArray.map( (item) => (<TableColumn key={'row' + String(props.rowNumber) + 'column' + String(item)} columnNumber={item} />) )}
    </tr>
  );
}