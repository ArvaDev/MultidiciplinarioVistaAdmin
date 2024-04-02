import TextField from "../../components/UI/textfield/textfield";
import BlackBtn from "../../components/UI/blackBtn/BlackBtn";
import './Login.css';
function Login() {
    return (
        <div className="LoginClass">
            <div className="Header"></div>
            <div className="Contend">
                <div className="Form">
                    <p>Inicio de sesión</p>
                    <TextField message="Usuario *"/>
                    <TextField message="Contraseña *" type="password"/>
                    <BlackBtn message="Iniciar sesión" width="30%"/>
                </div>
                <div className="Image">
                    <p>Cooperativa pimienta Jotiquetz</p>
                </div>
            </div>
        </div>
    );
}

export default Login;