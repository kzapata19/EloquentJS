// Make a Group class from the previous exercise iterable. Refer back to the section about the iterator interface earlier in the chapter if you aren't clear on the exact form of the interface anymore.
// If you used an array to represent the group's members, don't just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.
// It is ok if your iterator behaves strangely when the group is modified during iteration.

class Group {
  constructor() {
    this.members = [];
  }
  add(value) {
    if(!this.members.includes(value)) this.members.push(value)
    // if(!this.has(value)) this.members.push(value);
  }
  delete(value) {
    this.members = this.members.filter(member => member !== value)
  }
  has(value) {
    return this.members.includes(value);
  }
  static from(iterable) {
    let group = new Group;
    for(let elem of iterable) {
      group.add(elem)
    }
    return group;
  }
}

class GroupIterator extends Group {
  constructor(group) {
    // super(group);
      this.index = -1;
      this.members = group.members;
  }
  next() {
    this.index++;
    if(this.members[this.index] !== undefined) {
      return {value: this.members[this.index], done: false}
    } else {
      return {value: undefined, done: true}
    }
  }
}

// let myGroup = Group.from(["one", "two"]);
let myGroup = new Group();
myGroup.add("one");
myGroup.add("two");
console.log(myGroup)
let myGroupIterator = new GroupIterator(myGroup)
console.log(myGroupIterator)
console.log(myGroupIterator.next())
console.log(myGroupIterator.next())
console.log(myGroupIterator.next())
