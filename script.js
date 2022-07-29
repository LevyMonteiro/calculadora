const resultado = document.querySelector("#resultado");
const buttonAC = document.querySelector("#buttonAC");

function AC() {
    if(resultado.textContent) {
       buttonAC.innerHTML = "C";
    } else {
        buttonAC.innerHTML = "AC";
    }
}

function insert(valor) {
resultado.innerHTML += valor;
}

function clean() {
    resultado.innerHTML = "";
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else {
        document.getElementById('resultado').innerHTML = "∅"
    }
}