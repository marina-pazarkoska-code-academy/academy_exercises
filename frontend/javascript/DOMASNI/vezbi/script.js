// vezba 1 - Write a JavaScript program to display the current day and time in the following format
var today = new Date();
var day = today.getDay();
var daylist = [ 'Sunday' ,'Monday' , 'Tuesday', 'Wednesday' , 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log("Today is " + daylist[day] + ".");

var hour = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
console.log("Current time is " + hour + ":" + minutes + ":" + seconds)

// vezba 2 -Write a JavaScript program to print the contents of the current window.

function printCurrentPage (){
    // window.print();
}

printCurrentPage ();


//vezba 3 Write a JavaScript program to get the current date

var today = new Date();
var day = today.getDate();
var month = today.getMonth()+1;
var year = today.getFullYear();
if(day < 10){
    day = "0" + day;
}
if(month < 10){
    month = "0" + month;
}
console.log( month + "- "+ day + "- "+ year);

// vezba 4 Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7

function areaOfTriangle(a, b, c ){
    var a = a;
    var b = b;
    var c = c;
    
    var p  = (a + b +c)/2 ;
    var area = Math.sqrt(p*((p-a)*(p-b)*(p-c)));
    console.log("The area of triangle is " + area);
}

areaOfTriangle(5 , 6 , 7 );

// vezba 5 Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar
function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));


// vezba 6  Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050

function findFirstJanuary (){
    for(var year = 2014; year < 2050; year++){
        var d = new Date(year, 0, 1);
        if( d.getDay() === 0){
            console.log("1st January is being a Sunday " + year);
        }

    }
}

findFirstJanuary ();

// vezba 7 Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted 
//to input a guess number. If the user input match
//with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".

var num = Math.ceil(Math.random()*10)

