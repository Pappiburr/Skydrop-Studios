import React from 'react'
import ButtonComponent from '../button/button-component'
const Intro: React.FC = () => {
    return(
        <header  className="w-full h-screen flex justify-center items-center text-center bg-main-bg">
            <h1 className='text-7xl font-roboto-slab text-main-text'> Welcome to Skydrop Studios</h1>
            <ButtonComponent />
        </header>
    );
};

export default Intro;