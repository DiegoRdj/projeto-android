// Calculadora 

const display = document.getElementById('display')

function appendToDisplay(input){
    display.value += input
}

function clearDisplay(){
    display.value = ''
}

function calculate(){
    try{
           display.value = eval(display.value)
           //display.value = 'Usuario invalido'
    }
    catch(error){
        display.value = 'Erro'
    
    }
 
}