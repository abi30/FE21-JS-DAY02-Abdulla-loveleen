/*

Basic 1 | Crystal Gazer
Write a function named crystalGazer() that takes four arguments: number of children, partner's name, geographic location and job title. Once the user passes the four arguments the program should output the following message on screen:

You will be a job_title in location and married to partners_name with number_childrens.
*/
    
// ##############################
// function crystalGazer(number_children,partners_name,location,job_title){

// console.log(`You will be a ${job_title} in ${location} and married to ${partners_name} with ${number_children} childrens.`);

// }

// crystalGazer(3,"micheal","austria","developer");


// ##############################
/*Basic 2 | Age Calculator
Write a function called ageCalculator() that takes two arguments birth year and current year. Calculate 2 possible ages based on those years (two, because we don't know the birth month).

You should get the following results:

You are either 29 or 28*/
// function ageCalculator(current_year,birth_year) {
     

    
//   return (current_year-birth_year);
  
// }
// console.log(ageCalculator(2021,1988));

// ##############################


/*Basic 3 | Age Calculator-improved
Enhance your previous exercise in terms of how to get the current year in JavaScript instead of passing it in. Provide the same results just through passing one argument.

You should get the following results:

You are either 29 or 28

Hint: you can take a look on Date() function https://www.w3schools.com/js/js_date_methods.asp*/

// function ageCalculator(birth_year){
//  let d= new Date()
//  let current_year=d.getFullYear();
 
//  return current_year-birth_year;
// }
// console.log(ageCalculator(2000));

// ##############################
/*Basic 4 | Degree-Radian Conversion
Create a JavaScript function that converts degrees to radians. The function accepts one argument, the degrees, and outputs the radians based on them. The formula for converting degrees to radians is: "degrees * (pi/180)"

E.g. If user passes 90 degrees it should get the result of 1.57079 radians*/

//     function degrees_to_radians(degrees)
// {
//   var pi = Math.PI;

//   var radians=degrees * (pi/180);
//   return radians;
// }

// console.log(degrees_to_radians(90).toFixed(5));
// console.log(degrees_to_radians(90).toPrecision(6));

// ##############################

/*Basic 5 | Area and Volume of a box
Create a function that calculates the area and volume of a box.

Formulas:

area = width x height

volume = width x height x depth

Pass three different numbers as arguments and get calculated results using the return statement.

You should get the following results:

The area of the box is: 14

The volume of the box is: 70*/

// function getResult(width,height,depth) {
//     var area= width*height;
//     var volume= width*height*depth;

//     var result = [area,volume];
//     return result;
//     }

//     document.write("The area of the box is:"+getResult(2 , 2 , 5)[0]);
//     document.write( "<br/>");
//     document.write("The volume of the box is:"+getResult ( 2, 7, 5)[1 ]);

