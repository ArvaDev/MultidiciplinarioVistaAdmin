import axios from "axios";

const GetStatics = () => {
    
    const token = window.localStorage.getItem('token');
    
    const date ={
        "startDate": "2024-02-31",
         "endDate": "2024-04-31"
      
    }
    const config = {
        headers: {
            'x-access-token': token,
            'Content-Type': 'application/json'
        }
    };

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
