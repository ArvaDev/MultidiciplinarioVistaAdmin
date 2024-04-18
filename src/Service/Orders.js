import axios from "axios";

export const getOrders = () => {

    const token = window.localStorage.getItem('token');
    const config = {
        headers: {  
            'x-access-token': token,
            'Content-Type': 'application/json'
        }
    };

    return axios.get('http://18.233.236.214/api/v1/orders', config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error('Error al cargar productos:', error);
            throw error.response;
        });
};
