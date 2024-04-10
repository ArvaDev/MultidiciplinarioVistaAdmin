import TextField from "../../components/UI/textfield/textfield";
import BlackBtn from "../../components/UI/blackBtn/BlackBtn";
import './Login.css';
function Login() {
    return (
        <div className="LoginClass">
            <div className="Contend">
                <p className="MovilTitle">Cooperativa pimienta Jotiquetz</p>
                <div className="Form">
                    <p>Inicio de sesión</p>
                    <TextField message="Usuario *" customClass="LoginInput"/>
                    <TextField message="Contraseña*" customClass="LoginInput" type="password"/>
                    <BlackBtn message="Iniciar sesión" width="30%" to="/Home"/>
                </div>
                <div className="Image"> {/* <------ que desaparesca en movil */}
                    <p>Cooperativa pimienta Jotiquetz</p>
                </div>
            </div>
        </div>
    );
}

export default Login;