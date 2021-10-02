let runningTotal=0;

let buffer = "0";

let prevOperator=null;

const screen =document.querySelector(".screen");

function buttonClick(value){
    if (isNaN(value)){
        handleSymbol(value);
    }
    else{
        handleNumber(value);
    }
    screen.innerText=buffer;
}

function handleSymbol(symbol){
    // console.log(symbol)
    switch(symbol){
        case 'C':
            buffer="0";
            runningTotal=0;
            break;

        case '=':
            // console.log(runningTotal);
            if (prevOperator === null){
                //2 number
                return;
            }
            
            flushOpertaion(parseInt(buffer));
            prevOperator=null;
            buffer=`${runningTotal}`;
            runningTotal=0;
            break;

        case '+':
            handleMath(symbol);
            break;
        case '-':
            handleMath(symbol);
            break;
        case '×':
            handleMath(symbol);
            break;
        case '÷':
            handleMath(symbol);
            break;

        case '←':
            let n=buffer.length;   
            buffer=buffer.substring(0,n-1);
            if (buffer.length==0)
                buffer="0";
            break;

        
    }
}

function handleMath(symbol){
    

    if (buffer === "0"){
        //do nothing
        return ; 
    }

    const intBuffer= parseInt(buffer); //or  +buffer in place of parseInt
    
    if (runningTotal === 0){
         runningTotal=intBuffer;
    }
    else{
        flushOpertaion(intBuffer);
    }
    prevOperator=symbol;

    buffer="0";
}

function flushOpertaion(intBuffer){
    if (prevOperator === '+'){
        runningTotal+=intBuffer;
    }
    else if (prevOperator === '-'){
        runningTotal-=intBuffer;
    }
    
    else if (prevOperator === '×'){
        runningTotal*=intBuffer;
    }
    else{
        runningTotal/=intBuffer;
    }
    // console.log("runn",runningTotal);
}

function handleNumber(numberString){
    if (buffer ==="0"){
        buffer= numberString;
    }
    else{
        buffer+=numberString;
    }
    screen.innerText=buffer;
}

function init(){
    document.querySelector(".calc-buttons").  //var
        addEventListener("click" ,function(event){  //2 func
            buttonClick(event.target.innerText);   
    });
}

init();


