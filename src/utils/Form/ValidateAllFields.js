
export const ValidateAllFields = (data) => {
    let messageError = "";
    console.log(data);
    if (data.length == 0) {
        messageError = "Por favor, complete todos los campos.";
    } else {
        for (let i = 0; i < data.length; i++) {
            if (!data[i] || data[i]=== undefined) {
                messageError = "Por favor, complete todos los campos.";
                break; 
            }
        }
    }   

    console.log(messageError)

    return messageError;
};



