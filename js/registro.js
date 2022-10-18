//Curso Básico de Javascript 22.- [Practica] Como validar un formulario sencillo
//Fuente: https://www.youtube.com/watch?v=VLFBHnkC-vc
(function () {
  //Variables
  var formregistro = document.getElementsByName('formregistro')[0],
      elementos = formregistro.elements,
      boton = document.getElementById('botonEnviar');

  var validarApellido = function (e) {
    if (formregistro.apellido.value == 0) {
      alert("Completa el campo Apellido");
      e.preventDefault();
      //https://www.w3schools.com/jsref/event_preventdefault.asp
      //Evita que un enlace abra la URL
    }
  };

  var validarNombre = function (e) {
    if (formregistro.nombre.value == 0) {
      alert("Completa el campo nombre");
      e.preventDefault();
    }
  };

  var validarEmail = function (e) {
    if (formregistro.email.value == 0) {
      alert("Completa el campo Email");
      e.preventDefault();
    }
  };

  var validarGenero = function (e) {
    if (formregistro.genero.value == 0) {
      alert("Completa el campo Género");
      e.preventDefault();
    }
  };

  var validarIdioma = function (e) {
    if (formregistro.idioma.selectedIndex == 0) {
      alert("Completa el campo Idioma");
      e.preventDefault();
    }
  };

  var validarCumpleanos = function (e) {
    if (formregistro.cumpleanos.value == 0) {
      alert("Completa el campo Cumpleaños");
      e.preventDefault();
    }
  };

  var validarRadio = function (e) {
    if (formregistro.redes[0].checked == true ||
      formregistro.redes[1].checked == true ||
      formregistro.redes[2].checked == true ||
      formregistro.redes[3].checked == true ||
      formregistro.redes[4].checked == true ||
      formregistro.redes[5].checked == true) {
    } else {
      alert("Completa el campo Redes");
      e.preventDefault();
    }
  };

  var validarPassword = function (e) {
    if (formregistro.password.value == 0) {
      alert("Completa el campo Contraseña");
      e.preventDefault();
    } else if (formregistro.passwordconfirm.value == 0) {
      alert("Completa el campo Confirmar Contraseña");
      e.preventDefault();
    } else if (formregistro.password != formregistro.passwordconfirm) {
      alert("Las contraseñas no coinciden");
      e.preventDefault();
    }
  };

  var validar = function (e) {
    validarApellido(e);
    validarNombre(e);
    validarEmail(e);
    validarGenero(e);
    validarIdioma(e);
    validarCumpleanos(e);
    validarRadio(e);
    validarPassword(e);
  };

  formregistro.addEventListener("submit", validar);
}());


// the form id is formregistro
$('#formregistro').on('submit', function (e) {
  e.preventDefault(); // prevent reload

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
    alert('¡Gracias por registrarse!');
  }).fail(function (error) {
    alert('Oops... ' + JSON.stringify(error));
  });
});