let button = document.getElementById("calc");
let output = document.getElementById("output");

button.addEventListener("click", function () {
	let var1 = document.getElementById("var1").value;
	let var11 = document.getElementById("var11").value;

	let var2 = document.getElementById("var2").value;
	let var21 = document.getElementById("var21").value;

	// let var3 = document.getElementById("var3").value;
	// let var31 = document.getElementById("var31").value;

	// let var4 = document.getElementById("var4").value;
	// let var41 = document.getElementById("var41").value;

	// prettier-ignore
	let calc = Math.sqrt(Math.pow((var1 * var11 + var2 * var21), 2) + Math.pow((var1 * Math.sin(Math.acos(var11)) + var2 * Math.sin(Math.acos(var21))), 2));

	output.innerHTML = calc;
});
