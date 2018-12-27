var largest = 0;
var i = 0;
while ( i < 10){
    i++
    var randomNum = Math.random();
    if(randomNum> largest){
        largest = randomNum;
    }
    // i += 1
    // i +1
}

alert(largest);

var result = 0;
for (var num = 101; num <=150; num++){
    var powerNum = Math.pow(num,2);
    var result = powerNum + result;

}

alert(result);

