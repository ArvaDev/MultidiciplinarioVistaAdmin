import './TransparentBtn.css'
import { useState } from 'react';

function TransparentBtn({message, customClass}) {
    const [selectFile, setSelectFile] = useState(null);

    const fileChange = (event) => {
        const file = event.target.files[0];
        setSelectFile(file);
    }

    return (
        <>
            <input type='file' id='archivo' style={{display: "none"}} onChange={fileChange}></input>  
            <button className={`TransparentBtn ${customClass}`}
            onClick={() => {
                document.getElementById('archivo').click();
            }}  
            >{message}</button>
        </>
    );
}
export default TransparentBtn;