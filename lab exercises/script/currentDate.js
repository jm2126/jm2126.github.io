//Write a JavaScript program to get the current date 

(function dateFunction(){
    //declare variables
    const date = new Date();//returns current date and time

    var day = date.getDate(); //use getDate method to get current day
    var month = date.getMonth() + 1;//add 1 because getMonth() returns numbers from 0 to 11
    var year = date.getFullYear();//using getFullYear to gte 2023

    //if month is less than 10 then add 0 in front of month
    if (month < 10){
        //using string concatenation
        month = "0" + month;
    }
    console.log(`Date: ${day} / ${month} / ${year}`);//expected output - Date: dd-mm-yyyy
} ()); //call function with self invocation
