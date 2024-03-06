import TextField from '../../components/textfield/textfield';
import BlackBtn from '../../components/blackBtn/BlackBtn';
import TransparentBtn from '../../components/transparentBtn/TransparentBtn';

import './Register.css'
function Register() {
    return (
        <div className="Register">
            <div className="Header"></div>
            <div className='Container'>
                <div className='Form'>
                    <p>Registro de productos</p>
                    <h5>Jotiquetz</h5>
                    <div className='flexInput'>
                        <TextField message="Nombre" customClass="textfieldClass"/>
                        <TextField message="Marca" customClass="textfieldClass"/>
                    </div>
                    <TextField message="Descripción *"/>
                    <BlackBtn message="Agregar"/>
                </div>
                <div className='Update'>
                    <TransparentBtn message="Subir" customClass="TBClass"/>
                </div>
            </div>
        </div>
    );
}
export default Register;