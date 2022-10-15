const theSumOfARange = () => {

  // const range = (start, end) => {
  //   let array = [start];
    
  //   while( end > array.length) {
  //     array.push(start += 1);
  //   }
  //   return array;
  // }
  // console.log(range(1, 10));

  // Modified 
  // const range = (start, end, step=1) => {
  //   let array = [start];
    
  //   while( end >= array[array.length - 1] + step) {
  //     array.push(start += step);
  //   }
  //   return array;
  // }
  //console.log(range(1, 10,5));

  const range = (start, end, step=1) => {
    let array = [start];

    if (start > end) {
      while( end <= array[array.length - 1] + step) {
        array.push(start += step);
      }
      return array;
    } else {
      while( end >= array[array.length - 1] + step) {
        array.push(start += step);
      }
      return array;
    }
  }

  // Sum of all elements of an array
  const sum = (arr) => {
    console.log(arr);
    let total = 0;

    for(let element of arr) {
      total += element;
    }
    return(total);
  }

  console.log(sum(range(1,10)));
  console.log(range(1, 10, 2));
  console.log(range(5,2, -1));
}

theSumOfARange();