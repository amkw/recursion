// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // Return 'null' for null objects
  if (obj === null) {
      return "null";
  }

  // Return strings for simple values and string literals
  if (typeof(obj) !== "object") {
    if (typeof(obj) === "string") {
      return '"' + obj + '"'; // Add quotation marks around string literal
    }
    return "" + obj;
  }

  // Handle arrays
  if (typeof(obj) === "object" && Array.isArray(obj)) {
    // Base case: empty array
    if (obj.length === 0) { 
      return "[]";} 
    // Base case: array of length 1
    else if (obj.length === 1) { 
      return "[" + stringifyJSON(obj[0]) + "]"; }
    // Recurse
    else {
      var result = "";
      obj.forEach(function(currentValue, currentIndex) { 
        result += stringifyJSON(currentValue);
        (currentIndex !== obj.length-1) ? result += "," : result;
      });
      return "[" + result + "]";
    }
  }

  // Handle objects
  if (typeof(obj) === "object") {
    // Base case: empty object
    if (Object.keys(obj).length === 0) {
      return "{}";}
    // Recurse
    else {
      var result = "";
      Object.keys(obj).forEach(function(currentValue, currentIndex) {
        // Skip key/value pairs for unstrigifiable objects
        if (typeof(obj[currentValue]) === "function" || typeof(obj[currentValue]) === "undefined") {
          result = ""}
        else {
          result += stringifyJSON(currentValue) + ":" + stringifyJSON(obj[currentValue]);
          (currentIndex !== Object.keys(obj).length-1) ? result += "," : result;
        }
      });
      return "{" + result + "}";
    }
  }
};