// Obtener referencias a los elementos HTML
const display = document.getElementById('pantalla'); // Seleccionar por ID
const buttons = document.querySelectorAll('.boton'); // Seleccionar botones individuales

// Variable para almacenar la expresión matemática actual
let expression = '';

// Agregar un evento click a cada botón
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;

        if (value === '=' && expression !== '') {
            try {
                const result = eval(expression); // Precaución con eval
                display.textContent = result;
                expression = result.toString(); // Convertir a string
            } catch (error) {
                display.textContent = 'Error';
            }
        } else if (value === 'C') {
            expression = '';
            display.textContent = '0';
        } else {
            expression += value;
            display.textContent = expression;
        }
    });
});


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
