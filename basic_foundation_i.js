
//#1 - Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function returnNumbers() {
    var someNumbers = [];
    for(var i = 0; i <= 255; i++) {
        someNumbers.push(i);
    }
    return someNumbers;
}
var x = returnNumbers();
console.log(x);


//#2 - Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function returnEvens() {
    var sum = 0;
    for(var i = 1; i <= 1000; i++) {
        if(i % 2 == 0) {
            sum += i;
            console.log(sum);
        }
    }
}
returnEvens();


//#3 - Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function returnOddSum() {
    var sum = 0;
    for(var i = 1; i <= 5000; i++) {
        if(i % 2 != 0) {
            sum += i;
        }
    }
    return sum;
}
var x = returnOddSum();
console.log(x);


//#4 - Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function returnArraySum(myArray) {
    var sum = 0;
    for(i = 0; i < myArray.length; i++) {
        sum += myArray[i];
    }
    return sum;
}
var array = [1,2,5];
var x = returnArraySum(array);
console.log(x);




//#5 - Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function returnMaxNum(myArray) {
    var max = 0;
    for(i = 0; i < myArray.length; i++) {
        if(max < myArray[i]) {
            max = myArray[i];
        }
    }
    return max;
}
var array = [1,2,5,1,23,0,-8,47,-332];
var x = returnMaxNum(array);
console.log(x);



//#6 - Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function returnArrayAvg(myArray) {
    var avg = 0;
    var sum = 0;
    for(i = 0; i < myArray.length; i++) {
        sum += myArray[i];
        avg = sum / (myArray.length);
    }
    return avg;
}
var array = [1,3,5,7,20];
var x = returnArrayAvg(array);
console.log(x);



//#7 - Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function returnOddArray() {
    var array = [];
    for(var i = 0; i <= 50; i++) {
        if(i % 2 != 0) {
            array.push(i);
        }
    }
    return array
}
var x = returnOddArray();
console.log(x);



//#8 - Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function greaterThanY(myArray, val) {
    var grtrthan = 0;
    for(i = 0; i < myArray.length; i++) {
        if(myArray[i] > val) {
            grtrthan++;
        }
    }
    return grtrthan;
}
var array = [1,2,3,4,5,6,7,8,9,10];
var val = 4;
var x = greaterThanY(array, val);
console.log(x);



//#9 - Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
function squares(myArray) {
    for(i = 0; i < myArray.length; i++) {
        myArray[i] = myArray[i] * myArray[i];
    }
    return myArray;
}
var array = [1,5,10,-2];
var x = squares(array);
console.log(x);




//#10 - Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function negatives(myArray) {
    for(i = 0; i < myArray.length; i++) {
        if(myArray[i] < 0) {
            myArray[i] = 0;
        }
    }
    return myArray;
}
var array = [1,5,10,-2];
var x = negatives(array);
console.log(x);




//#11 - Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function returnMinMaxAvg(myArray) {
    var max = 0;
    var min = 0;
    var sum = 0;
    var array = [];
    for(i = 0; i < myArray.length; i++) {
        if(myArray[i] < min) {
            min = myArray[i];
        }
        if(myArray[i] > max) {
            max = myArray[i];
        }
        sum += (myArray[i]);
    }
    array[0] = max;
    array[1] = min;
    array[2] = sum / myArray.length;
    return array;
}
var array = [1,5,10,-2];
var x = returnMinMaxAvg(array);
console.log(x);




//#12 - Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swapValues(myArray) {
    if(myArray.length > 1) {
        myArray.reverse();
    }
    else {
        console.log("You need an array of at least 2 to proceed")
        return;
    }
    return myArray;
}
var array = [1,5,10,-2];
var x = swapValues(array);
console.log(x);




//#13 - Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2]
function numberToString (myArray) {
    for(i = 0; i < myArray.length; i++) {
        if(myArray[i] < 0) {
            myArray[i] = "Dojo";
        }
    }
    return myArray;
}
var array = [-1,-3,2];
var x = numberToString(array);
console.log(x);