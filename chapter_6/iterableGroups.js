const iterableGroups = () => {
  class Group {
    constructor() {
      this.group = [];
    }

    add(value) {
      if (!this.group.includes(value)) {
        this.group.push(value);
      }
    }

    delete(value) {
      const index = this.group.indexOf(value);
      if(this.group.includes(value)) {
        this.group.splice(index, 1);
      }
    }

    has(num) {
      return this.group.includes(num);
    }

    static from(arr) {
      let g = new Group()
      for (let element of arr) {
        g.add(element);
      }
      return g;
    }
  }

  class GroupIterator {
    constructor(group) {
      this.group = group;
      this.position = 0;
    }

    next() {
      if(this.position >= this.group.group.length){
        return {done: true};
      } else {
        let result = {value: this.group.group[this.position],
          done: false};
        this.position++;
        return result;
      }
    }
  }

  Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
  };

  for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
}

iterableGroups();