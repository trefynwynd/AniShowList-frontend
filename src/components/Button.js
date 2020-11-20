import React from 'react';
import './Button.scss';

const STYLES = ['btn--primary', 'btn--secondary'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : Styles[0]

    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : Sizes[0]

    return(
        <LINK to='/' className='btn-mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                { children }
            </button>
        </LINK>
    )
}
