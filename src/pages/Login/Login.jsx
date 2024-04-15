import './Login.css';
import TextField from "../../components/UI/textfield/textfield";
import BlackBtn from "../../components/UI/blackBtn/BlackBtn";
import AlertError from "../../components/UI/Error/AlertError";
import { Signin } from "../../Service/Login";
import { useField } from "../../Hooks/useField";
import { useState } from 'react';
import { FormDataValidation } from '../../utils/api';
import { AuthContext } from '../../Contexts/AuthContextProvider';
import { useContext } from 'react';

export default function Login() {
    
    const username = useField({ type: "Nombre" });
    const password = useField({ type: "Contraseña" });
    const email = useField({ type: "Correo" });
    const [messageError, setMessageError] = useState("");
    const {login} = useContext(AuthContext);
    const handlerClick = async (event) => {
        try {
            event.preventDefault();
      

            const value = FormDataValidation([username.value, password.value, email.value]); 
            if (!value) {
                const {token, dateUser} = await Signin({username, password, email});
                login(token, dateUser);
                console.log ({token, dateUser});
            } else{
                setMessageError(value);
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
            <div className="LoginClass">
            <form onSubmit={handlerClick} className="Form">
                <div className="container-fields">
                    <span className="sesion-title">Inicio de sesión <img src="../../../public/logo.png" height={"30px"} />  </span>
                    <TextField message="Usuario: " customClass="LoginInput" onblur={username.onblur} />
                    {username.messageError && <AlertError message={username.messageError} />}
                    <TextField message="Email: " customClass="LoginInput" onblur={email.onblur} />
                    {email.messageError && <AlertError message={email.messageError} />}
                    <TextField message="Contraseña: " customClass="LoginInput" type="password" onblur={password.onblur} />
                    {password.messageError && <AlertError message={password.messageError} />}
                    <BlackBtn message="Iniciar sesión" width="100%" type={'submit'} />
                    {messageError && <AlertError message={messageError} />}
                </div>
            </form>
            <div className="Image"> <p>Cooperativa pimienta Jotiquetz</p> </div>
        </div>

    );
}

