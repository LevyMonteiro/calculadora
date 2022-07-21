const resultado = document.querySelector("#resultado")
const buttonc = document.querySelector("#buttonc")
function ac () {
    if (resultado.value == "") { 
        buttonc.innerHTML = "AC";
    }
}