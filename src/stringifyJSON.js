// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  console.log(typeof(obj));
  console.log("Stringify:" + JSON.stringify(obj));

  // If obj is a simple value, add value to empty string and return
  if (obj === null) {
      return "null";
  }
  if (typeof(obj) !== "object") {
    if (typeof(obj) === "string") {
      return addQuotes(obj);;
    }
    return "" + obj;
  } else {
    // recursive helper functions for array
    if (Array.isArray(obj)) {
      return "[" + arrayToString(obj) + "]";
    } else { // recursive helper function for object
      objectToString(obj);
    }
  }
};

// recursive helper functions to stringify array
var arrayToString = function(obj) {
  if (obj.length === 0) {
    return "";
  }
  if (obj.length === 1) {
    return typeof(obj[0]) === "string" ? addQuotes(obj[0]) : obj[0];
  }
  return "" + obj[0] + "," + arrayToString(obj.slice(1));
}

// recursive helper functions to stringify object
var objectToString = function(obj) {

}

// helper function to add quotes to outside of string
var addQuotes = function(string) {
  return '"' + string + '"';
}