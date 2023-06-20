import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Navbar from "../components/navbar"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar></Navbar>
      <h1>
        Congratulations
      </h1>
    
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
