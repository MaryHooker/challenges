
//Problem:

//Implement a function that can solve the following problem:

//Given a number A, find the smallest number which has only 1s and 0s as its digits which are divisible by the number A.

//For example:

//If the given number A is 4, the smallest number with 1s and 0s which is divisible by 4 is 100.

//If the given number A is 3, the answer would be 111.



// Solution

// function to pass in the variable as a parameter
findLowestValue = (a) => {
    // initialize an array with a value of '1' set to a string
    let digitsArray = ['1'];
    // use  while loop to find lowest number divisible by variable 'a' that only includes 0's & 1's
    while(true){
        // set first index position in array as current value
        let currentValue = digitsArray[0];
        // conditional to determine if the current value is divisible by variable 'a'(leaves a remainder of 0)
        if(currentValue % a == 0){
            // if yes, print the current value(first element in the array)
            console.log(currentValue)
            // add break to prevent code from infinitely looping
            break
        }
        // if the current value is not divisible by 'a', add a '0' and a '1' to the current value using concatenation
        // & remove the first element from the array
        else{
            digitsArray.push(currentValue + '0');
            digitsArray.push(currentValue + '1');
            digitsArray.shift();
        }
    }
}
// call function and pass in parameter
findLowestValue(3);
