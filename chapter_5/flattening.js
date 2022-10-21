const flattening = () => {

  let arrays = [[1, 2, 3], [4, 5], [6]];
  
  const flattenArray = arrays.reduce((a, b) => a.concat(b));

  console.log(flattenArray);
}

flattening();