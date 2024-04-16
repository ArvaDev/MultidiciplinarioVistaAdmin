import './RegisterSocio.css';
import TextField from "../../components/UI/textfield/textfield";
import TransparentBtn from '../../components/UI/transparentBtn/TransparentBtn';
import AlertError from "../../components/UI/Error/AlertError";
import { Signin } from "../../Service/Login";
import { useField } from "../../Hooks/useField";
import { useState } from 'react';
import { ValidateField } from '../../utils/api';
import Header from '../../components/UI/header/Header';


export default function RegisterSocios() {

    const tel = useField({ type: "Telefono" })
    const user = useField({ type: "Nombre" })
    const pass = useField({ type: "Contraseña" })
    const mail = useField({ type: "Correo" })
    const img = useField({type: "Image"});
    const [image, setImg] = useState("https://cdn.urbantecno.com/urbantecno/s/2023-01-05-11-27-elon-musk.png");

    return (
        <div className='container-all'>
            <Header />
            <div className="containerForm">
                <div className="title">
                    <h2>Registro de Socio</h2>
                    <span>Con su incorporación, el grupo se fortalece aún más.</span>
                </div>
                <form action="" className='form-regiterSocio'>
                    <div className="container-fields">
                        <TextField message="Usuario: " customClass="LoginInput" onblur={user.onblur} />
                        {user.messageError && <AlertError message={user.messageError} />}
                        <TextField message="Contraseña: " customClass="LoginInput" type="password" onblur={pass.onblur} />
                        {pass.messageError && <AlertError message={pass.messageError} />}
                        <TextField message="Telefono: " customClass="LoginInput" type="text" onblur={tel.onblur} />
                        {tel.messageError && <AlertError message={tel.messageError} />}
                        <TextField message="Email: " customClass="LoginInput" type={"text"} onblur={mail.onblur} />
                        {mail.messageError && <AlertError message={mail.messageError} />}
                    </div>

                    <div className="container-img">
                        <img src={image} alt="" className='upload-img' />
                        <TransparentBtn message={"Agregar"} customClass={'width'} />
                         {img.messageError && <AlertError message={img.messageError} />}
                    </div>
                    <button className='agregarSocio' >Agregar Socio</button>
                </form>

            </div>
        </div>


    );
}

