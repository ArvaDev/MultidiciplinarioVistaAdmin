import './Menu.css'
import { Link } from 'react-router-dom';
export default function Menu() {
    return (
        <div className="MenuClass">
            <Link className='LinkClass' to="/">Login</Link>
            <Link className='LinkClass' to="/Home/Socios">Socios</Link>
            <Link className='LinkClass' to="/Home">Home</Link>
            <Link className='LinkClass' to="/Home/Notificaciones">Notificaciones</Link>
        </div>
    );
}