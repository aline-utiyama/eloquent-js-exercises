const SCRIPTS = require("./scripts");

const dominantWritingDirection = () => {
  
  function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
  }

  function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
        counts.push({name, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }

  function dominantDirection(text) {
    let counted = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({name}) => name != "none");
    
    let higherCount = { name: '', count: 0 };
    for(let element of counted) {
      if (element.count > higherCount.count) {
        higherCount = element;
      }
    }
    
    return higherCount.name;
  }

  console.log(dominantDirection("Hello!"));
  console.log(dominantDirection("Hey, مساء الخير"));
}

dominantWritingDirection();