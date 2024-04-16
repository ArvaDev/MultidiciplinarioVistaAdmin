import { useState } from "react";
import { ValidateField } from "../utils/api";

export const useField  = ({type}) =>{
    const [value, setValue] = useState("");
    const [messageError, setMessageError] = useState("");
    const [selectedImage, setSelectedImage] = useState("");
    const [showImg, setImgShow] = useState("")
    const onblur = event =>{
        setValue(event.target.value)
        setMessageError(ValidateField[type](event.target.value)); 
    }

    const handleImageChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.type.startsWith("image/")) {
          setMessageErrorImg("");
          setImgShow(URL.createObjectURL(selectedFile));
          setSelectedImage(selectedFile);
        } else {
          setMessageErrorImg("Error, Asegúrate de que has subido un archivo de imagen válido.");
        }
      };

    return {
        type,
        value,
        messageError,
        onblur,
        selectedImage,
        handleImageChange,
        showImg
    }

}







