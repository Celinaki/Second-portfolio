import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Navbar from "../components/navbar"
import * as styles from "../styles/index.module.scss"
import About from "../components/about"
import Contact from "../components/contact"
import Projects from "../components/projects"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar></Navbar>
      <div className={styles.homewrapper}>

      <h1>Projects</h1>
      <Projects></Projects>
      <About />
      <Contact></Contact>
    
      </div>
     
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
