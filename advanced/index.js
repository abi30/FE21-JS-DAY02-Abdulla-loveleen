/* 1 Advanced | Time Convert
Create a JavaScript function that will return the number of minutes, in hours and minutes. The function should accept only one argument.

E.g. If we call the function and pass the number of minutes 200 we should get the message "200 minutes = 3 hour(s) and 20 minute(s)."

 */

let timeConverter=(minutes) =>{

    let hour = Math.floor(minutes / 60);

    let rest_minute = (minutes % 60);

    console.log(`${minutes} minutes = ${hour} hour(s) and ${rest_minute} minute(s)`);


};

timeConverter(200);