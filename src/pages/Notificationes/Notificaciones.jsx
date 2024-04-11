import './Notificaciones.css'
import Header from '../../components/UI/header/Header'
import Notificacion from '../../components/UI/notificacion/Notificacion';
import TitleLabel from '../../components/UI/titleLabel/TitleLabel';
import { BiBell } from 'react-icons/bi';
import { notiApi } from '../../utils/api/notiApi'

export default function Notificaciones() { 
    return (
        <div className='NotificacionesClass'>
            <Header />
            <TitleLabel title={`Notificaciones`}/>
            <div className='ContainerNot'>
                {notiApi.map(o => (
                    <Notificacion user={o.socio} mail={o.correo} products={o.productos} id={o.id} status={o.status} productos={o.productos} />
                ))}
            </div>
        </div>
    );
}