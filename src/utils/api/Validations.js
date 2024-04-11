export const Name = (name) => {  
    const regex = /^[a-zA-Z]{5,}$/; // Crear expresión regular correctamente

    if (name === ""){
        return "el campo no puede estar vacío";
    } 
    if (!regex.test(name)) {
        return "solo debe de contener caracteres y que sea un mínimo de 5 caracteres";
    } else {
        return null;
    }
};



