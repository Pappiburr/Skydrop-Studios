import React, { useState } from 'react'

type ButtonType = 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'disabled' | 'link' | 'introButton'

interface ButtonProps {
    type?: ButtonType;
    onClick?: () => void;
    children: React.ReactNode;
}

const ButtonTypes = {
    primary: 'bg-main-accent text-main-text px-4 py-2 rounded-md',
    secondary: 'bg-main-accent-hover text-main-text px-4 py-2 rounded-md',
    danger: 'bg-main-danger text-main-text px-4 py-2 rounded-md',
    success: 'bg-main-success text-main-text px-4 py-2 rounded-md',
    warning: 'bg-main-warning text-main-text px-4 py-2 rounded-md',
    disabled: 'bg-main-accent-disabled text-main-text px-4 py-2 rounded-md',
    link: 'bg-main-accent-link text-main-text px-4 py-2 rounded-md',
    introButton: 'bg-intro-button text-main-text px-4 py-2 rounded-md',
}

const ButtonComponent: React.FC<ButtonProps> = ({type = 'primary', onClick, children}) => {
    const [isHover, setIsHover] = useState(false)

    // Optionally add hover effect for introButton
    let className = ButtonTypes[type]
    if (type === 'introButton' && isHover) {
        className = className + ' bg-intro-button-hover'
    }

    return(
     
        <button 
        className={className}
        onClick={onClick}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        disabled={type === 'disabled'}
        >
            {children}
        </button>
    );


};


export default ButtonComponent;