var table = document.createElement('table');
document.body.append(table);
var section1 = document.createElement('td');
section1.classList.add('section1');
table.append(section1);

 var mainHead = document.createElement('tr');
mainHead.classList.add('mainHead');
section1.append(mainHead);

var heading = document.createElement('td');
heading.classList.add('heading');
heading.innerHTML = "Simple Math Calculator";
mainHead.append(heading);


var mainInput = document.createElement('td');
mainInput.classList.add('mainInput');
section1.append(mainInput);

var input1 = document.createElement('input');
input1.id = "input";
input1.placeholder = "0";
input1.value = ''
input1.setAttribute("readonly", "readonly");
input1.setAttribute('type', 'text');
mainInput.append(input1);

var answer = document.createElement('input');
answer.id = "answer";
answer.value = ''
answer.setAttribute("readonly", "readonly");
answer.setAttribute('type', 'text');
mainInput.append(answer);

var section2 = document.createElement('tr');
section2.classList.add('section2');
table.append(section2);

var calculate = document.createElement('td');
calculate.classList.add('calculate');
section2.append(calculate);

// input- button


    


    for(var i = 0; i < 17; i++){
        switch(i){
            case 10:
        var clear = document.createElement("input");
        clear.setAttribute("type", "button");
        calculate.append(clear); 
        clear.id ='clear'
        clear.value = 'CE';
        clear.innerHTML = 'CE';
        clear.classList.add('operand');
        break;
            case 11:
        var division = document.createElement("input");
        division.setAttribute("type", "button");
        division.id = 'division';
        division.value = '/';
        division.innerHTML = '/';
        calculate.append(division);
        clear.classList.add('operand');
                break;
            case 12:
            var multi = document.createElement("input");
            multi.setAttribute("type", "button");
            multi.id = 'multi';
            multi.value = '*';
            multi.innerHTML = '*';
            clear.classList.add('operand');
        calculate.append(multi);
            break;
            case 13:
        var plus = document.createElement("input");
        plus.setAttribute("type", "button");
        plus.id = 'plus';
        plus.value = '+';
        plus.innerHTML = '+';
        clear.classList.add('operand');
        calculate.append(plus);
            break;
            case 14:
            var minus = document.createElement("input");
        minus.setAttribute("type", "button");
        minus.id = 'minus';
        minus.value = '-';
        minus.innerHTML = '-'
        clear.classList.add('operand');
        calculate.append(minus);
            break;
            case 15:
            var compute = document.createElement("input");
            compute.setAttribute("type", "button");
            compute.id = 'compute';
            clear.classList.add('operand');
            compute.value = '=';
            compute.innerHTML = '='
            calculate.append(compute);
            break;
            case 16:
            var back = document.createElement("input");
            back.setAttribute("type", "button");
            back.id = 'backspace';
            clear.classList.add('operand');
            back.value = 'back';
            back.innerHTML = 'back'
            calculate.append(back);
            break;
           
            default:
            var numbers = document.createElement("input");
            numbers.setAttribute("type", "button");
            numbers.classList.add('number');
            numbers.value = i;
            numbers.innerHTML = i;
            calculate.append(numbers);

            break;
        }
    }

    

    

   


