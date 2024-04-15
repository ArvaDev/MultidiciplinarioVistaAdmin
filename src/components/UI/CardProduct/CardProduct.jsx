import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { RiEditLine } from "react-icons/ri";
import '../CardProduct/CardProduct.css'

export default function CardProduct({ name, image }) {
    return (
        <Card sx={{ maxWidth: 300, boxShadow: "0px 0px 5px 1px", height:"auto" }} className='container-cardProducts' >
            <CardMedia sx={{ height: 290 }} image={image} title="green iguana" />

            <CardContent sx={{ textAlign: "center" }}>
                <Typography  variant="h7" component="div" sx={{ fontWeight: "bold" }}> {name} </Typography>
                <Typography  variant="h8" component="div"> Lizard </Typography>
            </CardContent>

            <CardActions sx={{ marginTop: "-12px", marginBottom:"10px" }}   >
                <Button variant="outlined" startIcon={<DeleteIcon />} > Eliminar </Button>
                <Button variant="outlined"   endIcon={<RiEditLine />}> Editar </Button>
            </CardActions>
        </Card>
    );
}
