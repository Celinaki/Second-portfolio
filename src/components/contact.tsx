import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import * as style from "../styles/contact.module.scss"
import GitIcon from "../images/Octicons-mark-github.svg"
import LinkedIn from "../images/LinkedIn_icon.svg"
import MailIcon from '../images/mail_FILL0_wght400_GRAD0_opsz48.svg'
import Contactform from "./contactform"
const Contact: React.FC<PageProps> = () => {
    return (
        <div className={style.contactwrapper} id="contact" >
            <h1>Contact</h1>
            <p>If you have any further questions or require additional information,
                please do not hesitate to reach out to me via the email address provided below or the contactform.</p>

            <section className={style.iconscontainer}>
                <span className={style.email}> <img src={MailIcon} alt="" /><p>celina1999@live.se</p></span>
                <a href="https://www.linkedin.com/in/celina-eftihidis-982429153/">
                    <img src={LinkedIn} alt="" />
                </a>
                <a href="https://github.com/Celinaki">
                    <img src={GitIcon} alt="" />
                </a>
            </section>
            <Contactform />
        </div>
    )
}
export default Contact