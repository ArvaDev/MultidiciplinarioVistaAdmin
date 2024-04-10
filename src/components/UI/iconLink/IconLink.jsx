import { Link } from 'react-router-dom'
import './IconLink.css'

export default function IconLink({cssClass, text, icon, to}) {
    return (
        <Link className={`IconLinkClass ${cssClass}`} to={to}>
            <p className='Icon'>{icon}</p>
            <p>{text}</p>
        </Link>
    );
}