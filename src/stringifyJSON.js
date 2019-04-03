// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  console.log(typeof(obj));
  console.log("Stringify:" + JSON.stringify(obj));

  // If obj is a simple value, add value to empty string and return
  if (typeof(obj !== "object")) {
    if (typeof(obj) === "string") {
      // console.log(typeof(obj));
      return '"' + obj + '"';
    }
    return "" + obj;
  } else {
    // recursive helper function for objects
  }
};
