import axios from "axios";


export const getSocios = () => {

    const token = window.localStorage.getItem('token');

    const config = {
        headers: {
            'x-access-token': token,
            'Content-Type': 'application/json'
        }
    };
    
    return axios.get(`http://localhost:4000/api/users`, config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error('Error al cargar el producto:', error);
            throw error.response;
        });
}


export const deleteByIdSocios = (IdSocio) => {
    const token = window.localStorage.getItem('token');

    const config = {
        headers: {
            'x-access-token': token,
            'Content-Type': 'application/json'
        }
    };
    
    return axios.delete(`http://localhost:4000/api/users/${IdSocio}`, config)
        .then((response) => {
            if (response.status === 204) {
      
                return { message: "Usuario eliminado exitosamente" };
            } else {
    
                return response.data;
            }
        })
        .catch((error) => {
            console.error('Error al cargar el producto:', error);
            throw error.response;
        });
}


