// Calculator


// Input Variable
var A = 4//prompt("Please enter a number",5);
var B = 4//prompt("Please enter a number",5);

// Calculator functions
function add(a,b) {
    return a+b;
}
function substract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}
function modulo(a,b) {
    return a%b;
}

console.log(add(A,B));

console.log(add(substract(A,B), divide(A,B)));
