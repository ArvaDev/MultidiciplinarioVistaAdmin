import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { RiEditLine } from "react-icons/ri";
import EditarProducto from '../../../pages/EditarProducto/EditarProducto';
import '../CardProduct/CardProduct.css'
import { useState } from 'react';
import CustomModal from '../modal/modal';
import * as MessageProduct from "../../../utils/ErrorMessage/MessageProducts"
import { deleteProductById } from '../../../Service/Products';
export default function CardProduct({ name, image, idProduct, productOb}) {
    const nav = useNavigate()
    const [active, setActive] = useState(false);
    const [message, setMessage] = useState({})
    const [recargar, setRecargar] = useState(false);
    const [visibleEdit, setVisibleEdit] = useState("none")
    const deleteProduct = async (id) => {
        setActive(false);
        try {
                
            const correct = await deleteProductById(id);
            if (correct) {
                setMessage(MessageProduct.messageDeleteProduct(true));
                setRecargar(true);
                setActive(true);
            }
        } catch (error) {
            setMessage(MessageProduct.messageDeleteProduct(false));
            setActive(true);
            console.log(error);
        }

    }

    const handleCloseModal = () => {
        setActive(false);
        if (recargar === true){
            window.location.reload();
        }
      
    };
    
    const editar = () => {
        setVisibleEdit("block")
    }

    return (
        <Card sx={{ maxWidth: 300, boxShadow: "0px 0px 5px 1px", height: "auto" }} className='container-cardProducts' >
            <EditarProducto state={visibleEdit} o={productOb}/>
            <CardMedia sx={{ height: 290 }} image={image} title="green iguana" />
            <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h7" component="div" sx={{ fontWeight: "bold" }}> {name} </Typography>
                <Typography variant="h8" component="div"> Lizard </Typography>
            </CardContent>

            <CardActions sx={{ marginTop: "-12px", marginBottom: "10px" }}   >
                <Button onClick={() => deleteProduct(idProduct)} variant="outlined" startIcon={<DeleteIcon />} > Eliminar </Button>
                <Button variant="outlined" onClick={editar} endIcon={<RiEditLine />}> Editar </Button>
            </CardActions>

            <CustomModal
                title={message.title}
                description={message.desripcion}
                colorMessage={message.colorMessage}
                colorClose={message.colorClose}
                active={active}
                onClose={handleCloseModal}
            />


        </Card>
    );
}
