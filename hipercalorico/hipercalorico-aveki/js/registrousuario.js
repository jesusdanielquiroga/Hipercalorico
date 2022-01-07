/**
 * Cargar la libreria de Jquery y ubicar el cursor en el campo de registrar
 */
$(document).ready(function () {
  estadoInicial();
  cuerpoInicial();
});

function registrar() {
  //capturar los datos que ingreso el usuario en la pagina
  //let id = $("#id").val();
  let identification = $("#iduser").val();
  let name = $("#username").val();
  let birthtDay = $("#birthtDay").val();
  let monthBirthtDay = $("#monthBirthtDay").val();
  let address = $("#addressUser").val();
  let cellPhone = $("#cellPhone").val();
  let email = $("#emailUser").val();
  let password = $("#password").val();
  let zone = $("#zonaUser").val();
  let type = $("#typeUser").val();

  let datos = {
    id: $("#id").val(),
    identification: $("#iduser").val(),
    name: $("#username").val(),
    birthtDay : $("#birthtDay").val(),
    monthBirthtDay : $("#monthBirthtDay").val(),
    address: $("#addressUser").val(),
    cellPhone: $("#cellPhone").val(),
    email: $("#emailUser").val(),
    password: $("#password").val(),
    zone: $("#zonaUser").val(),
    type: $("#typeUser").val(),
  };

  let datosPeticion = JSON.stringify(datos);

  //utilizo la funcion de JQuery $.ajax para hacer un llamado asincrono
  //a un ws
  if (validaru()) {
    $.ajax({
      //url del servicio
      url: "http://localhost:8081/api/user/new",

      //envio datos capturados por el usuario a la peticion
      data: datosPeticion,

      //tipo de peticion
      type: "POST",

      contentType: "application/JSON",

      //tipo de contenido
      dataType: "json",

      //success: funcion con acciones si todo sale ok
      success: function (respuesta) {
        //escribe en la consola del desarrollador para efectos de depuración
        console.log(respuesta);
        $("#mensajes").show(2000);
        $("#mensajes").html("Registro ingresado...");
        $("#mensajes").hide(2000);
        cuerpoInicial();
      },

      //error: funcion con acciones si hay error
      // código a ejecutar si la petición falla;
      // son pasados como argumentos a la función
      // el objeto de la petición en crudo y código de estatus de la petición
      error: function (xhr, status) {
        //$("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);
        $("#mensajes").show(1000);
        $("#mensajes").html("Error peticion POST..." + status );
      },
      //complete: funcion con al final de la petición
      // código a ejecutar sin importar si la petición falló o no
      complete: function (xhr, status) {
        console.log(status);
      },
    });
  }
}

/**
 * valida si en el id viene un dato nulo, o viene el codigo del usuario
 *
 * Configura mensaje de bienvenida o de error según el caso
 */
function estadoInicial() {

  let user = sessionStorage.getItem("user");

  if (user == null) location.href = "/login.html";
  else {
    let userJS = JSON.parse(user);

    $("#userName").html(userJS.name);

 
   }
}
function cuerpoInicial() {
  $("#username").focus();
  $("#iduser").val("");
  $("#username").val("");
  $("#addressUser").val("");
  $("#cellPhone").val("");
  $("#emailUser").val("");
  $("#password").val("");
  $("#zonaUser").val("");
  $("#typeUser").val("");
  $("#birthtDay").val(""),
  $("#monthBirthtDay").val(""),

  $("#nuevo").hide();
  $("#editar").hide();
  $("#listado").show(500);
  $("#nuevoRegistro").show(500);
  $("#eliminar").hide(); 
  $("#idDelete").hide();
} 
