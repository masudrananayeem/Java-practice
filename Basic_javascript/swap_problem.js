var a =5;
var b =10;

console.log("Before swapping:", "a: " + a, "b: " + b);
var temp = a;
a = b;
b = temp;

console.log("After swapping:", "a: " + a, "b: " + b);

x=12;
y=8;

x=x+y;
y=x-y;
x=x-y;  
console.log("After swapping without temp variable:", "x: " + x, "y: " + y); 

var m = 15;
var n = 25;
m = m * n;
n = m / n;
m = m / n;  
console.log("After swapping using multiplication and division:", "m: " + m, "n: " + n);

var p = 3;  
var q = 7;

[p, q] = [q, p];
console.log("After swapping using destructuring assignment:", "p: " + p, "q: " + q);