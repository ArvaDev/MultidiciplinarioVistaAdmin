import axios from "axios";

const date = {
    "startDate": "2024-02-31",
    "endDate": "2024-04-31"
};

const config = {
    headers: {
        'x-access-token': `${window.localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    }
};

const GetStatics = () => {
    return axios.post(`http://localhost:4000/api/v1/reports/`, date, config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error('Error al cargar el producto:', error);
            throw error.response;
        });
}

export default GetStatics;
