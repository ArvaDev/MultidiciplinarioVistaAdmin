export const Nombre = (name) => {  
    const regex = /^[a-zA-Z\s]{5,}$/;
 // Expresión regular para validar que contenga solo letras y al menos 5 caracteres

    if (name === ""){
        return "El campo no puede estar vacío";
    } 
    if (!regex.test(name)) {
        return "El nombre debe contener solo letras y tener al menos 5 caracteres";
    } else {
        return null;
    }
};

export const Contraseña = (password) => {
    if (password === ""){
        return "La contraseña no puede estar vacía";
    }
    if (password.length < 4) {
        return "La contraseña debe tener al menos 4 caracteres";
    }
    return null;
};

export const Correo = (correo) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el formato de correo electrónico básico

    if (correo === "") {
        return "El campo no puede estar vacío";
    } 
    if (!regex.test(correo)) {
        return "Ingrese un correo electrónico válido";
    } else {
        return null;
    }
};



// Nuevo añadido
export const Telefono = (telefono) => {
    const telefonoRegex = /^\+[0-9]{1,3}\s?[0-9]{6,}$/;

    if (telefono === ''){
        return "El campo está vacío";
    } else if (!telefono.match(telefonoRegex)) {
        return "El número de teléfono debe comenzar con '+' y contener de 6 a más dígitos";
    } else {
        return null;
    }
}



export const Cantidad = (cantidad) => {
    if (cantidad < 0){
        return "La cantidad no puede ser un numero negativo";
    }else{
        return null;
    }
}

export const Precio = (precio) => {
    if(precio <= 0){
        return "No puedes poner un precio menor";
    }else{
        return null;
    }
}

export const ValidarString = (string) => {
    if (string === ''){
        return "El campo esta vacio"
    }else{
        return null;
    }
}
