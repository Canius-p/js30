function queue() {
  collection = [];
  this.print = function () {
    console.log(collection);
  };
  this.enqueue = function (element) {
    collection.push(element);
  };
  this.dequeue = function () {
    return collection.shift();
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEMpty = function () {
    return collection.length === 0;
  };
}

var myQueue = new queue();
myQueue.enqueue("a");
myQueue.enqueue("b");
myQueue.enqueue("c");
myQueue.print();
myQueue.dequeue();
console.log(myQueue.front());
myQueue.print();
