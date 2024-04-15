
import axios from "axios";

const config = {
    headers: {
        'x-access-token': `Bearer ${window.localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    }
};


export const addUsuario = (data) => {

    return axios.post(`http://18.233.236.214/api/users`, data, config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error('Error al cargar el producto:', error);
            throw error.response;
        });
}
