console.log("hola")
function fun(e){
	alert(e)
}

function validatePassword() {
	console.log(document.getElementById("password").value)
	var pass1 = document.getElementById("password").value;
	var pass2 = document.getElementById("password_confirmation").value;
	pass1 != pass2 ? document.getElementById("password_confirmation").setCustomValidity("las contraseñas no coinciden") : document.getElementById("password_confirmation").setCustomValidity('');
	}
	function validatefechas() {
		var pass1 = document.getElementById("fecha_inicio").value;
		var pass2 = document.getElementById("fecha_fin").value;
		pass1 > pass2 ? document.getElementById("fecha_inicio").setCustomValidity("la fecha inicio debe ser menor o igual a fecha final") : document.getElementById("fecha_inicio").setCustomValidity('');
		}

	function    validateCedulaUnica(){
		
		document.getElementById("cedula").setCustomValidity("esa cedula ya existe")
	}
	
	function    validateCedula(){
		
		document.getElementById("cedula").setCustomValidity('')
	}