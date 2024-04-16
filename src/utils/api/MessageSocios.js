export const messageDeleteSocio = (boolean) => {
    let message = {
        title: "",
        descripcion: "",
        colorMessage: "",
        colorClose: ""
    };

    if (boolean) {
        message = {
            title: "Socio eliminado",
            descripcion: "socio eliminado con éxito. Recuerda que siempre puedes agregar nuevos socios cuando lo desees.",
            colorMessage: "",
            colorClose: ""
        };
    } else {
        message = {
            title: "Error al eliminar un socio",
            descripcion: "Lo sentimos, ocurrió un error al intentar eliminar el socio. Por favor, inténtelo nuevamente más tarde",
            colorMessage: "red",
            colorClose: "black"
        };
    }

    return message;
};
