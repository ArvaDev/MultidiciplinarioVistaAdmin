import { Link } from 'react-router-dom'
import './IconLink.css'

export default function IconLink({cssClass, text, icon}) {
    return (
        <Link className={`IconLinkClass ${cssClass}`}>
            <p className='Icon'>{icon}</p>
            <p>{text}</p>
        </Link>
    );
}