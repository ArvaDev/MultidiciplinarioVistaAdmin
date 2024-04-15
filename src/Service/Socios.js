
import axios from "axios";

const config = {
    headers: {
        'x-access-token': `${window.localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    }
};


export const getSocios = () => {

    return axios.get(`http://localhost:4000/api/users`, config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error('Error al cargar el producto:', error);
            throw error.response;
        });
}
