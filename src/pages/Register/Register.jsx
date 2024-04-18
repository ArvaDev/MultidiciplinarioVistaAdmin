import TextField from '../../components/UI/textfield/textfield';
import BlackBtn from '../../components/UI/blackBtn/BlackBtn';
import TransparentBtn from '../../components/UI/transparentBtn/TransparentBtn';
import Header from '../../components/UI/header/Header';
import { useField } from '../../Hooks/useField';
import TextArea from '../../components/UI/textArea/TextArea';
import { addProduct } from '../../Service/Socios';
import { useImageUploader } from '../../Hooks/useImgUpload'
import './Register.css'
import { uploadImgDrive } from '../../Service/UploadImage';
function Register() {
    const productName = useField({ type: "Nombre" })
    const productPrecio = useField({ type: "Precio" })
    const productDescription = useField({type: "ValidarString"})
    const productAmount = useField({ type: "Cantidad" })
    const productPresen = useField({type: "ValidarString"})
    const productType = useField({tyep: "ValidarString"})
    const img = useImageUploader("https://i.imgur.com/zlZRPCT.jpg")
    const enviarObjeto = async () => {
        try{
            const value = FormDataValidation.ValidateAllFields([productName.value, productPrecio.value, productMarca.value, productAmount.value, img.value, productDescription.value]);
            if(!value && img.message){
                const getUrlImg = await uploadImgDrive(img.image);
                const response = await addProduct({
                    name: productName.value,
                    description: productDescription.value,
                    imgUrl: img.value,
                    price: productPrecio.value,
                    amount: productAmount.value,
                    typeProduct: productType.value,
                    content: productPresen.value
                })
                
            }
        }catch(err){
            console.error(err)
        }
    }
    return (
        <div className='RegisterClass'>
            <Header />
            <form action="" className="Register">
                <div className="Form">
                    <p>Registro de Productos</p>
                    <h5>Jotiquetz</h5>
                    <div className='flexInput name'>
                        <TextField message="Nombre" customClass="textfieldClass3" onblur={productName.onblur} required/>
                    </div>
                    <div className='flexInput'>
                        <TextField min={0} type="number" message="Cantidad" customClass="textfieldClass" onblur={productPrecio.onblur} required/>
                        <TextField min={0} type="number" message="Precio" customClass="textfieldClass" onblur={productAmount.onblur} required/>
                    </div>
                    <div className='flexInput'>
                        <TextField message="Tipo de producto" customClass="textfieldClass" onblur={productType.onblur} value="Ejemplo: Miel" required/>
                        <TextField message="Presentación" customClass="textfieldClass" onblur={productPresen.onblur} value="Ejemplo: 100 ml de miel en tarro" required/>
                    </div>
                    <div className="flex-img">
                        <TextArea message="Descripcion" onBlur={productDescription.onblur} />
                        <img src="#" alt=""/>
                    </div>
                    <div className="Update-responsive" style={{backgroundImage: `url(${img.imagePreiew})`}}>
                        <TransparentBtn message={"Subir"} customClass={"TBClass"} handleImg={img.handleImageChange}/>
                    </div>
                    <BlackBtn message="Agregar" onClick={enviarObjeto}/>
                </div>
                <div className="Update" style={{backgroundImage: `url(${img.imagePreiew})`}}>
                    <TransparentBtn message={"Subir"} customClass={"TBClass"} handleImg={img.handleImageChange}/>
                </div>
            </form>
        </div>
    );
}
export default Register;
