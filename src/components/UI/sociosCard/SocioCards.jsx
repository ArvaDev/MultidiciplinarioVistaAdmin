import './SocioCards.css'
import { FaTrashCan } from "react-icons/fa6"
export default function SocioCards({name, mail, tel, perfil}) {
    return (
        <div className='SocioCardsClass'>
            <div className='Icon'> 
                <img src={perfil} alt="" className='perfil-avatar' />
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