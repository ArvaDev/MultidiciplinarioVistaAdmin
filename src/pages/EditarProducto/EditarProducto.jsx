import TextField from '../../components/UI/textfield/textfield';
import BlackBtn from '../../components/UI/blackBtn/BlackBtn';
import TransparentBtn from '../../components/UI/transparentBtn/TransparentBtn';
import Header from '../../components/UI/header/Header';
import { useField } from '../../Hooks/useField';
import TextArea from '../../components/UI/textArea/TextArea';
import { addProduct } from '../../Service/Socios';
import { useImageUploader } from '../../Hooks/useImgUpload'
import './EditarProducto.css'
import { uploadImgDrive } from '../../Service/UploadImage';

export default function EditarProducto({state, o}) {
    const productName = useField({ type: "Nombre" })
    const productPrecio = useField({ type: "Precio" })
    const productDescription = useField({type: "ValidarString"})
    const productAmount = useField({ type: "Cantidad" })
    const img = useImageUploader(o.imgUrl)
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
                })
                
            }
        }catch(err){
            console.error(err)
        }
    }
    const cancelar = () =>{
        location.reload()
    }
    return (
        <div style={{display: state}}>
            <Header />
            <form action="" className="EditarProductosClass">
                <div className="Form">
                    <h5>Jotiquetz</h5>
                    <div className='flexInput name'>
                        <TextField value={o.name} message="Nombre" customClass="textfieldClass3" onblur={productName.onblur} required/>
                    </div>
                    <div className='flexInput'>
                        <TextField value={o.amount} type="number" message="Cantidad" customClass="textfieldClass" onblur={productPrecio.onblur} required/>
                        <TextField value={o.price} type="number" message="Precio" customClass="textfieldClass" onblur={productAmount.onblur} required/>
                    </div>
                    <div className="flex-img">
                        <TextArea placeholder={o.description} message="Descripcion" onBlur={productDescription.onblur} />
                        <img src="#" alt=""/>
                    </div>
                    <div className="Update-responsive" style={{backgroundImage: `url(${img.imagePreiew})`}}>
                        <TransparentBtn message={"Subir"} customClass={"TBClass"} handleImg={img.handleImageChange}/>
                    </div>
                    <BlackBtn message="Agregar" onClick={enviarObjeto}/>
                    <BlackBtn message="Cancelar" onClick={cancelar}/>
                </div>
                <div className="Update" style={{backgroundImage: `url(${img.imagePreiew})`}}>
                    <TransparentBtn message={"Subir"} customClass={"TBClass"} handleImg={img.handleImageChange}/>
                </div>
            </form>
        </div>
    );
}