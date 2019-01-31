import React from 'react';
import TableRow from './tablerow.jsx';

export default (props) => {
  let rowArray = [6,5,4,3,2,1,0];

  return (
    <table id="board-table">
      <tbody>
        {rowArray.map( (item) => (<TableRow key={'row' + String(item)} rowNumber={item} />) )}
      </tbody>
    </table>
  );
}