import '../Error/Alert.css'
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
export default function AlertError({ message, className }) {
    return (
        <>
            <span className={`error-message-fields ${className}`}> 
                <ErrorOutlineOutlinedIcon/>
              {message} </span>
        </>
    );
}   