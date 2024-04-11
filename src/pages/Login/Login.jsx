import TextField from "../../components/UI/textfield/textfield";
import BlackBtn from "../../components/UI/blackBtn/BlackBtn";
import SelectVariants from "../../components/UI/Selected/Select";
import { Validate } from "../../utils/api";
import { useState, useEffect } from "react";
import './Login.css';

function Login() {
    const { Name } = Validate;

    // Estados
    const [UserName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const [MesasageError, setMesasageError] = useState("");

    // Manejador del campo de usuario
    const handlerUserName = (event) => { setUserName(event.target.value);};
    // Manejador del campo de contraseña
    const handlerPassword = (event) => { setPassword(event.target.value); };

    useEffect(() => {
        const value = Name(UserName); 
        setMesasageError(value); 
    }, [UserName]); 

    return (
        <div className="LoginClass">
            <form action="" className="Form">
                <div className="container-fields">
                    <span className="sesion-title">Inicio de sesión <img src="../../../public/logo.png" height={"30px"} />  </span>
                    <TextField message="Usuario" customClass="LoginInput" onblur={handlerUserName} />
                    <TextField message="Contraseña" customClass="LoginInput" type="password" onchange={handlerPassword} />
                    <SelectVariants />
                    <BlackBtn message="Iniciar sesión" width="30%" margin={"margin"} to="/Home" />

                </div>
            </form>
            <div className="Image"> <p>Cooperativa pimienta Jotiquetz</p> </div>
        </div>
    );
}

export default Login;
