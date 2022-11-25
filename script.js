let runningTotal = 0;
let buffer = "0";
let previousOperator;

const pantalla = document.querySelector('.pantalla');

function buttonClick(value){
    if(isNan(value)){
        handleSymbol(value);
    }else{
        handleSymbolNumber(value);
    }
    pantalla.innerText = buffer;
}

function handleSymbol(symbol){
    switch(symbol){
        case 'C':
            buffer = '0'; 
            runningTotal = 0;
            break;
        case '=':
            if(previousOperator === null){
                return
            }   
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '←':
            if(buffer.length === 1){
                buffer = '0';
            }else{
                buffer = buffer.substring(0, buffer.length -1);
            }
            break;
            case'+':
            case'−':
            case'×':
            case'÷':
                handleMath(symbol);
                break;
    }
}

function handleMath(symbol){
    if(buffer === '0'){
        return;
    }

    const intBuffer = parseInt(buffer);

    if(runningTotal === 0){
        runningTotal = IntBuffer;
    }else{
        flushOperation(IntBuffer);
    }
    previousOperator = symbol;
    buffer = '0';
    }

    function flushOperation(IntBuffer){
        if(previousOperator === '+'){
            runningTotal += IntBuffer;
        }else if (previousOperator === '−'){
            runningTotal -= IntBuffer;
        }else if(previousOperator === '×'){
            runningTotal *= IntBuffer;
        }else if(previousOperator === '÷'){
            runningTotal /= IntBuffer;
        }
    }

    function handleNumber(numberString){
        if (buffer === "0"){
            buffer = numberString;
        }else{
            buffer += numberString;
        }
    }

    function init(){
        document.querySelector('.boton') .addEventListener('click', function (event){
            buttonClick(event.target.innerText);
        })
    }

    init();
