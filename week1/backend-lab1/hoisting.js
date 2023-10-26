/* // 1.
function cube(x) {
    return x * x * x;
}

// 2.
function fullName(first, last) {
    return first + " " + last;
}

// 3.
function power(base, exp) {
    if (exp === 0) {
        return 1;
    }
    return base * power(base, exp - 1);
}

// 4.
function sumCubes(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total = total + cube(numbers[i]);
    }
    return total;
} */
// 1. 
var cube = function (x) {
    return x * x * x;
}

// 2.
var fullname = function (first, last) {
    return first + " " + last;
}

// 3.
var power = function (base, exp) {
    if (exp === 0) {
        return 1;
    }
    return base * power(base, exp - 1);
}

// 4.
var sumCubes = function (numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total = total + cube(numbers[i]);
    }
    return total;
}

/* 

1. Why does JavaScript output undefined instead of throwing an error in the following code?
JavaScript hoists variable declarations to the top of the scope, so the code is interpreted as undefined

2. Why does JavaScript throw an error instead of logging undefined in the following code?
The variable message is declared with let, which is not hoisted. The code is interpreted as message is not defined.

3. Explain precisely what happens when the following code is executed.
The variable showMessage is declared with const, which is not hoisted. The code is interpreted as showMessage is not defined.

4. Why does JavaScript not throw any errors when the following code is executed?
The function showMessage is hoisted to the top of the scope, so the code is interpreted as console.log(showMessage()).

*/

// 1.
/* for(var i = 0; i < values.length; i++){
    console.log(values[i]);
  }
  
  var values = [10, 20, 30]; */

var values = [10, 20, 30];
for (var i = 0; i < values.length; i++) {
    console.log(values[i]);
}

// 2.
// 2.
/* console.log(welcome('Charlie', 'Munger'));

function welcome(first, last) {
  return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`
};

var lastLogin = '1/1/1970'; */

var lastLogin = '1/1/1970';
console.log(welcome('Charlie', 'Munger'));

function welcome(first, last) {
    return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`
};

