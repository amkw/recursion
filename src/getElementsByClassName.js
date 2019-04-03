// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// You should use document.body, element.childNodes, and element.classList


// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

    var resultsArray = [];

    if (document.body === null) {
        return null;
    } else {
        searchChildNodes(resultsArray, document.body, className);
    }
    return resultsArray;
};


// Recursive helper function to search childNodes as long as nodeList length > 0. Adds nodes with class className to resultsArray.
var searchChildNodes = function(resultsArray, element, className) {
    if (element.classList !== undefined &&
        element.classList.contains(className)) {
        resultsArray.push(element);
    }
    element.childNodes.forEach(function(currentValue) { 
      searchChildNodes(resultsArray, currentValue, className); 
    });
}