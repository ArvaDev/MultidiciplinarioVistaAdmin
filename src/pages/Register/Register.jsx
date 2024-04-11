import TextField from '../../components/UI/textfield/textfield';
import BlackBtn from '../../components/UI/blackBtn/BlackBtn';
import TransparentBtn from '../../components/UI/transparentBtn/TransparentBtn';

import './Register.css'
function Register() {
    return (
        <form action="" className="Register">
            <div className="Form">
                <p>Registro de Productos</p>
                <h5>Jotiquetz</h5>
                <div className='flexInput'>
                    <TextField message="Nombre" customClass="textfieldClass" />
                    <TextField message="Marca" customClass="textfieldClass" />
                </div>
                <div className='flexInput'>
                    <TextField message="Presentacion" customClass="textfieldClass" />
                    <TextField message="Cantidad" customClass="textfieldClass" />
                </div>
                <div className="flex-img">
                <TextField message="Descripcion"/>
                <img src="#" alt="" />
                </div>
                <div className="Update-responsive">
                <TransparentBtn message={"Subir"} customClass={"TBClass"} />
            </div>
                <BlackBtn message="Agregar"/>
                
            </div>
            <div className="Update">
                <TransparentBtn message={"Subir"} customClass={"TBClass"} />
            </div>
        </form>
    );
}
export default Register;
