import React from 'react'
import Lottie from "lottie-react";
import animation from './hero.json'
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      
      <div>
      <section className="grid mx-auto h-[90vh] px-4  sm:px-6 lg:px-8 max-w-full bg-white">
        <div className="grid mx-auto max-w-screen-xl px-4 py-8  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            {/* <h1 className="max-w-2xl mb-10 font-thin tracking-tight leading-none text-lg md:text-5xl xl:text-6xl dark:text-white">
              Join the 
            </h1> */}
             <p className="text-2xl text-blue uppercase font-medium mb-16">
              Trendy Fashion Collections
            </p>
            <span className="sm:text-7xl text-4xl max-w-2xl  font-extrabold text-black ">
              Fashion create good lifestyle
            </span>
            <p className="text-xl text-gray font-medium mt-12">
           A world-class trendy fashion collections. An Indian designer well known for her-inspired designs. Mens's and women's optical styles.
            </p>
          
           <Link href="#products">
            <button
                           className="inline-flex items-center justify-centermr-3 font-medium text-center text-white  bg-blue mt-16   px-7 py-3   text-xl leading-snug rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"

            //   onClick={() => {
            //     user?.name
            //       ? router.replace("/dashboard")
            //       : handleGoogleSignIn();
            //   }}
            >
              {/* {user?.name ? "Go to Dashboard" : "Register Now"}
               */}Shop Now
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex" >
          <Lottie animationData={animation}/>   
          </div>
        </div>
      </section>
    </div>
   </>
  )
}

export default Hero