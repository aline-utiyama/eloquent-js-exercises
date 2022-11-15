const persistentGroup = () => {
  class PGroup {
    constructor(letters){
      this.group = letters;
    }

    add(value) {
      return new PGroup(this.group.concat([value]));
    }

    delete(value) {
      let updated_values = this.group.filter(letter => letter !== value);
      return new PGroup(updated_values);
    }

    has(value) {
      return this.group.includes(value);
    }
  }

  PGroup.empty = new PGroup([]);

  let a = PGroup.empty.add("a");
  
  let ab = a.add("b");
  let b = ab.delete("a");

  console.log(b.has("b"));
  console.log(a.has("b"));
  console.log(b.has("a"));
}

persistentGroup();