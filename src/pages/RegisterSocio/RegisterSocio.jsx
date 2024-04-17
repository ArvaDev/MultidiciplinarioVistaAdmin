import './RegisterSocio.css';
import { useState } from 'react';
import TextField from "../../components/UI/textfield/textfield";
import TransparentBtn from '../../components/UI/transparentBtn/TransparentBtn';
import AlertError from "../../components/UI/Error/AlertError";
import { useField } from "../../Hooks/useField";
import Header from '../../components/UI/header/Header';
import { useImageUploader } from '../../Hooks/useImgUpload';
import { addSocio } from '../../Service/Socios';
import { FormDataValidation } from '../../utils/Form';
import CustomModal from '../../components/UI/modal/modal';
import { messageAddSocio } from '../../utils/ErrorMessage/MessageSocios';
import { uploadImgDrive } from '../../Service/UploadImage';

export default function RegisterSocios() {

    const [active, setActive] = useState(false);
    const [message, setMessage] = useState({})
    const [messageError, setMessageError] = useState(null);
    const tel = useField({ type: "Telefono" })
    const user = useField({ type: "Nombre" })
    const pass = useField({ type: "Contraseña" })
    const mail = useField({ type: "Correo" })
    const img = useImageUploader("https://cdn.urbantecno.com/urbantecno/s/2023-01-05-11-27-elon-musk.png")
    const logo = "https://static.wixstatic.com/media/86c540_67c7403a43784f8dbd70b31ddc7e66a2~mv2.png/v1/fill/w_104,h_102,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/86c540_67c7403a43784f8dbd70b31ddc7e66a2~mv2.png";

    const handlerClick = async (event) => {
        try {
            event.preventDefault();
            setMessageError("");
            const value = FormDataValidation.ValidateAllFields([user.value, pass.value, mail.value, tel.value]);

            if (!value && !img.message) {
                console.log(img.message);
                const getUrlImg = await uploadImgDrive(img.image);
                console.log(getUrlImg);
                const response = await addSocio({
                    username :user.value,
                    password :pass.value,
                    email: mail.value,
                    telefono: tel.value,
                    img:getUrlImg});

                setMessage(messageAddSocio(true))
                setActive(true);
                
            } else {
                setMessageError(value);
            }
        } catch (error) {
            setMessage(messageAddSocio(false))
            setActive(true);
            console.log(error);
        }
    };

    const handleCloseModal = () => { setActive(false) };


    return (
        <div className='container-all'>
            <Header />
            <div className="containerForm">
                <div className="title">
                    <h2 className='imgTitle-logo'>Registro de Socio <img src={logo} alt="" className='logo-h2' /> </h2>
                    <span className='description-text'>Con su incorporación, el grupo se fortalece aún más.</span>
                </div>
                <form onSubmit={handlerClick} className='form-regiterSocio'>

                    <div className="container-fields-socio">
                        <TextField
                                message="Usuario: "
                                customClass="LoginInput"
                                onchange={user.onchange}
                                onblur={user.onblur} />
                        {user.messageError && <AlertError message={user.messageError} />}

                        <TextField 
                                message="Contraseña: "
                                customClass="LoginInput"
                                type="password"
                                onblur={pass.onblur} />
                        {pass.messageError && <AlertError message={pass.messageError} />}

                        <TextField 
                                message="Telefono: "
                                customClass="LoginInput"
                                type="text"
                                onblur={tel.onblur}
                                onchange={tel.onblur} />
                        {tel.messageError && <AlertError message={tel.messageError} />}

                        <TextField 
                                message="Email: "
                                customClass="LoginInput"
                                type={"text"}
                                onblur={mail.onblur}
                                onchange={mail.onblur} />
                        {mail.messageError && <AlertError message={mail.messageError} />}
                    </div>

                    <div className="container-img" style={{ backgroundImage: `url(${img.imagePreiew})` }}>
                        <TransparentBtn message={"Agregar"} customClass={'width'} handleImg={img.handleImageChange} />
                        {img.message && <AlertError message={img.message} className={"error-img"} />}
                    </div>

                    <div className="container-button"> 
                        <button className='agregarSocio' type='submit' >Agregar Socio</button>
                       
                    </div>
                    {messageError && <AlertError message={messageError} className={"center-message"} />}
                   
                    <div className="container-button">
                        <p className='decription-add'> Grupo Pimez se enorgulleze en saber que ahora formas parte de ellos.!</p>
                    </div>
                </form>

            </div>
            <CustomModal 
                    onClose={handleCloseModal}
                    title={message.title}
                    description={message.description}
                    colorMessage={message.colorMessage}
                    colorClose={message.colorClose}
                    active={active} />
        </div>


    );
}

