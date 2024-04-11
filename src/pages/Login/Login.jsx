import TextField from "../../components/UI/textfield/textfield";
import BlackBtn from "../../components/UI/blackBtn/BlackBtn";
import SelectVariants from "../../components/UI/Selected/Select";
import './Login.css';
function Login() {
    return (
        <div className="LoginClass">    
            <form action="" className="Form">
                <div className="container-fields">
                    <span className="sesion-title">Inicio de sesión <img src="../../../public/logo.png" height={"30px"}/>  </span>
                    <TextField message="Usuario" customClass="LoginInput" />
                    <TextField message="Contraseña" customClass="LoginInput" type="password" />
                    <SelectVariants/>
                    <BlackBtn message="Iniciar sesión" width="30%" margin={"margin"} to="/Home" />
                  
                </div>
            </form>
            <div className="Image"> <p>Cooperativa pimienta Jotiquetz</p> </div>
        </div>
    );
}

export default Login;

{/* <div className="LoginClass">
<div className="Contend">
    <p className="MovilTitle">Cooperativa pimienta Jotiquetz</p>
    <form className="Form">
        <div className="container-fields">
        <span className="sesion-title">Inicio de sesión</span>
        <TextField message="Usuario" customClass="LoginInput"/>
        <TextField message="Contraseña" customClass="LoginInput" type="password"/>
        <BlackBtn message="Iniciar sesión" width="30%" to="/Home"/>
        </div>
    </form>
    <div className="Image">
        <p>Cooperativa pimienta Jotiquetz</p>
    </div>
</div>
</div> */}