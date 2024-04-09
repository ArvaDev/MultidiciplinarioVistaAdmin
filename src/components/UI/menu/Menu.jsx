import './Menu.css'
import { Link } from 'react-router-dom';
import { UsersApi } from '../../../utils/api/UsersApi'
export default function Menu() {
    return (
        <div className="MenuClass">
            <Link className='LinkClass' to="/Home/Socios">Socios</Link>
            <Link className='LinkClass' to="/Home">Home</Link>
            <Link className='LinkClass'>Notificaciones</Link>
            <Link className='LinkClass LinkIcon'>{UsersApi[2].name[0]}</Link>
        </div>
    );
}