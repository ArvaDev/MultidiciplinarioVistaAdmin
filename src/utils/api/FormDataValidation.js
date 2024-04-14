
const FormDataValidation = (data) => {
    let messageError = "";

    if (data.length == 0) {
        messageError = "Por favor, complete todos los campos.";
    } else {
        for (let i = 0; i < data.length; i++) {
            if (!data[i] || data[i].trim() === "") {
                messageError = "Por favor, complete todos los campos.";
                break; // Detenemos la iteración en cuanto encontramos un campo vacío
            }
        }
    }

    return messageError;
};

export default FormDataValidation;