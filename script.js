function isNum(val){
    return !isNaN(val)
  } // VERIFY IF THE VALUE THE USER GAVE IS A NUMBER

function addition(){
    let val1 = String(add_val1.value);
    let val2 = String(add_val2.value)

    // VERIFY IF NUMBER
    if(isNum(val1) && isNum(val2)){
        if(val1.length == 0 || val2.length == 0){
            alert('Please enter a number');
        }
        else{
            
            alert('Answer: ' + (parseInt(val1) + parseInt(val2)));
        }
    }else{
        alert('PLEASE TYPE IN VALUID NUMBERS');
    }
}

function subtract(){
    let val1 = String(sub_val1.value);
    let val2 = String(sub_val2.value)

    // VERIFY IF NUMBER
    if(isNum(val1) && isNum(val2)){
        if(val1.length == 0 || val2.length == 0){
            alert('Please enter a number');
        }
        else{
            
            alert('Answer: ' + (parseInt(val1) - parseInt(val2)));
        }
    }else{
        alert('PLEASE TYPE IN VALUID NUMBERS');
    }
}


function power(){
    let val1 = String(exp_val1.value);
    let val2 = String(exp_val2.value)

    // VERIFY IF NUMBER
    if(isNum(val1) && isNum(val2)){
        if(val1.length == 0 || val2.length == 0){
            alert('Please enter a number');
        }
        else{
            
            alert('Answer: ' + (parseInt(val1) ** parseInt(val2)));
        }
    }else{
        alert('PLEASE TYPE IN VALUID NUMBERS');
    }
}

function squareroot(){
    let val1 = String(root_val1.value);
    //let val2 = String(root_val2.value)

    // VERIFY IF NUMBER
    if(isNum(val1)){
        if(val1.length == 0){
            alert('Please enter a number');
        }
        else{
            alert('Answer: ' + (val1 ** 0.5) );
        }
    }else{
        alert('PLEASE TYPE IN VALUID NUMBERS');
    }
}

function divison(){
    let val1 = String(div_val1.value);
    let val2 = String(div_val2.value)

    // VERIFY IF NUMBER
    if(isNum(val1) && isNum(val2)){
        if(val1.length == 0 || val2.length == 0){
            alert('Please enter a number');
        }
        else{
            
            alert('Answer: ' + (parseInt(val1) / parseInt(val2)));
        }
    }else{
        alert('PLEASE TYPE IN VALUID NUMBERS');
    }
}

function findRemainder(){
    let val1 = String(rem_val1.value);
    let val2 = String(rem_val2.value)

    // VERIFY IF NUMBER
    if(isNum(val1) && isNum(val2)){
        if(val1.length == 0 || val2.length == 0){
            alert('Please enter a number');
        }
        else{
            
            alert('Answer: ' + (parseInt(val1) % parseInt(val2)));
        }
    }else{
        alert('PLEASE TYPE IN VALUID NUMBERS');
    }
}

function randomNum(){
    let val1 = String(random.value);
    //let val2 = String(root_val2.value)

    // VERIFY IF NUMBER
    if(isNum(val1)){
        if(val1.length == 0){
            alert('Please enter a number');
        }
        else{
            if(parseInt(val1) < 0){
                alert('Enter a number greater than 0! ')
            }
            else{
                randommm = Math.floor(Math.random() * parseInt(val1))+1;
                document.getElementById('randomm').innerHTML = 'Random Number: ' + randommm;
            }
        }
    }else{
        alert('PLEASE TYPE IN VALUID NUMBERS');
    }
}
