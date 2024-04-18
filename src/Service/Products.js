import axios from "axios";

export const getProducts = () => {
      const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return axios.get('http://localhost:4000/products', config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error('Error al cargar productos:', error);
            throw error.response;
        });
};

export const getByIdProducts = (idProduct) => {

    const token = window.localStorage.getItem('token');

    const config = {
        headers: {
            'x-access-token': token,
            'Content-Type': 'application/json'
        }
    };

    return axios.get(`http://localhost:4000/products${idProduct}`, config )
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error('Error al cargar el producto:', error);
            throw error.response;
        });
}


export const deleteProductById = (idProduct) => {
    const token = window.localStorage.getItem('token');

    const config = {
        headers: {
            'x-access-token': token,
            'Content-Type': 'application/json'
        }
    };

    return axios.delete(`http://localhost:4000/products/${idProduct}`, config)
        .then((response) => {
            return { message: "Producto eliminado correctamente" };
        })
        .catch((error) => {
            console.error('Error al cargar el producto:', error);
            throw error.response;
        });
}

export const addProduct = (data)=>{
    const token = window.localStorage.getItem('token');
    
    const config = {
        headers: {
            'x-access-token': token,
            'Content-Type': 'application/json'
        }
    };

    return axios.post("http://localhost:4000/products", data, config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error('Error al cargar el producto:', error);
            throw error.response;
        });
}


export const updateProduct = (data, id)=>{
    const token = window.localStorage.getItem('token');
    
    const config = {
        headers: {
            'x-access-token': token,
            'Content-Type': 'application/json'
        }
    };

    return axios.put(`http://localhost:4000/products/${id}`, data, config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error('Error al cargar el producto:', error);
            throw error.response;
        });
}


