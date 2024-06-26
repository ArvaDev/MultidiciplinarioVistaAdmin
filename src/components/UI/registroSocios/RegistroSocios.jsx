import './RegistroSocios.css'
import TextField from '../textfield/textfield'
import BlackBtn from '../blackBtn/BlackBtn'
export default function RegistroSocios() {
    return (
        <div className='RegistroSociosClass'>
            <p className='Title'>Registro de Socios</p>
            <div className='Inputs'>
                <div className='flexInput'>
                    <TextField message="Usuario" customClass="SociosInput"/>
                    <TextField message="Telefono" customClass="SociosInput"/>
                </div>
                <TextField message="E-mail"/>
                <BlackBtn customClass="BtnClassSocios" message="Registrar"/>
            </div>
        </div>
    );
}