//Declare four variables without assigning values and print them in console
var a;
var b;
var c;
var d;
console.log(a,b,c,d)



//How to get value of the variable myvar as output
var myvar=10;
console.log(myvar);





//Task 2: Simple Programs todo for Operators
//Square of a number

function square(a){
    return a*a;
    }
console.log(square(4))


//Swapping 2 numbers
let e = 5, f = 6;
[e,f] = [e,f];
console.log(`${e} ${f}`);



//Addition of 3 numbers
function add(a,b,c){
    return a+b+c;
   }
   console.log(add(1,2,3))
   
      // Meter to miles
   function getMiles(a) {
           return a*0.000621371192;
      }
   console.log(getMiles(2));
   
   
      //Task 3: Simple Programs todo for Condition , Looping and Arrays
     // Write a loop that makes seven calls to console.log to output the following triangle:
     // #   
   for (let i = "#"; i.length < 8; i += "#")
     console.log(i);

