
export const messageDeleteProduct =  (boolean) =>{
    let message = {
        title: "",
            desripcion: "",
            colorMessage:"",
            colorClose: ""
    }

    if (boolean){
           return message = {
            title: "Producto Eliminado",
                desripcion: "El producto seleccionado ha sido eliminado con éxito. Recuerda que siempre puedes agregar nuevos productos cuando lo desees.",
                colorMessage:"",
                colorClose: ""
        } 
    } else{
        return  message = {
            title: "Error al eliminar el producto",
            desripcion: "Lo sentimos, ocurrió un error al intentar eliminar el producto. Por favor, inténtelo nuevamente más tarde",
            colorMessage:"red",
            colorClose: "black"
          }
    }

}

export const MessageAddProduct =  (boolean) =>{
    
    let message = {
        title: "",
        descripcion: "",
        colorMessage: "",
        colorClose: ""
    };
    
    if (boolean) {
        return {
            title: "Producto Agregado",
            descripcion: "¡El producto ha sido agregado exitosamente! Puedes encontrar más detalles en la parte de inicio.",
            colorMessage: "",
            colorClose: ""
        };
    } else {
        return {
            title: "Error al agregar el producto",
            descripcion: "Lo sentimos, ha ocurrido un error al intentar agregar el producto. Por favor, inténtalo nuevamente más tarde.",
            colorMessage: "red",
            colorClose: "black"
        };
    }
    

}