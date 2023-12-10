import { TextField } from '@mui/material';
import React from 'react'

const TextBox = ({ value, setter, type, label, required }) => {
    return (
        <div>
            <TextField id="standard-basic"
                label={label} variant="standard" type={type}
                value={value}
                onChange={(e) => setter(e.target.value)}
                required={required}
                style={{ width: '100%' }}
            />
        </div>
    )
}

export default TextBox;