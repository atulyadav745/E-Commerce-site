import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import Newsletter from './Newsletter.page';

const Newsletter1 = () => {
    const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;
  return (
    <div>
      <MailchimpSubscribe 
      url={MAILCHIMP_URL}
      render={(props) =>{
        const {subscribe, status, message} = props || {};
        return(
            <Newsletter 
            status ={status}
            message ={message}
            onValidated ={FormData =>subscribe(FormData)}
            />
        )
      }}
      />
    </div>
  )
}

export default Newsletter1
