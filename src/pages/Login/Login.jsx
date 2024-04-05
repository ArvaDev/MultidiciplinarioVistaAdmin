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
                    <TextField message="Usuario *"/>
                    <TextField message="Contraseña *" type="password"/>
                    <BlackBtn message="Iniciar sesión" width="30%"/>
                </div>
                <div className="Image"> {/* <------ que desaparesca en movil */}
                    <p>Cooperativa pimienta Jotiquetz</p>
                </div>
            </div>
        </div>
    );
}

export default Login;