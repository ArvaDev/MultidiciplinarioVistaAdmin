import axios from "axios";

export const Signin = (data) => {
    return axios.post('http://localhost:4000/api/auth/signin', {
            data
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error('Error en la solicitud de inicio de sesión:', error);
            throw error;
        });
};
