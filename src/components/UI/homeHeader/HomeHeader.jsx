import './HomeHeader.css'
import icon from '../../../../public/logo.png'
import IconLink from '../iconLink/IconLink';
import Menu from '../menu/Menu';

import { FaCircleUser } from "react-icons/fa6";

export default function HomeHeader() {
    return (
        <div className="HomeHeaderClass">
            <p>Cooperativa Pimienta Jotiquez S.C.L. <img src={icon} width="20"/></p>
            <div className='Menu'>
                <IconLink icon={<FaCircleUser></FaCircleUser>} text="Login"/>
                <Menu/>
            </div>
        </div>
    );
}