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

(function() {

    let str = "i am a web developer";
    let new_str = str.charAt(0).toUpperCase() +
        str.slice(1)
    console.log(new_str);

})();




// ##############################