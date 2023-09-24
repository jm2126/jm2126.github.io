//Write a JavaScript program to get the current date

    //declare variables
    const date = new Date();//return current date and time

    var day = date.getDate(); //use getDate method to get current day
    var month = date.getMonth() + 1;//add 1 because getMonth() returns numbers from 0 to 11
    var year = date.getFullYear();//display
    
    console.log(`Date: ${day} / ${month} / ${year}`);//display to user - figure out how to get 09

    //expected output - Date: dd-mm-yyyy
