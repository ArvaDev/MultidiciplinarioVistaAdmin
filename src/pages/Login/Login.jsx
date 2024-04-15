import './Login.css';
import TextField from "../../components/UI/textfield/textfield";
import BlackBtn from "../../components/UI/blackBtn/BlackBtn";
import AlertError from "../../components/UI/Error/AlertError";
import { Signin } from "../../Service/Login";
import { useField } from "../../Hooks/useField";
import { useState, useContext } from 'react';
import { FormDataValidation } from '../../utils/api';
import { AuthContext } from '../../Contexts/AuthContextProvider';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const username = useField({ type: "Nombre" });
    const password = useField({ type: "Contraseña" });
    const email = useField({ type: "Correo" });
    const [messageError, setMessageError] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handlerClick = async (event) => {
        try {
            event.preventDefault();
            setMessageError("");
            const value = FormDataValidation.ValidateAllFields([username.value, password.value, email.value]);

            if (!value) {
                const { data, error } = await Signin({ username, password, email });

                if (data) {
                    const { token, dateUser } = data;
                    login(token, dateUser);
                    navigate("/home");

                } else if (error) {
                    if (error.status === 401) {
                        setMessageError("Credenciales incorrectas. Verifique sus datos.");
                    } else {
                        setMessageError("Error en la solicitud de inicio de sesión. Inténtelo de nuevo más tarde.");
                    }
                }
            } else {
                setMessageError(value);
            }
        } catch (error) {
            console.log(error);
        }
    };
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

