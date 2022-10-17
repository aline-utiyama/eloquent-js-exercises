const aList = () => {
  //Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.
  const arrayToList = (array) => {
    let list = null;
    
    for (var i = array.length - 1; i >= 0; i--)
      list = {
        value: array[i],
        rest: list
      };

    return list;
  }

  //console.log(JSON.stringify(arrayToList([1,2,3,7])));

  //Also write a listToArray function that produces an array from a list. 
  const listToArray = (object) => {
    let array = [];

    const getValue = (object) => {
      if (object.rest === null) {
        array.push(object.value);
      } else {
        array.push(object.value);
        return getValue(object.rest);
      }
    }

    getValue(object);
    return array;
  }

  //console.log(listToArray(arrayToList([10, 20, 30])));

  //add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list
  const prepend = (value, func = null) => {
    list = {
      value: value,
      rest: func
    };

    return list;
  }

  //console.log(prepend(10, prepend(20, prepend(30, null))));

  //and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.
  const nth = (obj, index) => {
    let array = listToArray(obj);
    return array[index];
  }

  //console.log(arrayToList([10, 20, 30]));
  console.log(nth(arrayToList([10, 20, 30]), 4));
}

aList();