const deepComparison = () => {
  // Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

  const deepEqual = (obj1, obj2, isEqual = false) => {
    
    // Check if both values are objects
    if (typeof obj1 === 'object' &&  typeof obj2 === 'object'){
      
      // Get the key and store it in a variable
      obj1Keys = Object.keys(obj1);
      obj2Keys = Object.keys(obj2);

      // Check if the keys has the same length
      if(obj1Keys.length === obj2Keys.length) {
        
        for(let key of obj1Keys){

          // Check if the key names are the same
          if(String(obj1[key]) === String(obj2[key])){
            return true;
          } else {
            return false;
          }
        }
      } else {
        return false;
      }
    } else {
      // Check if the values are the same
      if (obj1 == obj2) {
        return true;
      } else {
        return false;
      }
    }
  }

  let obj = {here: {is: "an"}, object: 2};
  console.log(deepEqual(obj, obj));
  console.log(deepEqual(obj, {here: 1, object: 2}));
  console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
}

deepComparison();