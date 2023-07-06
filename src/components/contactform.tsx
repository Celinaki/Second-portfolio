import React, { useEffect, useRef } from 'react';
import emailjs from "@emailjs/browser"

export const Contactform = () => {


    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
      e.preventDefault();
        emailjs
        .sendForm(
            process.env.GATSBY_YOUR_SERVICE_ID! as string,
            process.env.GATSBY_YOUR_TEMPLATE_ID! as string,
            form.current as HTMLFormElement,
            process.env.GATSBY_YOUR_PUBLIC_KEY! as string
        )
        .then(
            (result) =>{
                console.log(result.text);
            },
            (error) =>{
                console.log(error.text)
            }
        );
    };

      
  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Contactform;
