import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const About: React.FC<PageProps>= () =>{
    return(
<div style={{background:"pink"}}>
    <h1>About me</h1>   
  <p>Hi!</p>
  <p>My name is Celina and I finished 
    my studies at IT-högskolan as a frontend developer June 2023.</p>
    
    <p>Being a junior frontend developer I have great a enthusiasm for web development
        and I'm eager to start contributing in real work and learn more.
    </p>
    <h2>My knowledge</h2>
    <p>During my studies I had several courses that would make me ready as a developer. 
        With a wide variety of teachnologies taught I learned Vue, React, Typescript, GraphQL, PostgreSQL,
        Git, Trello, Agile methods, MongoDB, Express, Mongoose,
        how to deploy a backend and frontend using heroku, Insomnia, Responsive design,Gatsby,
        Headless CMS and regular CMS such as wordpress.
        My goto library that I've worked with in my personal projects is mostly React.js.
    </p>
    <h2>Work experience</h2>
        <ul>
            <li>
                <h3>Nilocollab, frontend developer || <em>Jan-May 2023</em></h3>
                <p>During</p>
            </li>
            <li>
                <h3>Lindcode, fullstack developer || <em>Aug-Oct 2022</em></h3>
                <p>During</p>
            </li>
            <li>
                <h3>Sales assistant, Dressmann || <em>May 2022-Feb 2023</em></h3>
                <p>During</p>
            </li>
            <li>
                <h3>Volounteer sales assistant, Red cross || <em>Jan 2020-Jul 2020</em></h3>
                <p>During</p>
            </li>
            <li>
                <h3>Preschool childcare substitute worker , Håbo kommun || <em>Sep 2020-May 2023</em></h3>
                <p>During</p>
            </li>
            <li>
                <h3>Temporary Elder caregiver , Håbo kommun || <em>Jul 2017-Jul 2018</em></h3>
                <p>During</p>
            </li>
        </ul>

</div>
    )
}
export default About