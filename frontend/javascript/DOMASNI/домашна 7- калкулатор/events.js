var one = document.getElementsByClassName('number')[0];
one.addEventListener('click',  function(){
    var input_var = document.getElementById('input');
    input_var.value += '0';
});

var two = document.getElementsByClassName('number')[1];
two.addEventListener('click',  function(){
    var input_var = document.getElementById('input');
    input_var.value += '1';
});
var three = document.getElementsByClassName('number')[2];
three.addEventListener('click',  function(){
    var input_var = document.getElementById('input');
    input_var.value += '2';
});

var four = document.getElementsByClassName('number')[3];
four.addEventListener('click',  function(){
    var input_var = document.getElementById('input');
    input_var.value += '3';
});

var five = document.getElementsByClassName('number')[4];
five.addEventListener('click',  function(){
    var input_var = document.getElementById('input');
    input_var.value += '4';
});

var six = document.getElementsByClassName('number')[5];
six.addEventListener('click',  function(){
    var input_var = document.getElementById('input');
    input_var.value += '5';
});

var seven = document.getElementsByClassName('number')[6];
seven.addEventListener('click',  function(){
    var input_var = document.getElementById('input');
    input_var.value += '6';
});

var eight = document.getElementsByClassName('number')[7];
eight.addEventListener('click',  function(){
    var input_var = document.getElementById('input');
    input_var.value += '7';
});
var nine= document.getElementsByClassName('number')[8];
nine.addEventListener('click',  function(){
    var input_var = document.getElementById('input');
    input_var.value += '8';
});var zero = document.getElementsByClassName('number')[9];
zero.addEventListener('click',  function(){
    var input_var = document.getElementById('input');
    input_var.value += '9';
});



function clearScreen(){
    document.getElementById('input').value = "";
    document.getElementById('answer').value = "";
}

var clear = document.getElementById('clear');
clear.addEventListener('click', clearScreen);

var plus = document.getElementById('plus');
plus.addEventListener('click',  function(){
    var input_var = document.getElementById('input');
    input_var.value += '+';

});
var minus = document.getElementById('minus');
minus.addEventListener('click',  function(){
    var input_var = document.getElementById('input');
    input_var.value += '-';
});

var multi = document.getElementById('multi');
multi.addEventListener('click',  function(){
    var input_var = document.getElementById('input');
    input_var.value += '*';
});

var division = document.getElementById('division');
division.addEventListener('click',  function(){
    var input_var = document.getElementById('input');
    input_var.value += '/';
});

var compute = document.getElementById('compute');
compute.addEventListener('click', function(){
    var input_var = document.getElementById('input');
    var ans = eval(input_var.value)
    document.getElementById('answer').value = '=' + ans;
  
});




// function backspace(){
//     var input_var = document.getElementById('input');
//     var x = input_var.value;
//     if(x.lenght > 0){
//         x = x.substring(0, x.lenght -1); 
//         input_var.value = x;

//     }
// }
// backspace()





// $(document).on("click", ".calculate", function (event) {
//     var vrednost = event.target.value;
//     if(vrednost == numbers){
//         var input_var = document.getElementById('input');
//         for(var i = 0; i < 10; i++){
//         input_var.value += i;
//         }
        
//     }else if(vrednost !== numbers){
//         input_var.value += '+';
//         input_var.value += '-';
//         input_var.value += '*';
//         input_var.value += '/';
        
//     }
// })