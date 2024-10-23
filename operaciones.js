let consola = '';  

function anadirNum(x) {
    consola += x;  
    pasarConsola();  
}

function sumar() {
    consola += '+';  
    pasarConsola();
}

function restar() {
    consola += '-'; 
    pasarConsola();
}

function multiplicar() {
    consola += '*';  
    pasarConsola();
}

function dividir() {
    consola += '/'; 
    pasarConsola();
}

function calcular() {
    try {
        let resultado = eval(consola);  
        consola = resultado.toString();  
        pasarConsola();  
    } catch (error) {
        consola = 'Error';  
        pasarConsola();
    }
}

function borrar() {
    consola = ''; 
    pasarConsola();  
}

function pasarConsola() {
    document.getElementById('valores').innerText = consola;  
}
