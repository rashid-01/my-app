import React from 'react';
import { Button } from 'react-bootstrap';

function AppButton(props) {
    const {variant, size, buttonText, isDisabled} = props
    return (
        isDisabled ? 
            <Button variant={variant} size={size} disabled>{buttonText}</Button> : 
            <Button variant={variant} size={size}>{buttonText}</Button>
    )
}

export default AppButton;