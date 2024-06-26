import TextField from '../../components/UI/textfield/textfield';
import BlackBtn from '../../components/UI/blackBtn/BlackBtn';
import TransparentBtn from '../../components/UI/transparentBtn/TransparentBtn';
import Header from '../../components/UI/header/Header';
import { useChangeValueField } from '../../Hooks/useChangeValueField';
import TextArea from '../../components/UI/textArea/TextArea';
import { useChangeImgUpload } from '../../Hooks/useChangevalueImg';
import './EditarProducto.css'
import { uploadImgDrive } from '../../Service/UploadImage';
import { FormDataValidation } from '../../utils/Form';
import { updateProduct } from '../../Service/Products';

export default function EditarProducto({ state, o }) {

    const productName = useChangeValueField({ type: "Nombre", valueDefect: o.name })
    const productPrecio = useChangeValueField({ type: "Precio", valueDefect: o.price })
    const productAmount = useChangeValueField({ type: "Cantidad", valueDefect: o.amount })
    const productDescription = useChangeValueField({ type: "ValidarString", valueDefect: o.description })
    const productPresen = useChangeValueField({ type: "ValidarString", valueDefect: o.content })
    const Marca = useChangeValueField({ type: "ValidarString", valueDefect: o.typeProduct })
    const img = useChangeImgUpload(o.imgUrl)

    const enviarObjeto = async (event) => {
        try {
            event.preventDefault();
            const value = FormDataValidation.ValidateAllFields([
                productName.value,
                productPrecio.value,
                Marca.value,
                productAmount.value,
                productDescription.value]);
           
            if (!value && !img.message) {
            
                  const response = await updateProduct({
                      name: productName.value,
                      description: productDescription.value,
                      imgUrl: img.image,
                      price: productPrecio.value,
                      amount: productAmount.value,
                      typeProduct: Marca.value,
                      content: productPresen.value
                  }, o._id)
                  alert ("se modifico correctamente");
            }
        } catch (err) {
            console.error(err)
        }
    }
    const cancelar = () => { location.reload() }
    return (
        <div style={{ display: state }}>
            <Header />
            <form onSubmit={enviarObjeto} className="EditarProductosClass">
                <div className="Form">
                    <h5>Jotiquetz</h5>
                    <div className='flexInput name'>
                        <TextField value={productName.valueInitial} message="Nombre" customClass="textfieldClass3" onblur={productName.onblur} onchange={productName.onblur} />
                    </div>
                    <div className='flexInput'>
                        <TextField value={productAmount.valueInitial} min={0} type="number" message="Cantidad" customClass="textfieldClass" onchange={productAmount.onblur} />
                        <TextField value={productPrecio.valueInitial} min={0} type="number" message="Precio" customClass="textfieldClass" onchange={productPrecio.onblur} />
                    </div>
                    <div className='flexInput'>
                        <TextField message="Marca del producto" customClass="textfieldClass" onchange={Marca.onblur} value={Marca.valueInitial} />
                        <TextField message="Presentación" customClass="textfieldClass" onchange={productPresen.onblur} value={productPresen.valueInitial} />
                    </div>
                    <div className="flex-img">
                        <TextArea placeholder={productDescription.valueInitial} message="Descripcion" onBlur={productDescription.onblur}
                            onchange={productDescription.onblur} />
                        <img src="#" alt="" />
                    </div>
                    <div className="Update-responsive" style={{ backgroundImage: `url(${img.imagePreiew})` }}>
                        <TransparentBtn message={"Subir"} customClass={"TBClass"} handleImg={img.handleImageChange} />
                    </div>
                    <BlackBtn message="Agregar" type={'submit'} />
                    <BlackBtn message="Cancelar" onClick={cancelar} />
                </div>
                <div className="Update" style={{ backgroundImage: `url(${img.imagePreiew})` }}>
                    <TransparentBtn message={"Subir"} customClass={"TBClass"} handleImg={img.handleImageChange} />
                </div>
            </form>
        </div>
    );
}