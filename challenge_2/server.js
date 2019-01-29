//takes in JSON
//returns CSV
const fs = require('fs');

function createKeyArray (obj) {
  const keyArray = [];
  for (let key of obj) {
    keyArray.push(key);
  }
  return keyArray;
}

function createValueArrays (obj) {
  const valuesArray = [];
  const makeRowArray = (location) => { //this function makes an array of values for a row (obj) and pushes it into a return array
    let rowArray = [];
    for (let key of obj) { //iterates over the keys and adds values to the individual row array;
      if(Array.isArray(obj[key])) { //if the value is an array, we're at the end of the object, push the item and then check if there are children to run the function on
        valuesArray.push(rowArray);
        rowArray = [];
        if (obj[key].length) {
          for (let item of obj[key]) {
            makeRowArray(item);
          }
        }
      } else {
        rowArray.push(obj[key]);
      }
    }
  }
  makeRowArray(obj);
  return valuesArray;
}

function writeCSV (array) {
  let csvArray = array.join(',').replace('"', '');
  fs.appendFileSync('csv/output.csv', csvArray)
}

function main (obj) {
  const keysArray = createKeyArray(obj);
  const valuesArray = createValueArrays(obj);
  writeCSV(keysArray);
  for (let item of valuesArray) {
    writeCSV(item);
  }
  //return file?
}