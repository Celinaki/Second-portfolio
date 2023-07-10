import React, { useEffect, useRef , useState} from 'react';
import emailjs from "@emailjs/browser"
import Snackbar from '../modals/snackbar';
import * as style from "../styles/contactform.module.scss"

export const Contactform = () => {
const [emailSent, setEmailSent] = useState<Boolean>(false)
const [name, setName] = useState<string>('');
const [email, setEmail] = useState<string>('');
const [message, setMessage] = useState<string>('');
const [nameError, setNameError] = useState<Boolean>(false)
const [emailError, setEmailError] = useState<Boolean>(false)
const [messageError, setMessageError] = useState<Boolean>(false)
const [allValid, setAllValid] = useState<Boolean>(false)


    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
      e.preventDefault();    
      if(allValid){
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
                setName('');
                setEmail('');
                setMessage('');
            },
            (error) =>{
                console.log(error.text)
            }
        ); 
      }
      
    };
    useEffect(()=>{
      sendEmail
    },[])



    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    };
  
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };
  
    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setMessage(event.target.value);
    };
      useEffect(()=>{
    handleNameChange;
    handleEmailChange;
    handleMessageChange;
 
  },)

  useEffect(()=>{
       if(message.length> 3){
      setMessageError(false)
    }  if(email.length > 3 && email.includes("@") && email.includes(".")){
      setEmailError(false)}
      if(name.length > 1){
        setNameError(false)
      }
  },[message, email, name])
  useEffect(()=>{
    if(message.length> 3 && email.length > 3 && email.includes("@") && email.includes(".") && name.length > 2){
      setAllValid(true)
    }
  })
  
  const checkName =(event: React.FocusEvent<HTMLInputElement>)=>{
    if(name.length > 2){
      setNameError(false)
    }else setNameError(true)
    }
  const checkEmail =(event: React.FocusEvent<HTMLInputElement>)=>{
    if(email.length > 3 && email.includes("@") && email.includes(".")){
      setEmailError(false)
    }else setEmailError(true)
    }

  const checkMessage =(event: React.FocusEvent<HTMLTextAreaElement>)=>{
  if(message.length > 3){
    setMessageError(false)
  }else setMessageError(true)
  }

  return (
    <div>    

     {emailSent  ? 
     <Snackbar message={"Email is now sent"}/>
    :
    '' 
    } 
       <form ref={form} onSubmit={sendEmail} className={style.form}>
      <label>Name</label>
      {
        nameError ?
        <label  className={style.errormessage}>* Please enter your name</label>
        :
        ''

      }

      <input type="text"
       name="user_name"
       value={name}
       onChange={handleNameChange}
       onBlur={checkName}/>
      <label>Email</label>
      {
        emailError ?
        <label  className={style.errormessage}>* Please enter a valid email</label>
        :
        ''

      }
      <input type="email" 
      name="user_email"  
      value={email}

      onChange={handleEmailChange}
      onBlur={checkEmail}
      />
      <label>Message</label>
      {
        messageError ?
        <label  className={style.errormessage}>* Type your message </label>
        :
        ''
      }
      <textarea name="message" 
             value={message}

      className={style.messagetext}  
      onChange={handleMessageChange} 
      onBlur={checkMessage}/>
      <button type="submit" value="Send" > Send</button>
    </form>
    </div>
   
  );
};

export default Contactform;
