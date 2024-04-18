import axios from "axios";

export default acepetSales = (object)=>{

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
            console.log('Error al aceptar los pedidos', error);
            throw error.response;
        });

}