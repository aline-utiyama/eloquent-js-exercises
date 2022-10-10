const beanCounting = () => {

  // const countBs = (str) => {
  //   let upper_b = 0;
  //   for (let i = 0; i < str.length; i++) {
  //     if(str[i] === "B"){
  //       upper_b += 1;
  //     }
  //   }
  //   console.log(upper_b);
  // }

  // countBs("Banana");

  const countChar = (str, char) => {
    let char_ammount = 0;
    
    for (let i = 0; i < str.length; i++) {
      if(str[i] === char){
        char_ammount += 1;
      }
    }

    console.log(char_ammount);
  }

  
  countChar("Banana", "a");
}

beanCounting();