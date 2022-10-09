const loopingATriangle = () => {
  let sharp = "#"

  while(sharp.length < 8)
  {
    console.log(sharp);
    sharp = sharp + "#"
  }
}

loopingATriangle();