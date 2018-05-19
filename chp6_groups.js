// The standard Javascript environment provides another data structure called Set. Like an instance of Map, a set holds a collection of values. Unlike Map, it does not associate other values with those--it just tracks which values are part of the set. A value can only part of a set once--adding it again does not have any effect.
//
// Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it is not already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.
//
// Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.
//
// Give the class a static from method that takes an iterable object as argument and creates a group that contains all the value produced by iterating over it.
//

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

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));
