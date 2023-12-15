var stack = function () {
  this.count = 0;
  this.storage = {};
  //Adding the value to the stack

  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };
  //removing
  this.pop = function () {
    if (this.coun === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };
  this.size = function () {
    return this.count;
  };

  //peak
  this.peek = function (value) {
    return this.storage[this.count - 1];
  };
};

var myStack = new stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());

myStack.push("nabii");
console.log(myStack.peek());
