import React from 'react'
import { useNavigate } from 'react-router-dom';


const Nav: React.FC = () => {

  const navigate = useNavigate();
  return(
    <div className='Flex flex-row justify-between items-center'>
      

      <div className=' grid grid-cols-5 gap-1  outline-1 box-shadow-lg'>
        <div className='text-4xl font-bold pt-9 ps-4  pe-5 text-shadow-black'>Skydrop Studios</div>
        <div className='ps-10 text-shadow-black ' onClick={() => navigate('/home')}>Home</div>
        <div className='ps-10 text-shadow-black ' onClick={() => navigate('/contact')}>Contact</div>
        <div className='ps-10 text-shadow-black'>Tip Jar</div>
      </div>
    </div>
  )
};

export default Nav;