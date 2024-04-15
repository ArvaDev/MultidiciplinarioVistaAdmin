import axios from "axios";

export const getOrders = () => {
    const f = {
        "startDate": "2024-02-31",
         "endDate": "2024-04-31"
    }
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MWQ2YTVlMGYwMTQ4M2QyNmI4OTY1NiIsImlhdCI6MTcxMzIwNTE3NCwiZXhwIjoxNzEzMjA2MDc0fQ.y9uhcc0ng94rszuS7oUpS9sk7DyZt60z_JzSN2UMLPU'

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

    return axios.get('http://18.233.236.214/api/v1/reports/', f, config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error('Error al cargar productos:', error);
            throw error.response;
        });
};
