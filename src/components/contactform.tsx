import React, { useEffect, useRef , useState} from 'react';
import emailjs from "@emailjs/browser"
import Snackbar from '../modals/snackbar';
import * as style from "../styles/contactform.module.scss"

export const Contactform = () => {
const [emailSent, setEmailSent] = useState<Boolean>(false)

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
                setEmailSent(true)
            },
            (error) =>{
                console.log(error.text)
            }
        );
    };

      
  return (
    <div>
     {emailSent  ? 
    <Snackbar message={"Email is now sent"}/>
    :
    '' 
    } 
       <form ref={form} onSubmit={sendEmail} className={style.form}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" className={style.messagetext} />
      <button type="submit" value="Send" > Send</button>
    </form>
    </div>
   
  );
};

export default Contactform;
