/* 1 Advanced | Time Convert
Create a JavaScript function that will return the number of minutes, in hours and minutes. The function should accept only one argument.

E.g. If we call the function and pass the number of minutes 200 we should get the message "200 minutes = 3 hour(s) and 20 minute(s)."

 */



 let withdrawal =(amount)=>{
     
    if (amount%10==0){
        let note_100=Math.floor(amount/100);
        let note_50=Math.floor((amount%100)/50);
         let note_20=Math.floor((amount%50)/20);
        let note_10=Math.floor((amount%20)/10);



       var result=[note_100,note_50,note_20,note_10];
       return result;
    }
    else{
        

    // 
    return "please start from 10 Euro!";

    }
    
   

// console.log(`${amount} is for 100 notes ${note_100} and 50 notes ${note_50} and 20 notes ${note_20} and 10 notes ${note_10}`);
 };

    // console.log(`note of 100's ${(withdrawal(390)[0])}`);
    // console.log(`note of 50's ${(withdrawal(390)[1])}`);
    // console.log(`note of 20's ${(withdrawal(390)[2])}`);
    // console.log(`note of 10's ${(withdrawal(390)[3])}`);

    console.log(withdrawal(15));