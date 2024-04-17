import Button from '@mui/joy/Button';
import SvgIcon from '@mui/joy/SvgIcon';
import { styled } from '@mui/joy';
import CloudUploadSharpIcon from '@mui/icons-material/CloudUploadSharp';

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  width: 0px;
  padding: 0 10px;
  height: 35px;
`;

export default function InputFileUpload({handleImg}) {
    return (
        <Button component="label" variant='#' color="primary" sx={{
            gridColumn: "1/-1", gridRow: "1/-1", marginBottom: "22px" ,
             background: "#000000e6", color:"white", border: "none", paddingLeft:"30px"}}
            startDecorator={
                <SvgIcon>
                   <CloudUploadSharpIcon/>
                </SvgIcon>
            }
        >
            Subir Imagen
            <VisuallyHiddenInput type="file" onChange={handleImg} />
        </Button>
    );
}
