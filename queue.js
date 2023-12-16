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
  this.front = functio(){
      return collection[0]
  }
  this.size  = function(){
      return collection.length
  }
  this.isEMpty = function(){
  return(collection.length===0)
  }
  }
  
  var myquweue  = new queue()
  q.enqueue(12)
  q.enqueue(12)
  q.enqueue(25
    myQueue.print();
  