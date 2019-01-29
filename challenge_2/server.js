//takes in JSON
//returns CSV
const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');

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

function writeCSV (arrayToConvert, returnArray) {
  let csvArray = arrayToConvert.join(',').replace('"', '');
  returnArray.push(csvArray);
  return returnArray;
}

function main (obj) {
  fileCounter++;
  const keysArray = createKeyArray(obj);
  const valuesArray = createValueArrays(obj);
  let finalArray = writeCSV(keysArray, []);
  for (let item of valuesArray) {
    finalArray = (writeCSV(item, finalArray));
  }
  //return file?
}

app.use(express.static( __dirname + '/client'))
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.sendFile(path.join(pathName, 'client', 'index.html'));
})

app.post('/', (req, res) => {
  console.log(req.body.payload);
})
app.listen(3000, () => {console.log('Listening to port 3000')});