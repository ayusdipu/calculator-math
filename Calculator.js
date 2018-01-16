// Calculator


// Level Zero
// Input Variable
var A = 4//prompt("Please enter a number",5);
var B = 4//prompt("Please enter a number",5);

// Level One
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

// Level Two
console.log(add(substract(A,B), divide(A,B)));


// Hahaha Level Three - Stat Master
var regression = require('regression');


const result = regression.linear([[0, 1], [32, 67], [12, 79]]);
const gradient = result.equation[0];
const yIntercept = result.equation[1];


const data2 = [[0,1],[32, 67],[12, 79]];
const result2 = regression.polynomial(data2, { order: 3 });

console.log(result);
console.log(gradient);
console.log(yIntercept);
console.log(result2);


// Godly Level - Became Ash Ketchum
const calculator = require('pokemon-stat-calculator');

let charizardBaseStats = [78, 104, 78, 159, 115, 100];
let fullIVs = [31, 31, 31, 31, 31, 31];
let zeroIVs = [0, 0, 0, 0, 0, 0];
let emptyEVs = [0, 0, 0, 0, 0, 0];
let fullEVs = [6, 0, 0, 252, 0, 252];
let nature = [1, 1, 1, 1, 1];
 
var pokemon = calculator.calAllStats(fullIVs, charizardBaseStats, emptyEVs, 50, nature);
console.log("This is Charizard Status " + pokemon);