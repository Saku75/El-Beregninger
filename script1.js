let button = document.getElementById("calc");
let output = document.getElementById("output");

button.addEventListener("click", function () {
	let var1 = document.getElementById("var1").value;
	let var2 = document.getElementById("var2").value;
	let var3 = document.getElementById("var3").value;
	let var4 = document.getElementById("var4").value;
	let var5 = document.getElementById("var5").value;
	let var6 = document.getElementById("var6").value;

	let calc =
		var6 * (((0.0225 * var1) / var2) * Math.cos(var3) + 8e-5 * var1 * Math.sin(var4)) * var5;

	output.innerHTML = calc;
});
