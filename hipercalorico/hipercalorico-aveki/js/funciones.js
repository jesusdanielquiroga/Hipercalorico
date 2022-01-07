function validaesVacio(dato){
    return !dato.trim().length;
}

function ValidateEmail(valor) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return valor.match(mailformat);
}
/**
 * Al ingresar un nuevo registro:
 * 
 * Ejecuta validaciones campo a campo
 */
function validaru(){
    //obtiene valores
    // let id = $("#id").val();
    let identification = $("#iduser").val();
    let name = $("#username").val();
    let address = $("#addressUser").val();
    let cellPhone = $("#cellPhone").val();
    let email = $("#emailUser").val();
    let password = $("#password").val();
    let zone = $("#zonaUser").val();
    let type = $("#typeUser").val();
    let errores="";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
   /*  if( validaesVacio(id)) {
        errores="Debes asignar un id <br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(2000);
        $("#id").focus();
        $("#mensajes").hide(2000);
        return false;
    }else */
    if( validaesVacio(identification)) {
        errores="Debes ingresar una  identificación<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(2000);
        $("#iduser").focus();
        $("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(name)) {  
        errores="Debes ingresar el nombre de nuestro nuevo campeón<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(2000);
        $("#username").focus();
        $("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(address)) { 
        errores="Debes ingresar una dirección<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(2000);
        $("#addressUser").focus();
        $("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(cellPhone)) { 
        errores="Debes ingresar un número celular<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(2000);
        $("#cellPhone").focus();
        $("#mensajes").hide(2000);
        return false;
    }
    else if( validaesVacio(email)) { 
    errores="Debes ingresar un correo electronico<br>";
    $("#mensajes").html(errores);
    $("#mensajes").show(2000);
    $("#emailUser").focus();
    $("#mensajes").hide(2000);
    return false;
    }
    else if( validaesVacio(password)) { 
        errores="Debes ingresar una contraseña segura<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(2000);
        $("#password").focus();
        $("#mensajes").hide(2000);
        return false;
    }
    else if( validaesVacio(zone)) { 
            errores="Debes ingresar una zona<br>";
            $("#mensajes").html(errores);
            $("#mensajes").show(2000);
            $("#zonaUser").focus();
            $("#mensajes").hide(2000);
            return false;
    }
    else if( validaesVacio(type)) { 
        errores="Debes ingresar el rol de nuestro nuevo integrante <br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(2000);
        $("#typeUser").focus();
        $("#mensajes").hide(2000);
        return false;
    }
    else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}

function validarSuplemento(){
    //obtiene valores
    let reference =$("#reference").val()
    let brand = $("#brand").val()
    let category = $("#category").val()
    let objetivo = $("#objetivo").val()
    let description = $("#description").val()
    let availability = $("#availability").val()
    let price = $("#price").val()
    let quantity = $("#quantity").val()
    let photography = $("#photography").val()
    let errores="";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if( validaesVacio(reference)) {
        errores="Debes asignar una referencia <br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(2000);
        $("#reference").focus();
        $("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(brand)) {
        errores="Debes ingresar una marca<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(2000);
        $("#brand").focus();
        $("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(category)) {  
        errores="Debes ingresar una categoria<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(2000);
        $("#category").focus();
        $("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(objetivo)) { 
        errores="Debes describir el objetivo del producto<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(2000);
        $("#objetivo").focus();
        $("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(description)) { 
        errores="Debes ingresar una breve descripción<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(2000);
        $("#description").focus();
        $("#mensajes").hide(2000);
        return false;
    }
    else if( validaesVacio(availability)) { 
    errores="Debes definir la disponibilidad<br>";
    $("#mensajes").html(errores);
    $("#mensajes").show(2000);
    $("#availability").focus();
    $("#mensajes").hide(2000);
    return false;
    }
    else if( validaesVacio(price)) { 
        errores="Debes ingresar el precio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(2000);
        $("#price").focus();
        $("#mensajes").hide(2000);
        return false;
    }
    else if( validaesVacio(quantity)) { 
            errores="Debes ingresar la cantidad de stock<br>";
            $("#mensajes").html(errores);
            $("#mensajes").show(2000);
            $("#quantity").focus();
            $("#mensajes").hide(2000);
            return false;
    }
    else if( validaesVacio(photography)) { 
        errores="Debes ingresar una imagen atractiva <br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(2000);
        $("#photography").focus();
        $("#mensajes").hide(2000);
        return false;
    }
    else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}
function validarEditar(){
    //obtiene valores
    let id = $("#idEdit").val();
    let identification = $("#iduserEdit").val();
    let name = $("#usernameEdit").val();
    let address = $("#addressUserEdit").val();
    let cellPhone = $("#cellPhoneEdit").val();
    let email = $("#emailUserEdit").val();
    let password = $("#passwordEdit").val();
    let zone = $("#zonaUserEdit").val();
    let type = $("#typeUserEdit").val();
    let errores="";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if( validaesVacio(id)) {
        errores="Debes asignar un id <br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(2000);
        $("#id").focus();
        $("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(identification)) {
        errores="Debes ingresar una  identificación<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(2000);
        $("#iduser").focus();
        $("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(name)) {  
        errores="Debes ingresar el nombre de nuestro nuevo campeón<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(2000);
        $("#username").focus();
        $("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(address)) { 
        errores="Debes ingresar una dirección<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(2000);
        $("#addressUser").focus();
        $("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(cellPhone)) { 
        errores="Debes ingresar un número celular<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(2000);
        $("#cellPhone").focus();
        $("#mensajes").hide(2000);
        return false;
    }
    else if( validaesVacio(email)) { 
    errores="Debes ingresar un correo electronico<br>";
    $("#mensajes").html(errores);
    $("#mensajes").show(2000);
    $("#emailUser").focus();
    $("#mensajes").hide(2000);
    return false;
    }
    else if( validaesVacio(password)) { 
        errores="Debes ingresar una contraseña segura<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(2000);
        $("#password").focus();
        $("#mensajes").hide(2000);
        return false;
    }
    else if( validaesVacio(zone)) { 
            errores="Debes ingresar una zona<br>";
            $("#mensajes").html(errores);
            $("#mensajes").show(2000);
            $("#zonaUser").focus();
            $("#mensajes").hide(2000);
            return false;
    }
    else if( validaesVacio(type)) { 
        errores="Debes ingresar el rol de nuestro nuevo integrante <br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(2000);
        $("#typeUser").focus();
        $("#mensajes").hide(2000);
        return false;
    }
    else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}

function validarSuplementoEdit(){
    //obtiene valores
    let reference =$("#referenceEdit").val()
    let brand = $("#brandEdit").val()
    let category = $("#categoryEdit").val()
    let objetivo = $("#objetivoEdit").val()
    let description = $("#descriptionEdit").val()
    let availability = $("#availabilityEdit").val()
    let price = $("#priceEdit").val()
    let quantity = $("#quantityEdit").val()
    let photography = $("#photographyEdit").val()
    let errores="";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if( validaesVacio(reference)) {
        errores="Debes asignar una referencia <br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(2000);
        $("#referenceEdit").focus();
        $("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(brand)) {
        errores="Debes ingresar una marca<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(2000);
        $("#brandEdit").focus();
        $("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(category)) {  
        errores="Debes ingresar una categoria<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(2000);
        $("#categoryEdit").focus();
        $("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(objetivo)) { 
        errores="Debes describir el objetivo del producto<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(2000);
        $("#objetivoEdit").focus();
        $("#mensajes").hide(2000);
        return false;
    }else if( validaesVacio(description)) { 
        errores="Debes ingresar una breve descripción<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(2000);
        $("#descriptionEdit").focus();
        $("#mensajes").hide(2000);
        return false;
    }
    else if( validaesVacio(availability)) { 
    errores="Debes definir la disponibilidad<br>";
    $("#mensajes").html(errores);
    $("#mensajes").show(2000);
    $("#availabilityEdit").focus();
    $("#mensajes").hide(2000);
    return false;
    }
    else if( validaesVacio(price)) { 
        errores="Debes ingresar el precio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(2000);
        $("#priceEdit").focus();
        $("#mensajes").hide(2000);
        return false;
    }
    else if( validaesVacio(quantity)) { 
            errores="Debes ingresar la cantidad de stock<br>";
            $("#mensajes").html(errores);
            $("#mensajes").show(2000);
            $("#quantityEdit").focus();
            $("#mensajes").hide(2000);
            return false;
    }
    else if( validaesVacio(photography)) { 
        errores="Debes ingresar una imagen atractiva <br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(2000);
        $("#photographyEdit").focus();
        $("#mensajes").hide(2000);
        return false;
    }
    else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}


function upperCaseF(campo) {
    setTimeout(function () {
        campo.value = campo.value.toUpperCase();
    }, 1);
}