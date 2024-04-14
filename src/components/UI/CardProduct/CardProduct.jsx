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
    console.log(image);
    return (
        <Card sx={{ maxWidth: 300, boxShadow: "0px 0px 5px 1px" }} className='container-cardProducts' >
            <CardMedia sx={{ height: 270 }} image={image} title="green iguana" />

            <CardContent sx={{ textAlign: "center" }}>
                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: "bold" }}> {name} </Typography>
                <Typography gutterBottom variant="h7" component="div"> Lizard </Typography>
            </CardContent>

            <CardActions sx={{ marginTop: "-12px" }} >
                <Button variant="outlined" startIcon={<DeleteIcon />} > Eliminar </Button>
                <Button variant="outlined" endIcon={<RiEditLine />}> Editar </Button>
            </CardActions>
            <br /><br />
        </Card>
    );
}
