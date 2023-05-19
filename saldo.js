function calcularSaldo() {
  // Define una lista de nombres
  const nombres = ["Tata", "Camila", "Jaco", "Laura", "Juanjo", "Riki"];

  // Solicita el valor gastado por cada persona
  const gastos = [];
  for (let i = 0; i < nombres.length; i++) {
    const gasto = prompt("¿Cuánto gastó " + nombres[i] + "?");
    gastos.push(parseFloat(gasto));
  }

  // Calcula el total gastado y el saldo a favor o en contra de cada persona
  let total = 0;
  for (let i = 0; i < gastos.length; i++) {
    total += gastos[i];
  }
  const pagoPorPersona = total / nombres.length;
  let resultado = "";
  for (let i = 0; i < nombres.length; i++) {
    const saldo = gastos[i] - pagoPorPersona;
    if (saldo > 0) {
      resultado += nombres[i] + " tiene un saldo a favor de <span style='color: darkgreen'>$ " + saldo.toLocaleString('es-MX', {minimumFractionDigits: 2}) + "</span>.<br>";
    } else if (saldo < 0) {
      resultado += nombres[i] + " debe pagar <span style='color: darkred'>$ " + (-saldo).toLocaleString('es-MX', {minimumFractionDigits: 2}) + "</span>.<br>";
    } else {
      resultado += nombres[i] + " no tiene saldo pendiente.<br>";
    }
    resultado += "<hr style='margin-bottom: 10px'>";
  }
  resultado = "<div style='padding: 20px'>" + resultado + "</div>";
  resultado += "<div style='padding: 20px'><strong>El total de la cuenta es $" + total.toLocaleString('es-MX', {minimumFractionDigits: 2}) + ".</strong></div>";
  // Muestra los resultados en el elemento HTML
  document.getElementById("resultado").innerHTML = resultado;
}
