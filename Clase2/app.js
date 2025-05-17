function calcular(operador) {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let resultado;

  if (operador === '+') {
    resultado = num1 + num2;
  } else if (operador === '-') {
    resultado = num1 - num2;
  } else if (operador === '*') {
    resultado = num1 * num2;
  } else if (operador === '/') {
    resultado = num1 / num2;
  }

  document.getElementById("resultado").textContent = resultado;
}
