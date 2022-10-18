//Validación de un formulario con Javascript
//Fuente: https://desarrolloweb.com/articulos/1767.php
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('formregistro').addEventListener('submit', validarFormulario);
});

function validarFormulario(event) {
  event.preventDefault();
  var apellido = document.getElementById('apellido').value;
  if (apellido == 0) {
    alert("Completa el campo Apellido");
    return;
  }
  var nombre = document.getElementById('nombre').value;
  if (nombre == 0) {
    alert("Completa el campo Nombre");
    return;
  }
  var email = document.getElementById('email').value;
  if (email == 0) {
    alert("Completa el campo Email");
    return;
  }
  var cumpleanos = document.getElementById('cumpleanos').value;
  if (cumpleanos == 0) {
    alert("Completa el campo Cumpleaños");
    return;
  }
  var genero = document.getElementById('genero').value;
  if (genero == 0) {
    alert("Completa el campo Género");
    return;
  }
  var idioma = document.getElementById('idioma').selectedIndex;
  if (idioma == 0) {
    alert("Completa el campo Idioma");
    return;
  }
  var redes = document.getElementsByName('redes').checked;
  if (redes[0] == true  ||
    redes[1] == true ||
    redes[2] == true ||
    redes[3] == true ||
    redes[4] == true ||
    redes[5] == true) {
    alert("Completa el campo Redes");
    return;
  }
  var password = document.getElementById('password').value;
  if (password.length < 6) {
    alert("La contraseña no es válida");
    return;
  }
  var passwordCheck = document.getElementById('passwordConfirm').value;
  if (passwordCheck != password) {
    alert("Las contraseñas no coinciden");
    return;
  }
  this.submit();
}


// the form id is formregistro
$('#formregistro').on("submit", function (event) {
  event.preventDefault(); // prevent reload

  var formData = new FormData(formregistro);
  formData.append('service_id', 'default_service');
  formData.append('template_id', 'form_template');
  formData.append('user_id', 'zY7TNkCHihrWDPRlU');

  $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
    type: 'POST',
    data: formData,
    contentType: false, // auto-detection
    processData: false // no need to parse formData to string
  }).done(function () {
    alert('Your mail is sent!');
  }).fail(function (error) {
    alert('Oops... ' + JSON.stringify(error));
  });
});