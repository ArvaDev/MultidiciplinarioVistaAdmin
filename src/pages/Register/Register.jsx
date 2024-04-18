import './Register.css'
import TextField from '../../components/UI/textfield/textfield';
import BlackBtn from '../../components/UI/blackBtn/BlackBtn';
import TransparentBtn from '../../components/UI/transparentBtn/TransparentBtn';
import Header from '../../components/UI/header/Header';
import { useField } from '../../Hooks/useField';
import TextArea from '../../components/UI/textArea/TextArea';
import { addProduct } from '../../Service/Products';
import { useImageUploader } from '../../Hooks/useImgUpload'
import { FormDataValidation } from '../../utils/Form';
import CustomModal from '../../components/UI/modal/modal';
import { useState } from 'react';
import { uploadImgDrive } from '../../Service/UploadImage';
import { MessageAddProduct } from '../../utils/ErrorMessage/MessageProducts';
 
function Register() {
    const productName = useField({ type: "Nombre" })
    const productPrecio = useField({ type: "Precio" })
    const productDescription = useField({ type: "ValidarString" })
    const productAmount = useField({ type: "Cantidad" })
    const productPresen = useField({ type: "ValidarString" })
    const Marca = useField({ type: "ValidarString" })
    const img = useImageUploader("https://i.imgur.com/zlZRPCT.jpg")
    const [active, setActive] = useState(false);
    const [message, setMessage] = useState({})
    const [messageError, setMessageError] = useState(null);

    const enviarObjeto = async (event) => {
        try {
        
            event.preventDefault();
            const value = FormDataValidation.ValidateAllFields([productName.value, productPrecio.value, Marca.value, productAmount.value, productDescription.value]);
            if (!value && !img.message) {
                const getUrlImg = await uploadImgDrive(img.image);
                console.log(getUrlImg);
                const response = await addProduct({
                    name: productName.value,
                    description: productDescription.value,
                    imgUrl: getUrlImg,
                    price: productPrecio.value,
                    amount: productAmount.value,
                    typeProduct: Marca.value,
                    content: productPresen.value
                })
                
                setMessage(MessageAddProduct(true))
                setActive(true);

            } else{
                setMessageError(value);
            }
        } catch (err) {
            setMessage(MessageAddProduct(false))
            setActive(true);
            console.error(err)
        }

      


    }
    const handleCloseModal = () => { setActive(false) };
    return (
        <>
            <Header />
            <div className='header-typeForm'>
                <p>Registro de Productos</p>
                <span>Jotiquetz</span>
            </div>
            <div className='RegisterClass'>
                <form  onSubmit={enviarObjeto} className="Register">
                    <div className="Form">

                        <div className='flexInput name'>
                            <TextField message="Nombre" customClass="textfieldClass3" onblur={productName.onblur} required />
                        </div>
                        <div className='flexInput'>
                            <TextField min={0} type="number" message="Cantidad" customClass="textfieldClass" onblur={productAmount.onblur} required />
                            <TextField min={0} type="number" message="Precio" customClass="textfieldClass" onblur={productPrecio.onblur} required />
                        </div>
                        <div className='flexInput'>
                            <TextField message="Marca del producto" customClass="textfieldClass" onblur={Marca.onblur} value="Ejemplo: Pimez" required />
                            <TextField message="Presentación" customClass="textfieldClass" onblur={productPresen.onblur} value="Ejemplo: 100 ml de miel en tarro" required />
                        </div>
                        <div className="flex-img">
                            <TextArea message="Descripcion" onBlur={productDescription.onblur} />
                            <img src="#" alt="" />
                        </div>
                        <div className="Update-responsive" style={{ backgroundImage: `url(${img.imagePreiew})` }}>
                            <TransparentBtn message={"Subir"} customClass={"TBClass"} handleImg={img.handleImageChange} />
                        </div>
                        <BlackBtn message="Agregar"  type='submit' />
                    </div>
                    <div className="Update" style={{ backgroundImage: `url(${img.imagePreiew})` }}>
                        <TransparentBtn message={"Subir"} customClass={"TBClass"} handleImg={img.handleImageChange} />
                    </div>
                </form>
            </div>
            <CustomModal    
                onClose={handleCloseModal}
                title={message.title}
                description={message.descripcion }
                colorMessage={message.colorMessage}
                colorClose={message.colorClose}
                active={active}  />
        </>
    );
}
export default Register;