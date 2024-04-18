import './Notificaciones.css';
import Header from '../../components/UI/header/Header';
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
                console.log(ordersData)
                setOrders(ordersData.orders);
            } catch (error) {
                console.log(error);
            }
        };
        fetchOrders();
    }, []);
    return (
        <div className='NotificacionesClass'>
            <Header />
            <TitleLabel title={`Notificaciones`} />
            <div className='ContainerNot'>
                {(
                    orders !== undefined ?
                    orders.map((order, index) => (
                        <Notificacion
                            key={order._id} 
                            user={order.buyerData.name} 
                            mail={order.buyerData.email} 
                            id={order._id}
                            status={order.status}
                            productos={order.products}
                        />
                    )) :
                    <p>No hay productros disponibles</p>
                )}
            </div>
        </div>
    );
    
}
