//takes in JSON
//returns CSV


function createKeyArray (obj) {
  const keyArray = [];
  for (let key of obj) {
    keyArray.push(key);
  }
  return keyArray;
}

