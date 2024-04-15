import './Notificaciones.css'
import Header from '../../components/UI/header/Header'
import Notificacion from '../../components/UI/notificacion/Notificacion';
import TitleLabel from '../../components/UI/titleLabel/TitleLabel';
import { getOrders } from '../../Service/Orders';
import { useState, useEffect } from 'react';
export default function Notificaciones() {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const ordersData = await getOrders();
                setOrders(ordersData.orders);

            } catch (error) {
                console.log(error);
            }
        }
        fetchOrders();
    }, []);
    return (
        <div className='NotificacionesClass'>
            <Header />
            <TitleLabel title={`Notificaciones`} />
            <div className='ContainerNot'>
                {orders.map((orders, index) => (
                    <Notificacion
                        key={orders._id} 
                        user={orders.buyerData.name} 
                        mail={orders.buyerData.email} 
                        id={orders._id}
                        status={orders.status}
                        productos={orders.products}
                    />
                ))}
            </div>
        </div>
    );
}
