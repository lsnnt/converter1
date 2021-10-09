function submit() {
  let x = document.getElementById("id12").value;
  document.getElementById("output121").innerHTML = x;
  document.getElementById("out1").innerHTML = "Thanks for your response";
}

function ctof() {
  let x = document.getElementById("777").value;
  const y = x * 1.8 + 32;
  str(y);
}
function str(x) {
  document.getElementById("ctof1").innerHTML = x;
}
function ftoc() {
  let x = document.getElementById("77").value;
  const y1 = (x - 32) / 1.8;
  document.getElementById("ftoc").innerHTML = y1;
}
function atosin() {
  let x = document.getElementById("7777").value;
  let x1 = x * 0.0174532925199433;
  const y3 = Math.sin(x1);
  document.getElementById("atosin").innerHTML = y3;
}
function atocos() {
  let x = document.getElementById("7").value;
  let x1 = x * 0.0174532925199433;
  const y4 = Math.cos(x1);
  document.getElementById("atocos").innerHTML = y4;
}
function atotan() {
  let x = document.getElementById("77777").value;
  let x1 = x * 0.0174532925199433;
  const y5 = Math.tan(x1);
  document.getElementById("atotan").innerHTML = y5;
}
function atorad() {
  let x = document.getElementById("777777").value;
  let x1 = x * 0.0174532925199433;
  document.getElementById("atorad").innerHTML = x1;
}
function radtoa() {
  let x = document.getElementById("7777777").value;
  let x1 = x * 57.2957795130823;
  document.getElementById("radtoa").innerHTML = x1;
}
