import './SocioCards.css'
import { FaTrashCan } from "react-icons/fa6"
import { BiSolidUserCircle } from "react-icons/bi"
export default function SocioCards({name, mail, tel}) {
    return (
        <div className='SocioCardsClass'>
            <div className='Icon'>
                <BiSolidUserCircle/>
            </div>
            <div className='Data'>
                <p className='C'>{name}</p>
                <p className='N'>{mail}</p>
                <p className='N'>{tel}</p>
            </div>
            <button className='TrashButton'>
                <FaTrashCan/>
            </button>
        </div>
    );
}