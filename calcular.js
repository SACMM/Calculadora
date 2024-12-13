function calcular() {
    let num1 = document.getElementById("num1").value;
    let operador = document.getElementById("operador").value;
    let num2 = document.getElementById("num2").value;
    let resultado = 0;
    switch (operador) {
        case "+":
            resultado = parseInt(num1) + parseInt(num2);
            break;
        case "-":
            resultado = parseInt(num1) - parseInt(num2);
            break;
        case "*":
            resultado = parseInt(num1) * parseInt(num2);
            break;
        case "/":
            resultado = parseInt(num1) / parseInt(num2);
            break;
        default:
            resultado = "Operador no válido";
            break;
    }
    document.getElementById("resultado").innerText = "El resultado es: " + resultado;
}