import axios from "axios";

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

export const Signin = async (data) => {
    const dateUser = {
        username: data.username.value,
        password: data.password.value,
        email: data.email.value
    };

    try {
        const response = await axios.post('http://localhost:4000/api/auth/signin', dateUser, config);
        return { data: response.data };
    } catch (error) {
        console.error('Error en la solicitud de inicio de sesión:', error);
        return { error: error.response };
    }
};


