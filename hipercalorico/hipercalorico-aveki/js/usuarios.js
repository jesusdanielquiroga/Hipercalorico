//$(document).ready(function () {
//carga la librería javascript de jquery cuando se carga la página barcos.html por completo
//cuando carga la página html se ejecuta la función: listar()
$(document).ready(function () {
  //configura el aspecto inicial de la pagina
  estadoInicial();
  cuerpoInicial();
  //ejecuta función para enviar petición al ws
   listar();
   $("#cerrarSession").click(function (){
    sessionStorage.removeItem("user");
    location.href="login.html"
});
});

//Esta función ejecuta la petición asincrona al servidor de Oracle, envia una
//petición al ws de tipo GET
function listar() {
  $.ajax({
    // la URL para la petición (url: "url al recurso o endpoint")
    url: "http://localhost:8081/api/user/all",

    // especifica el tipo de petición http: POST, GET, PUT, DELETE
    type: "GET",

    // el tipo de información que se espera de respuesta
    dataType: "json",

    // código a ejecutar si la petición es satisfactoria;
    // la respuesta es pasada como argumento a la función
    success: function (respuesta) {
      //escribe en la consola del desarrollador para efectos de depuración
      console.log(respuesta);
      //recibe el arreglo 'items' de la respuesta a la petición
      listarRespuesta(respuesta);
    },

    // código a ejecutar si la petición falla;
    // son pasados como argumentos a la función
    // el objeto de la petición en crudo y código de estatus de la petición
    error: function (xhr, status) {
      $("#mensajes").html(
        "Ocurrio un problema al ejecutar la petición..." + status
      );
      //$("#mensajes").hide(1000);
    },

    // código a ejecutar sin importar si la petición falló o no
    complete: function (xhr, status) {
      $("#mensajes").html("Obteniendo listado de usuarios...");
      $("#mensajes").hide(3000);
    },
  });
}

/* 
    Esta función se encarga de recorrer el listado de datos 'items' recibido como parametro,
    construir una tabla html en la variable javascript 'tabla',
    acceder al elemento elemento identificado con el id 'listado'
    y modificar su html agregando el contenido de la variable 'tabla'.
    
*/
function listarRespuesta(items) {
  $("#listado").html("");
  $("#listado").show(500);
  //define variable javascript con la definicion inicial de la tabla, la primera fila y los
  //encabezados o títulos de la tabla
  var tabla = `<table border="1">
                  <tr>
                   <th>ID</th>
                    <th>Identificación</th>
                    <th>Nombre</th>
                    <th>Dirección</th>
                    <th>Telefono</th>
                    <th>Email</th>
                    <th>Zona</th>
                    <th>Rol</th>
                    <th colspan="2">Acciones</th>
                  </tr>`;

  //recorre el arreglo de 'items' y construye dinamicamente la fila de datos de la tabla
  for (var i = 0; i < items.length; i++) {
    var texto = `<strong>Nombre:</strong> ${items[i].name}</br><strong>Cargo:</strong> ${items[i].type}`;

    tabla += `<tr>
                   <td>${items[i].id}</td>
                   <td>${items[i].identification}</td>
                   <td>${items[i].name}</td>
                   <td>${items[i].address}</td>
                   <td>${items[i].cellPhone}</td>
                   <td>${items[i].email}</td>
                   <td>${items[i].zone}</td>
                   <td>${items[i].type}</td>
                   <td><button onclick="editarRegistro(${items[i].id})">Editar</button></td>
                   <td><button onclick="mostrarEliminar(${items[i].id},'${texto}')">Borrar</button></td>
                </tr>`;
  }

  //cierra tabla agregando el tag adecuado
  tabla += `</table>`;

  //accede al elemento con id 'listado' y adiciona la tabla de datos a su html
  $("#listado").html(tabla);
}
function estadoInicial() {

    let user = sessionStorage.getItem("user");

    if (user == null)
      location.href = "/login.html";
    else {
      let userJS = JSON.parse(user);
      let typeUser;

      if (userJS.type == "COORD")
          location.href="/login.html";

      else if (userJS.type == "ASE")
          location.href="/login.html";

      $("#userName").html(userJS.name);
    }
}
function cuerpoInicial(){
    $("#nuevo").hide();
    $("#editar").hide();
    $("#listado").show(500);
    $("#nuevoRegistro").show(500);
    $("#eliminar").hide();
    $("#idDelete").hide();
  
    //limpia el contenido de los campos del formulario nuevo
    
    $("#iduser").val("");
    $("#name").val("");
    $("#address").val("");
    $("#cellphone").val("");
    $("#email").val("");
    $("#password").val("");
    $("#zone").val("");
    $("#type").val("");
  
    //ejecuta función para enviar petición al ws
    listar();
  
}