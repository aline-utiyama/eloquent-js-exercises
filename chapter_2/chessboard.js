const chessboard = (size) => {
  let string = "";

  const generateString = (even, size) => {
    let count;

    if (even) {
      count = 0;
    } else {
      count = 1;
      size = size + 1;
    }

    while(count < size) {
      if(count % 2 === 0) {
        string = string + " ";
        count++;
      } else {
        string = string + "#";
        count++;
      }
    }

    console.log(string);
    string = "";
  }

  for(let i = 0; i < size; i++){
    let even = i % 2 === 0;
    if (even){
      generateString(even, size);
    } else {
      generateString(even, size);
    }
  }
}

chessboard(8);
