function validar(){
    var nombre; apellido; email;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    email = document.getElementById("email").value;
    domicilio = document.getElementById("domicilio").value;
    telefono = document.getElementById("telefono").value;
    comentario = document.getElementById("comentario").value;

    if (nombre === "" || apellido === "" || email === "" || domicilio === "" || telefono === "" || comentario === ""){
        alert("El campo es obligatorio")
        return false;
    }
    else if (nombre-length>30) {
        alert("El nombre es muy extenso")
        return false;
    }
    else if (apellido-length>30) {
        alert("El apellido es muy extenso")
        return false;
    }
    
    else if (telefono-length>14) {
        alert("Máximo 14 caracteres")
        return false;
    }

    else if (isNaN(telefono)) {
        alert("El teléfono ingresado no es un número")
        return false;
        
    }
    
}