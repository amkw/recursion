// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// You should use document.body, element.childNodes, and element.classList


// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  //Initialize variables
  var resultsArray = [];

  console.log(document.body.childNodes);

  // If no body element, return null
  if (document.body === null) {
    return null;
  } else {
    // recursive helper function
    searchChildNodes(document.body, className);
  }
  return resultsArray;
};


// Recursive helper function to search childNodes as long as nodeList  length > 0
var searchChildNodes = function (element, className) {
  // console.log("Child Nodes:" + element.childNodes);
  // console.log("NodeList Length:" + element.childNodes.length);
  // console.log("Element:" + element);
  // console.log("Class List:" + element.classList);
  // console.log("Class Name:" + className);
  // console.log(element.classList+"" === className);

  if (element.classList+"" === className) {
    console.log(element); // element
  }
  for (var i = 0; i < element.childNodes.length; i++){
    searchChildNodes(element.childNodes[i], className);
  }
}