import React, { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import Loading from './Loading';
import sanitize from 'sanitize-html';
import { toast } from 'react-hot-toast';


const Newsletter = ({ status, message, onValidated }) => {
  const [ error, setError ] = useState(null);
  const [ email, setEmail ] = useState(null);
  const handleFormSubmit = () => {

    setError(null);

    if ( ! email ) {
      setError(   toast.error("Please Enter a valid email address") );
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  }
  const handleInputKeyEvent = ( event ) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  }
  const getMessage = (message) => {
    if ( !message ) {
      return null;
    }
    const result = message?.split('-') ?? null;
    if ( "0" !== result?.[0]?.trim() ) {
      return sanitize(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? sanitize( formattedMessage ) : null;
  }

  return (
   <>
   <div className='bg-white mt-24 '>
   {/* <!-- Container for demo purpose --> */}
<div class="container  px-6 mx-auto ">

  {/* <!-- Section: Design Block --> */}
  <section class="text-gray text-center">
    <div class="flex flex-wrap justify-center">
      <div class="grow-0 shrink-0 flex-basis w-full lg:w-6/12 px-3">
        <div class="p-4 bg-blue rounded-full shadow-lg inline-block mb-6 mt-2">
          <AiOutlineMail className='text-white scale-150'/>
        </div>

        <h2 class="text-3xl font-bold mb-6">Our Newsletter</h2>

        <p class="text-gray-500 mb-12">Our discounts products are only available for a limited time</p>

        <div class="md:flex flex-row mb-8">
          <input
            type="text"
            onChange={(event) => setEmail(event?.target?.value ?? '')}
            class="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Enter your email"   onKeyUp={(event) => handleInputKeyEvent(event)} required
          />
           
          <button
            type="submit"
            class="inline-block px-7 py-3 bg-blue text-white font-medium text-xl leading-snug uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mt-6 md:mt-0"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"asd onClick={handleFormSubmit}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- Section: Design Block --> */}
  <div className="min-h-42px text-black">
        { 'sending' === status ? <Loading showSpinner message="Sending..." contentColorClass="text-black" hasVisibilityToggle={false}/> : null }
        {'error' === status || error ? (
          <div
            className="text-black pt-2"
            dangerouslySetInnerHTML={{ __html: error || getMessage( message ) }}
          />
        ) : null }
        {'success' === status && 'error' !== status && !error && (
          <div className="text-black font-bold pt-2" dangerouslySetInnerHTML={{ __html: sanitize(message) }} />
        )}
      </div>
</div>
{/* <!-- Container for demo purpose --></> */}
</div>
</>
  );
};

export default Newsletter;