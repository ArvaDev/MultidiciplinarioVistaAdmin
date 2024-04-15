import axios from "axios";

const config = {
    headers: {
        'x-access-token': `Bearer ${window.localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    }
};

export const getProducts = () => {
    return axios.get('http://18.233.236.214/products')
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error('Error al cargar productos:', error);
            throw error.response;
        });
};

export const getByIdProducts = (idProduct) => {
    return axios.get(`http://18.233.236.214/products${idProduct}` )
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error('Error al cargar el producto:', error);
            throw error.response;
        });
}


export const deleteProductById = (idProduct) => {
    const config = {
        headers: {
            'x-access-token': `Bearer ${window.localStorage.getItem('token')}`
        }
    };

    return axios.delete(`http://18.233.236.214/products${idProduct}`, config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error('Error al cargar el producto:', error);
            throw error.response;
        });
}
