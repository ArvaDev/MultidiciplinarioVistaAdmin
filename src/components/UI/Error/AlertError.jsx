import Alert from '@mui/material/Alert';

export default function AlertError({ message }) {
    return (
        <>
            <Alert severity="error" sx={{
                background: "none",
                display: "flex",
                alignItems: "center",
                width: "70%",
                marginTop: "-18px",
                marginBottom: "-10px",
                color:"red"
            }} className='error' >{message}</Alert>
        </>
    );
}   