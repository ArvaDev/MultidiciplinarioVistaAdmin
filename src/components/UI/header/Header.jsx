import './Header.css'
import icon from '../../../../public/logo.png'
import Menu from '../menu/Menu';

export default function Header() {
    return (
        <div className="HeaderClass">
            <p>Cooperativa Pimienta Jotiquez S.C.L. <img src={icon} width="20"/></p>
            <div className='Menu'>
                <Menu/>
            </div>
        </div>
    );
}