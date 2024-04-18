import axios from 'axios';

export const uploadImgDrive= async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post('http://localhost:4000/image/post', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    if (!response.data || response.data.error) {
      throw new Error('Error al subir la imagen');
    }
   
    return `https://drive.google.com/thumbnail?id=${response.data.data.id}`
     

  } catch (error) {
    console.error('Error:', error);
    throw new Error('Hubo un error al subir la imagen.');
  }
};
