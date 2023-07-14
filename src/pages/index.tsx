import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Navbar from "../components/navbar"
import * as styles from "../styles/index.module.scss"
import About from "../components/about"
import Contact from "../components/contact"
import Projects from "../components/projects"
import Contactform from "../components/contactform"
import { useMediaQuery } from 'react-responsive';
import Video from '../images/IMG_1514.mp4'


const IndexPage: React.FC<PageProps> = () => {
  const isDesktop = useMediaQuery({ minWidth: 769 });

  return (
    <main>
      <Navbar></Navbar>
      <div className={styles.homewrapper}>
<section>

</section>
{
  isDesktop 
  ?
  <div style={{height:"90vh", position:"relative"}}>

    <div style={{position:"absolute", height:"80%", backgroundColor:"#d1cece",borderRadius:"20px", width:"40%", left:20, top:20, opacity:0.6, zIndex:2}}>

    </div>
   
    <div style={{position:"absolute", height:"80%", backgroundColor:"#bbb3b3",borderRadius:"20px", width:"40%", left:60, top:60, opacity:0.4}}></div>

  <video 
  
  src={Video} style={{width:"100%", height:"100%", objectFit:"cover", borderRadius:"20px"}} autoPlay loop ></video></div>
  :
  ''
}
      <h1>Projects</h1>
      
      <Projects></Projects>
      <About />
      <Contact></Contact>
    <Contactform/>
      </div>
     
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
