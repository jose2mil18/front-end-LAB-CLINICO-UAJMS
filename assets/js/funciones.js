console.log("hola")
function fun(e){
	alert(e)
}
function enviarResultados(correo){
	console.log(correo)
	Email.send({
		Host : "smtp.gmail.com",
		Username : "joseflores59849@gmail.com",
		Password : "S1nclave",
		To : correo,
		From : "joseflores59849@gmail.com",
		Subject : "Informe de resultados",
		Body : "PUede pasar a recoger sus examenes"
		/*,
		Attachments : [
			{
				name : "smtpjs.png",
				path:"https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png"
			}]*/

	}).then(
	  message => alert(message)
	);
}
function cerrarModal(){
	console.log("cerrando ventana modal")
	
	$("#addevent").modal("hide");
}
$('form').attr('autocomplete','off');

$('input').attr('autocomplete','off');

$('form input').on('keypress', function(e) {
    return e.which !== 13;
});

function validatePassword() {
	console.log(document.getElementById("password").value)
	var pass1 = document.getElementById("password").value;
	var pass2 = document.getElementById("password_confirmation").value;
	pass1 != pass2 ? document.getElementById("password_confirmation").setCustomValidity("Las contraseñas no coinciden") : document.getElementById("password_confirmation").setCustomValidity('');
	}
	function validatefechas() {
		var pass1 = document.getElementById("fecha_inicio").value;
		var pass2 = document.getElementById("fecha_fin").value;
		pass1 > pass2 ? document.getElementById("fecha_inicio").setCustomValidity("la fecha inicio debe ser menor o igual a fecha final") : document.getElementById("fecha_inicio").setCustomValidity('');
		}

	function    validateCedulaUnica(){
		console.log("validando cedula")
		document.getElementById("cedula").setCustomValidity("esa cedula ya existe")
	}
	
	function    validateCedula(){
		
		document.getElementById("cedula").setCustomValidity('')
	}

	function showConfirmMessage() {
		swal({
			title: 'Are you sure?',
			text: 'You will not be able to recover this imaginary file!',
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#DD6B55',
			confirmButtonText: 'Yes, delete it!',
			closeOnConfirm: false,
			
		}).then((result) => {
			if (result.value) {
			  Swal.fire(
				'Deleted!',
				'Your file has been deleted.',
				'success'
			  )
			}
		  });
	
	}

	$('.selectpicker').selectpicker();


	




	