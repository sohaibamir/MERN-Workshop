import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ btnLabel, onClick }) => {
    return (
        <div>
            <Button style={{ marginTop: '20px' }} onClick={onClick} variant="contained">{btnLabel}</Button>
        </div>
    )
}

export default CustomButton;