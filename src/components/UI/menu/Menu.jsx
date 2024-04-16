import './Menu.css'
import { Link } from 'react-router-dom';
import MoreMenu from '../More/MoreMenu';


export default function Menu() {
   

    return (
        <div className="MenuClass">
            <Link className='LinkClass' to="/home">Home</Link>
            <Link className='LinkClass' to="/socios">Socios</Link>
            <Link className='LinkClass' to="/home/estadisticas">Estadisticas</Link>
            <Link className='LinkClass' to="/notificaciones">Notificaciones</Link>
            <MoreMenu/>
        </div>
    );
}