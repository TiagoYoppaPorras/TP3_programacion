function calcularIMC() {
  const estatura = parseFloat(document.getElementById('estatura').value);
  const peso = parseFloat(document.getElementById('peso').value);

  if (!estatura || !peso || estatura <= 0 || peso <= 0) {
    alert("Por favor, ingrese valores válidos.");
    return;
  }

  const imc = peso / (estatura * estatura);
  alert("Tu IMC es: " + imc.toFixed(2));
}