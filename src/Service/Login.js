import axios from "axios";

export const Signin = (data) => {
    const dateUser = {
       username:  data.username.value,
        password: data.password.value,
        email: data.email.value
    }


    return axios.post('http://localhost:4000/api/auth/signin', dateUser) 
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error('Error en la solicitud de inicio de sesión:', error);
            throw error.response;
        });
};

