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
        url: "http://localhost:8081/api/supplements/all",
        
        // especifica el tipo de petición http: POST, GET, PUT, DELETE
        type: 'GET',

        // el tipo de información que se espera de respuesta
        dataType: 'json',

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
            $("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);
            //$("#mensajes").hide(1000);
        },

        // código a ejecutar sin importar si la petición falló o no
        complete: function (xhr, status) {
            $("#mensajes").html("Obteniendo listado de suplementos...");
            $("#mensajes").hide(4000);
        }
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
                    <th>Referencia</th>
                    <th>Marca</th>
                    <th>Categoria</th>
                    <th>Objetivo</th>
                    <th>Descripción</th>
                    <th>Disponibilidad</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Imagen</th>
                    <th colspan="2">Acciones</th>
                  </tr>`;
                  
    //recorre el arreglo de 'items' y construye dinamicamente la fila de datos de la tabla
    for (var i=0; i < items.length; i++) {
        var texto = `<strong>Marca:</strong> ${items[i].brand}</br><strong>Descripción:</strong> ${items[i].description}`;
        var idr =`${items[i].reference}`;
        tabla +=`<tr>
                  <td>${items[i].reference}</td>
                   <td>${items[i].brand}</td>
                   <td>${items[i].category}</td>
                   <td>${items[i].objetivo}</td>
                   <td>${items[i].description}</td>
                   <td>${items[i].availability}</td>
                   <td>${items[i].price}</td>
                   <td>${items[i].quantity}</td>
                   <td>${items[i].photography}</td>
                   <td><button onclick="editarRegistro('${idr}')">Editar</button></td>
                   <td><button onclick="mostrarEliminar('${idr}','${texto}')">Borrar</button></td>
                   </tr>`;
    }

    //cierra tabla agregando el tag adecuado
    tabla +=`</table>`;

    //accede al elemento con id 'listado' y adiciona la tabla de datos a su html
    $("#listado").html(tabla);
}
function estadoInicial() {

    let user = sessionStorage.getItem("user");
  
    if (user == null) location.href = "/login.html";
     
    else {
      let userJS = JSON.parse(user);
      let typeUser;

      if (userJS.type == "ASE")
        location.href="/login.html";
      else if (userJS.type == "COORD")
        location.href="/login.html";
  
    $("#userName").html(userJS.name);

  
   
    }
}


function cuerpoInicial(){
    $("#nuevo").hide();
    $("#editar").hide();
    $("#listado").show(500);
    $("#nuevoRegistro").show(500)
    $("#eliminar").hide(); 
    $("#idDelete").hide();

    //limpia el contenido de los campos del formulario nuevo
    $("#reference").val(""),
    $("#brand").val(""),
    $("#category").val(""),
    $("#objetivo").val(""),
    $("#price").val("")
    $("#availability").val("")
    $("#description").val("")
    $("#quantity").val("")
    $("#photography").val("")

    //ejecuta función para enviar petición al ws
    listar();
}