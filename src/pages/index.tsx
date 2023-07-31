import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Navbar from "../components/navbar"
import * as styles from "../styles/index.module.scss"
import About from "../components/about"
import Contact from "../components/contact"
import Projects from "../components/projects"
import Contactform from "../components/contactform"
import { useMediaQuery } from 'react-responsive';
import Video from '../images/loopedvid.mp4'
import StillFrame from '../images/stillframe.webp'
import Hero from "../components/hero"


const IndexPage: React.FC<PageProps> = () => {

  return (
    <main>
      <Navbar></Navbar>
      <div className={styles.homewrapper}>
  <Hero/>
   <div className={styles.contentwrapper}> 
    
     
      <Projects></Projects>
      <div>
      <About />
      <Contact></Contact>
  </div></div>
      </div>
     
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
