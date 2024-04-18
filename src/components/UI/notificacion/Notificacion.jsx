import './Notificacion.css'
import Bandeja from '../bandeja/Bandeja'
import { useState } from 'react'
import { BiSolidUserCircle } from "react-icons/bi"
import { FaCheckCircle } from "react-icons/fa"
import { FaTrashCan } from "react-icons/fa6"
import { AceptarPedido } from '../../../Service/Notificaciones'

export default function Notificacion({ user, mail, status, id, productos }) {
    const [state, setState] = useState(false)
    const click = () => {
        setState(!state);
    }

    const aceptar =  async () => {
 
        const object = { id: [id],  status: "Completado" }

        try {
            const response = await AceptarPedido(object);
            console.log(response);
            alert("se aceptado el pedido correctamente");
        } catch (error) {
            console.log(error);
        }

    }


    const Cancelar =  async () => {
 
        const object = { id: [id],  status: "Cancelado" }

        try {
            const response = await AceptarPedido(object);
            console.log(response);
            alert("Pedido cancelado");
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className="NotificacionClass" onClick={click}>
            <div className='Container'>
                <input type='checkbox' className='checkBox'></input>
                <div className='perfil'>
                    <BiSolidUserCircle className='icon' />
                    <div className='Text'>
                        <p>{user}</p>
                        {mail}
                    </div>
                </div>
                <p className='Data'>id: {id}</p>
                <p className='Data'>status: {status}</p>
                <button onClick={aceptar} className='Btn'><FaCheckCircle className='iconBtn check' />Aceptar</button>
                <button className='Btn'><FaTrashCan className='iconBtn trash' onClick={Cancelar} />Eliminar</button>
            </div>
            <Bandeja state={state} products={productos} />
        </div>
    );
}