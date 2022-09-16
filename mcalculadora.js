function menos() {
	var resultado=
	Number (document.getElementById("numero1").value)-
	Number (document.getElementById("numero2").value);
	console.log (resultado);
	document.getElementById("ap").innerHTML= resultado;
} 
function soma() {
	var resultado=
	Number (document.getElementById("numero1").value)+
	Number (document.getElementById("numero2").value);
	console.log (resultado);
	document.getElementById("ap").innerHTML= resultado;	
}
function multiplicar() {
	var resultado=
	Number (document.getElementById("numero1").value)*
	Number (document.getElementById("numero2").value);
	console.log (resultado);
	document.getElementById("ap").innerHTML= resultado;
}
function dividir() {
	var resultado=
	Number (document.getElementById("numero1").value)/
	Number (document.getElementById("numero2").value);
	console.log (resultado);
	document.getElementById("ap").innerHTML= resultado;
} 
function voltar() {
	window.location="index.html";
}
