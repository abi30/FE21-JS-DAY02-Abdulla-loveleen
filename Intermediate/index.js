/* 
1 Intermediate | Capitalize
Write an anonymous JavaScript function to capitalize only the first letter of a string. The function accepts only one string argument.

E.g. If we pass the following string 'i am a web developer' we should get the message 'I am a web developer'

Hint: Check JavaScript String charAt() Method


*/

/* let capitalize = function() {

    let str = "i am a web developer";
    let new_str = str.charAt(0).toUpperCase() +
        str.slice(1)
    return new_str;

}


console.log(capitalize()) */

/* (function() {

    let str = "i am a web developer";
    let new_str = str.charAt(0).toUpperCase() +
        str.slice(1)
    console.log(new_str);

})();
 */



// ##############################

/*

2 Intermediate | Average Grade
Make a function that will accept 3 parameters, which are the grades from Math, Physics and English. then make the calculation and print them on the screen. Make sure that the variables are numbers.

E.g. If you put the following grades 3, 4, 5 the result should be:

Sum:12

Average: 4


*/

/* let calculate = (math, phys, engl) => {
    console.log("Avergage:" + (math + phys + engl) / 3 + " sum :" + (math + phys + engl))
}

calculate(3, 4, 5) */