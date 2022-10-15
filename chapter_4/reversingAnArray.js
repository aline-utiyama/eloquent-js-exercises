const reversingAnArray = () => {

  // write two functions, reverseArray and reverseArrayInPlace. 
  //The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. 

  const reverseArray = (arr) => {
    let reversedArray = [];

    for(let element of arr) {
      reversedArray.push(arr[arr.length - 1 - arr.indexOf(element)])
    }
    return reversedArray;
  }

  console.log(reverseArray(["A", "B", "C"]));

  //The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

  const reverseArrayInPlace = (arr) => {
    arrayValue = [];

    for(let element of arr) {
      arrayValue.push(arr[arr.length - 1 - arr.indexOf(element)])
    }
    return arrayValue;
  }

  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
}

reversingAnArray();
