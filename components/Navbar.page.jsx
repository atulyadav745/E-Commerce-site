import React, { useState } from 'react';
import Logo from '../assets/shop.png'
import Avatar from '../assets/avatar.png'
import Image from 'next/image';
import Link from 'next/link';
import Cart from './Cart.page';
import { useStateContext } from '../context/StateContext.page';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useAuth0 } from "@auth0/auth0-react";


// import IonIcon from '@reacticons/ionicons';
const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const {showCart, setShowCart, totalQuantities} = useStateContext();
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
        
  <button type='button' onClick={() =>setShowCart(true)} className='pr-3 '> <AiOutlineShoppingCart className='scale-125 mr-3'/>
  <span class="text-white bg-blue absolute rounded-full text-xs -mt-2.5 py-0 px-1.5">{totalQuantities}</span>
  </button>
  {showCart && <Cart/>}

  {/* login / logout */}
  {
            isAuthenticated ? (
            
              <button class="bg-blue hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log Out
        </button>
             
            ) : (
              <button class="bg-blue hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => loginWithRedirect()}>Log In</button>
              
              )
          }
  
 { isAuthenticated && 
 (<div class="dropdown relative">
    <a class="dropdown-toggle flex items-center hidden-arrow" href="#" id="dropdownMenuButton2" role="button"
      data-bs-toggle="dropdown" aria-expanded="false">
      <Image class="rounded-full border-gray border-2" src={user.picture} alt={user.name} loading="lazy" height={35} width={35}/>
    </a>
  </div>)
  }
  </div>
  
      </div>
      
    </nav>
  );
};

export default Navbar;