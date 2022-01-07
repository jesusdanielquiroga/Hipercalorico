/**
 * Este evento de JQuery se ejecuta cuando se termina de cargar la libreria
 */
 $(document).ready(function () {
    estadoInicial();

        //si hizo clic en el enlace de cerrar sesion
    $("#cerrarSesion").click(function (){
            sessionStorage.removeItem("user");
            location.href="login.html"
        });
    
});


/**
 * Estado inicial de la pagina, valida si el usuario se encuentra autenticado en la aplicaciòn
 */
 function estadoInicial() {

    let user = sessionStorage.getItem("user");

    if (user== null)
        location.href="login.html";
    else{
        let userJS = JSON.parse(user);
        let typeUser;

        if (userJS.type=='ASE')
            typeUser="ASESOR";
        else if (userJS.type=='ADM')
            typeUser="ADMINISTRADOR";
        else if (userJS.type=='COORD')
            typeUser="COORDINADOR";

            //Valida el perfil para mostrar opciones sobre las que se tien acceso
        if (userJS.type == "ASE")
            opcionesMenu = `<li><a href="ordenes.html" class="btn-md" style="margin: 10px 10px; padding: 20px;">Nueva Orden</a></li>
            <li><a href="misordenes.html" class="btn-md" style="margin: 10px 10px; padding: 20px;">Mis Ordenes</a></li>
            <li><a href="ordenesxestado.html" class="btn-md" style="margin: 10px 10px; padding: 20px;">Ordenes por Estado</a></li>
            <li><a href="ordenesxfecha.html" class="btn-md" style="margin: 10px 10px; padding: 20px;">Ordenes por Fecha</a></li>`;
        else if (userJS.type == "ADM")
            opcionesMenu = `<li><a href="usuarios.html" class="btn-md"style="margin: 10px 10px; padding: 20px;" >Lista de Usuarios</a></li>
                      <li><a href="suplementos.html" class="btn-md" style="margin: 10px 10px; padding: 20px;">Lista de Suplementos</a></li>`;
        else if (userJS.type == "COORD")
            opcionesMenu = `<li><a href="gestionorden.html" class="btn-md">Gestionar Ordenes</a></li>`;
        $("#opciones").html(opcionesMenu);
        $("#userName").html(userJS.name);
        $("#userEmail").html(userJS.email);
        $("#userType").html(typeUser);
        $("#titulo").html("Bienvenido(a): " +  userJS.name);
    }
        
}