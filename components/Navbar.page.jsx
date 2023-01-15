import React, { useState } from 'react';
import Logo from '../assets/shop.png'
import Image from 'next/image';
import Link from 'next/link';
import Cart from './Cart.page';
import { useStateContext } from '../context/StateContext.page';
import { AiOutlineShoppingCart } from 'react-icons/ai';


// import IonIcon from '@reacticons/ionicons';
const Navbar = () => {
  const {showCart, setShowCart} = useStateContext();
  return (
    <nav className="bg-white z-10 text-gray text-[18px]  sticky top-0">
      <div className="flex items-center font-medium justify-between">
        <div className="z-50 p-1 w-auto flex justify-around">
          <Image src={Logo} alt="logo" className="md:cursor-pointer h-20 w-20" />
       
        </div>
        <ul className="md:flex hidden items-center gap-8 font-[poppins] ">
          <li>
            <Link href="/"  color="inherit" className=" hover:text-blue font-medium tracking-wider px-3 inline-block "  rel="noopener noreferrer">
              Home
            </Link>
          </li>
          <li>
            <Link href="/#products" className="py-7 duration-1000 transition hover:text-blue active:text-berry px-3 font-medium tracking-wider inline-block">
              Shop
            </Link>
          </li>
          <li>
            <Link href="#sponsors" className="py-7  hover:text-blue active:text-berry font-medium tracking-wider px-3 inline-block">
              Sponsors
            </Link>
          </li>
          <li>
            <Link href="#blog" className="py-7  hover:text-blue active:text-berry font-medium tracking-wider px-3 inline-block">
              Blog
            </Link>
          </li>
         
        </ul>
        <div class="flex items-center relative mr-2">
        
  {/* <div class="xl:w-96 mr-3"> */}
    <div class="input-group hidden relative md:flex flex-wrap items-stretch w-[200px] xl:w-[300px] mr-3">
      <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search..." aria-label="Search" aria-describedby="button-addon2"/>
    {/* </div> */}
</div>
  {/* <!-- Icon --> */}
  <button type='button' onClick={() =>setShowCart(true)} className='pr-3 '> <AiOutlineShoppingCart className='scale-125'/></button>
  {showCart && <Cart/>}

  <div class="dropdown relative">
    <a class="
          text-gray-500
          hover:text-gray-700
          focus:text-gray-700
          mr-4
          dropdown-toggle
          hidden-arrow
          flex items-center
        " href="#" id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell"
        class="w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path fill="currentColor"
          d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z">
        </path>
      </svg>
      <span class="text-white bg-blue absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">1</span>
    </a>
  </div>
  <div class="dropdown relative">
    <a class="dropdown-toggle flex items-center hidden-arrow" href="#" id="dropdownMenuButton2" role="button"
      data-bs-toggle="dropdown" aria-expanded="false">
      <Image src="" class="rounded-full"
       height={30} width={30} alt="" loading="lazy" />
    </a>
  </div>
  </div>
  
      </div>
      
    </nav>
  );
};

export default Navbar;