import axios from "axios";

const date = {
    "startDate": "2024-02-31",
    "endDate": "2024-04-31"
};

const config = {
    headers: {
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MWQ2YTVlMGYwMTQ4M2QyNmI4OTY1NiIsImlhdCI6MTcxMzIzNDkxMywiZXhwIjoxNzEzMjM1ODEzfQ.9sObXWonc3zixD8VtYnwa_aI0uOHqvrejv7cxjG9JhM',
        'Content-Type': 'application/json'
    }
};

const GetStatics = () => {
    return axios.post(`http://18.233.236.214/api/v1/reports/`, date, config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error('Error al cargar el producto:', error);
            throw error.response;
        });
}

export default GetStatics;
