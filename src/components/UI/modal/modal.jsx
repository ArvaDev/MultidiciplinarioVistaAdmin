import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

function CustomModal({ title, description, colorMessage, colorClose, active, onClose }) {
    
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setOpen(active);
    }, [active]);

    const handleClose = () => {
        setOpen(false);
        onClose();
    };


    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
             
            >
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', 
                            width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4, 
                           }}>
                    <Typography variant="h6" id="modal-title" sx={{ mb: 2, color: `${colorMessage}`, fontWeight: "bold" }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" id="modal-description" sx={{ marginBottom: "10px" }}>
                        {description}
                    </Typography>
                    <Button onClick={handleClose} color="primary" sx={{ color: `${colorClose}`, width: "" }}>
                        Cerrar
                    </Button>

                </Box>
            </Modal>
        </div>
    );
}

export default CustomModal;
