const theLockedBox = () => {

  const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
  };
  
  //Write a function called withBoxUnlocked that takes a function value as argument,
  function withBoxUnlocked(body) {
    
    // // For extra points, make sure that if you call withBoxUnlocked when the box is already unlocked, the box stays unlocked.
    if(!box.lock){
      body();
    } else {
      try {
        // unlocks the box,
        box.unlock();

        // runs the function,
        body();

      } finally {
        // and then ensures that the box is locked again before returning, regardless of whether the argument function returned normally or threw an exception.
        box.lock();
      }
    }
  }
  
  withBoxUnlocked(function() {
    box.content.push("gold piece");
  });
  
  try {
    withBoxUnlocked(function() {
      throw new Error("Pirates on the horizon! Abort!");
    });
  } catch (e) {
    console.log("Error raised: " + e);
  }
  console.log(box.locked);
}

theLockedBox();