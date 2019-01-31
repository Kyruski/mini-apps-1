import React from 'react';
import InputSlot from './inputslot.jsx';

export default (props) => {
  let inputArray = [0,1,2,3,4,5,6];

  return (
    <table id="input-table">
      <tbody>
        <tr>
          {inputArray.map( (item) => (<InputSlot key={'input' + String(item)} inputNumber={item} />) )}
        </tr>
      </tbody>
    </table>
  );
}