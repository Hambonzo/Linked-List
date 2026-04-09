import { LinkedList } from "./linkedList.js";

const myList = LinkedList();
myList.append("Node A");
myList.append("Node B");
myList.prepend("Node C");
myList.prepend("Node D");
myList.append("Node E");

console.log(myList.toString());

console.log(myList.size());
console.log(myList.head());
console.log(myList.tail());
console.log(myList.at(3));
console.log(myList.pop());

console.log(myList.toString());

console.log(myList.contains("Node E"));
console.log(myList.contains("Node D"));
console.log(myList.findIndex("Node E"));
console.log(myList.findIndex("Node Z"));
console.log(myList.insertAt(0, "Node F", "Node G"));

console.log(myList.toString());

console.log(myList.insertAt(2, "Node H", "Node I"));

console.log(myList.toString());

console.log(myList.removeAt(1));

console.log(myList.toString());

const myNewList = LinkedList();

console.log(myList.removeAt(3));
console.log(myList.removeAt(0));

console.log(myNewList.removeAt(1));
