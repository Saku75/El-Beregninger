let button = document.getElementById("calc");
let output = document.getElementById("output");

button.addEventListener("click", function () {
	let var1 = document.getElementById("var1").value;
	let var2 = document.getElementById("var2").value;
	let calc;

	switch (var2) {
		case "rx":
			calc = var1 / Math.sin(Math.acos(var1));
			break;
		case "phi":
			calc = Math.cos(-Math.atan(1 / var1));
			break;
	}

	output.innerHTML = calc;
});
