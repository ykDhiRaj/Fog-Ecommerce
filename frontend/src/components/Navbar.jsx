import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping, faHeart} from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'



const Navbar = () => {
  const navigate = useNavigate()
  
  return (
    <>
    <div className='bg-black h-16 w-full font-raleway text-white tracking-widest flex fixed top-0 z-50 '>
          <div className='left w-[50%] h-full flex items-center justify-start md:gap-9 gap-4 md:pl-20 pl-3'>
                <h1 onClick={()=>navigate('/')} className='text-center md:text-3xl text-xl tracking-widest cursor-pointer'>*FOG</h1>
                <p onClick={()=>navigate('/mens')} className='cursor-pointer text-xs md:text-base'>mens</p>
                <p onClick={()=>navigate('/womens')} className='cursor-pointer text-xs md:text-base'>womens</p>
          </div>
          <div className='right h-full w-[50%] flex items-center justify-end md:gap-10 gap-7 md:pr-10 pr-5 '>
          <FontAwesomeIcon
           onClick={()=>navigate("/wishlist")}
           className='md:h-6 md:w-6 h-4 w-4 hover:text-red-400 duration-300 cursor-pointer' icon={faHeart}/>
          <FontAwesomeIcon
          onClick={()=>navigate("/cart")}
           className='md:h-6 md:w-6 h-4 w-4 hover:text-blue-400 duration-300 cursor-pointer' icon={faCartShopping} />
          </div>
    </div>
    </>
  )
}

export default Navbar