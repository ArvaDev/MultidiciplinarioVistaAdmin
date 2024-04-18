import axios from "axios";


export const AceptarPedido = (object) => {

    const token = window.localStorage.getItem('token');
    const config = {
        headers: {  
            'x-access-token': token,
            'Content-Type': 'application/json'
        }
    };

    return axios.patch('http://18.233.236.214/api/v1/orders', object, config)
    .then((response) => {
        console.log(response)
        return response.data;
    })
    .catch((error) => {
        console.log('Error al cargar productos:', error);
        throw error.response;
    });
};
