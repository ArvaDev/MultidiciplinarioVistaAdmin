import { useState } from "react";
import { ValidateField } from "../utils/Form";

export const useChangeValueField  = ({type, valueDefect}) =>{
    const [value, setValue] = useState(valueDefect);
    const [valueInitial, setValueInitial] = useState (valueDefect)
    const [messageError, setMessageError] = useState("");


    const onblur = event => {
        setValueInitial(event.target.value)
        setValue(event.target.value)
        setMessageError(ValidateField[type](event.target.value)); 
    }


    return {
        type,
        value,
        messageError,
        onblur,
        valueInitial,
    }
}