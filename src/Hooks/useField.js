import { useState } from "react";
import { ValidateField } from "../utils/Form";
export const useField  = ({type}) =>{
    const [value, setValue] = useState("");
    const [messageError, setMessageError] = useState("");
    const onblur = event =>{
        setValue(event.target.value)
        setMessageError(ValidateField[type](event.target.value)); 
    }
    return {
        type,
        value,
        messageError,
        onblur
    }
}