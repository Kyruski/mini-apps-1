//takes in JSON
//returns CSV
const express = require('express');
const app = express();
const path = require('path');

function createKeyArray (obj) {
  const keyArray = [];
  for (let key in obj) {
    if (!Array.isArray(obj[key])) {
      keyArray.push(key);
    }
  }
  return keyArray;
}

function createValueArrays (obj) {
  const valuesArray = [];
  const makeRowArray = (location) => { //this function makes an array of values for a row (obj) and pushes it into a return array
    let rowArray = [];
    for (let key in location) { //iterates over the keys and adds values to the individual row array;\
      if(Array.isArray(location[key])) { //if the value is an array, we're at the end of the object, push the item and then check if there are children to run the function on
        valuesArray.push(rowArray);
        rowArray = [];
        if (location[key].length) {
          for (let item of location[key]) {
            makeRowArray(item);
          }
        }
      } else {
        rowArray.push(location[key]);
      }
    }
  }
  makeRowArray(obj);
  console.log('valuearray', valuesArray);
  return valuesArray;
}

function writeCSV (arrayToConvert, returnArray) {
  let csvArray = arrayToConvert.join(',').replace('"', '');
  returnArray.push(csvArray);
  return returnArray;
}

function createCSV (obj) {
  console.log('createCSV obj1', obj);
  const keysArray = createKeyArray(obj);
  const valuesArray = createValueArrays(obj);
  let finalArray = writeCSV(keysArray, []);
  for (let item of valuesArray) {
    finalArray = (writeCSV(item, finalArray));
  }
  return finalArray;
}
app.engine('pug', require('pug').__express)
app.set('views', __dirname);
app.set('view engine', 'pug');
app.use(express.static('client'));
app.use(express.json());
app.use(express.urlencoded({extend: true}));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(pathName, 'client', 'index.html'));
// })

app.post('/', (req, res) => {
  let jsonObject;
  try {
    jsonObject = JSON.parse(req.body.payload);
    // res.json({data: csvArray});
  } catch (e) {
    console.log("not JSON");
    res.end('Not valid JSON');
  }
  const csvArray = createCSV(jsonObject);
  // res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
  res.render('index', {csv: csvArray});
  
})
app.listen(3000, () => {console.log('Listening to port 3000')});