import axios from "axios";

export const getOrders = () => {
    const token = window.localStorage.getItem('token');

    if (!token) {

        console.error('No se encontró ningún token en el almacenamiento local');
        return; 
    }

    const config = {
        headers: {
            'x-access-token': token,
            'Content-Type': 'application/json'
        }
    };

    return axios.get('http://localhost:4000/api/v1/orders', config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error('Error al cargar productos:', error);
            throw error.response;
        });
};
