let calc = function calc(){
  let raio = document.getElementById("raio").value;
  document.getElementById("area").value=(Math.PI*raio*raio).toFixed(2);
  document.getElementById("circunferencia").value=(2*Math.PI*raio).toFixed(2);
}