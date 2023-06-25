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
 <h1>
        Congratulations
      </h1>
      <p>Hello welcome</p>
      <Projects></Projects>
      <About path={""} uri={""} location={undefined} children={undefined} params={undefined} pageResources={{
        component: undefined,
        json: {
          data: undefined,
          pageContext: undefined
        },
        page: {
          componentChunkName: "",
          path: "",
          webpackCompilationHash: "",
          matchPath: undefined
        }
      }} data={undefined} pageContext={undefined} serverData={undefined}/>
      <Contact></Contact>
    
      </div>
     
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
