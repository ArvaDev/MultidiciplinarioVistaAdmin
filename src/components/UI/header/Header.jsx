import './Header.css'
import icon from '../../../../public/logo.png'
import IconLink from '../iconLink/IconLink';
import Menu from '../menu/Menu';

import { FaCircleUser } from "react-icons/fa6";

export default function Header() {
    return (
        <div className="HeaderClass">
            <p>Cooperativa Pimienta Jotiquez S.C.L. <img src={icon} width="20"/></p>
            <div className='Menu'>
                <IconLink icon={<FaCircleUser></FaCircleUser>} text="Login" cssClass="IconClass"/>
                <Menu/>
            </div>
        </div>
    );
}