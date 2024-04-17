

export const messageDeleteSocio = (success) => {
    const message = {
        title: "",
        descripcion: "",
        colorMessage: "",
        colorClose: ""
    };

    if (success) {
        return {
            title: "Socio eliminado",
            descripcion: "¡El socio se ha eliminado con éxito! No olvides que puedes agregar nuevos socios cuando lo necesites."
        };
    } else {
        return {
            title: "Error al eliminar un socio",
            descripcion: "Lo sentimos, ha ocurrido un error al intentar eliminar al socio. Por favor, inténtalo nuevamente más tarde.",
            colorMessage: "red",
            colorClose: "black"
        };
    }
};


export const messageAddSocio = (success) => {
    const message = {
        title: "",
        descripcion: "",
        colorMessage: "",
        colorClose: ""
    };

    if (success) {
        return {
            title: "¡Socio agregado exitosamente!",
            descripcion: "Felicitaciones, el nuevo socio ha sido agregado con éxito a la comunidad de Jotiquetz. Esperamos que esta incorporación sea beneficiosa para nuestra comunidad y contribuya al crecimiento y éxito de nuestros proyectos futuros."
        };
    } else {
        return {
            title: "Error al agregar un socio",
            descripcion: "Lo sentimos, ha ocurrido un error al intentar agregar al socio. Por favor, inténtalo nuevamente más tarde.",
            colorMessage: "red",
            colorClose: "black"
        };
    }
};
