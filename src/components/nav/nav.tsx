import React from 'react'
import logo from '../../assets/greenish-blue-background.png'

const Nav: React.FC = () => {
  return(
    <div className='Flex  flex-row justify-between items-center'>
      

      <div className=' grid grid-cols-5 gap-3 '>
        <div><img src={logo} alt="logo" className='h-30 w-27' /></div>
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
        <div>Tip Jar</div>
      </div>
    </div>
  )
};

export default Nav;