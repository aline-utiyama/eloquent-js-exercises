const groups = () => {
  //Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.
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

    //Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.
    static from(arr) {
      let g = new Group()
      for (let element of arr) {
        g.add(element);
      }
      return g;
    }
  }

  let group = Group.from([10, 20]);
  console.log(group.has(10));
  console.log(group.has(30));
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
}

groups();