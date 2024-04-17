import './SocioCards.css'
import { useState } from 'react';
import { FaTrashCan } from "react-icons/fa6"
import * as MessageSocios from "../../../utils/ErrorMessage/MessageSocios"
import { deleteByIdSocios } from '../../../Service/Socios';
import CustomModal from '../modal/modal';

export default function SocioCards({ name, mail, tel, perfil, idSocio }) {

    const [active, setActive] = useState(false);
    const [message, setMessage] = useState({})
    const [recargar, setRecargar] = useState(false);

    const deleteSocio = async (id) => {
        setActive(false);
        try {
                
            const correct = await deleteByIdSocios(id);
        
            if (correct) {
                setMessage(MessageSocios.messageDeleteSocio(true));
                setRecargar(true);
                setActive(true);
            }
        } catch (error) {
            setMessage(MessageSocios.messageDeleteSocio(false));
            setActive(true);
            console.log(error);
        }

    }

    const handleCloseModal = () => {
        setActive(false);
        if (recargar === true){
            window.location.reload();
        }
      
    };

    return (

            <>
            
        <div className='SocioCardsClass'>
            <div className='Icon'>
                <img src={perfil} alt="" className='perfil-avatar' />
            </div>
            <div className='Data'>
                <p className='C'>{name}</p>
                <p className='N'>{mail}</p>
                <p className='N'>{tel}</p>
            </div>
            <button className='TrashButton' onClick={()=> deleteSocio(idSocio)}>
                <FaTrashCan />
            </button>

        </div>
            <CustomModal
             title={message.title}
             description={message.descripcion}
             colorMessage={message.colorMessage}
             colorClose={message.colorClose}
             active={active}
             onClose={handleCloseModal}
           />
            </>

    );
}