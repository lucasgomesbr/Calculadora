// desativa a possibilidade de digitar algo por teclado no visor.
function disable(){
	 document.onkeydown = function (e) {
	  return false;
	 }
}

// Reseta os dados calculados no visor.
function resetar(){
	 document.getElementById("visor").value = "";
	 document.getElementById("visor").placeholder = "0";
}

// funções responsáveis por somar, subtrair, multiplicar e dividir.
function tecloumais(){
	document.getElementById("visor").value += "+";
}
function tecloumenos(){
	 document.getElementById("visor").value += "-";
}
function teclouvezes(){
	 document.getElementById("visor").value += "*";
}
function tecloudividir(){
	 document.getElementById("visor").value += "/" ;
}

// Funções muméricas.
function teclou0(){
	document.getElementById("visor").value += 0;
}
function teclou1(){
	document.getElementById("visor").value += 1;
}
function teclou2(){
	document.getElementById("visor").value += 2;
}
function teclou3(){
	document.getElementById("visor").value += 3;
}
function teclou4(){
	document.getElementById("visor").value += 4;
}
function teclou5(){
	document.getElementById("visor").value += 5;
}
function teclou6(){
	document.getElementById("visor").value += 6;
}
function teclou7(){
	document.getElementById("visor").value += 7;
}
function teclou8(){
	document.getElementById("visor").value += 8;
}
function teclou9(){
	document.getElementById("visor").value += 9;
}

// Exibe o resultado no visor.
function resultado(){
	let calculo = eval(document.getElementById("visor").value);
	document.getElementById("visor").value = calculo;
}

// Reseta o visor ao atualizar a pagina.
function ResetOnLoad() {
	document.getElementById("visor").value = "";
	document.getElementById("visor").placeholder = "0";
}
window.onload = ResetOnLoad;