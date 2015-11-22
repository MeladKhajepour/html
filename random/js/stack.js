function Stack(){
    var top = null;
    var count = 0;

    //Returns the number of items in the queue
    this.GetCount = function(){
        return count;
    }

    /* Methods */
    this.Push = function (data) {
    //Creates a node containing the data and a reference to the next item, if any.
    var node = {
        data: data,
        next: null
    };

    //links the current node to the top node. If the stack is empty it will have null as reference
    node.next = top;

    //makes the current node as the top node.
    top = node;

    //Increases the count
    count++;
    }
    this.Peek = function(){
	//If there are no items, returns null. (avoid error)
    if(top === null){
		  return null;
	  }
	  else{
		  return top.data;
	  }
  }
  this.Pop = function () {
    //If there are no items, returns null. (avoid error)
    if (top === null) {
        return null;
    }
    else {
        //assigns top to a temp variable
        var out = top;

        //makes the TOP as the next in line
        top = top.next;

        //there still are items on the stack
        if (count > 0) {
            count--;
        }

        //returns the value that was removed
        return out.data;
    }
  }
  this.DisplayAll = function(){

    if (top === null) {
        return null;
    }
    else {
        //instantiate an array
        var arr = new Array();
        //creates a node to move through the stack
        var current = top;

        //moves through the stack until it reaches the bottom item
        for (var i = 0; i < count; i++) {
            //assigns the data to the array
            arr[i] = current.data;
            //advances one step
            current = current.next;
        }
        //returns the array
        return arr;
    }
  }
}
