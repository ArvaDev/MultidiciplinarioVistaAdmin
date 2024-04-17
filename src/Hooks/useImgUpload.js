import { useState } from "react";

export const useImageUploader = (initialImg) => {
  const [imagePreiew, setImagePreview] = useState(initialImg);
  const [image, setImage] = useState(null);
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState("");

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setMessage("");
      setImagePreview(URL.createObjectURL(selectedFile));
      setImage(selectedFile);
      setIsValid(true);
    } else {
      setMessage("Error: Asegúrate de que has subido un archivo de imagen válido.");
      setIsValid(false);
    }
  };

  return {
    imagePreiew,
    handleImageChange,
    isValid,
    message,
    image
  };
};
