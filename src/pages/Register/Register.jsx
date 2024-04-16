import TextField from '../../components/UI/textfield/textfield';
import BlackBtn from '../../components/UI/blackBtn/BlackBtn';
import TransparentBtn from '../../components/UI/transparentBtn/TransparentBtn';
import Header from '../../components/UI/header/Header';
import { useField } from '../../Hooks/useField';
import './Register.css'
function Register() {
    const productName = useField({type: "Nombre"})
    const productPrecio = useField({type: "Precio"})
    const productMarca = useField({type: "ValidarString"})
    const productAmount = useField({type: "Cantidad"})
    return (
       <div>
        <Header/>
         <form action="" className="Register">
            <div className="Form">
                <p>Registro de Productos</p>
                <h5>Jotiquetz</h5>
                <div className='flexInput'>
                    <TextField message="Nombre" customClass="textfieldClass" onblur={productName} />
                    <TextField message="Marca" customClass="textfieldClass" onblur={productMarca} />
                </div>
                <div className='flexInput'>
                    <TextField message="Cantidad" customClass="textfieldClass" onblur={productPrecio}/>
                    <TextField message="Precio" customClass="textfieldClass" onblur={productAmount}/>
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
       </div>
    );
}
export default Register;
