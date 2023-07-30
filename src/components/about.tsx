import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import * as style from "../styles/about.module.scss"

const About: React.FC<PageProps>= () =>{
    return(
<div id="about" className={style.aboutwrapper}>
    <section >
    <h1>About me</h1>   
  <p>Hi!</p>
  <p>My name is Celina and I finished 
    my studies at IT-högskolan as a frontend developer June 2023.</p>
    <p>Being a junior frontend developer I have a great enthusiasm for web development
        and I'm eager to start contributing in real work and learn more.
    </p></section>

    <section >
         <h2>My knowledge</h2>
    <p>During my studies I had several courses that would make me ready as a developer. 
        With a wide variety of <b>teachnologies</b>  taught I learned </p>
<h3>Frameworks</h3>
<b style={{fontSize:22}}> &#8226; </b>
  Vue
 <b style={{fontSize:22}}> &#8226; </b> React

<h3>Tools</h3>
<b style={{fontSize:22}}> &#8226; </b> Git
<b style={{fontSize:22}}> &#8226; </b> Trello
<b style={{fontSize:22}}> &#8226; </b> Insomnia

<h3>Languages</h3>
<b style={{fontSize:22}}> &#8226; </b> Typescript
<b style={{fontSize:22}}> &#8226; </b> Javascript

<h3>Backend and Database</h3>
<b style={{fontSize:22}}> &#8226; </b> GraphQL
<b style={{fontSize:22}}> &#8226; </b> PostgreSQL
<b style={{fontSize:22}}> &#8226; </b> Agile methods
<b style={{fontSize:22}}> &#8226; </b> MongoDB
<b style={{fontSize:22}}> &#8226; </b> Express
<b style={{fontSize:22}}> &#8226; </b> Mongoose
<b style={{fontSize:22}}> &#8226; </b> How to deploy a backend and frontend using Heroku

<h3>Frontend</h3>
<b style={{fontSize:22}}> &#8226; </b> Responsive design
<b style={{fontSize:22}}> &#8226; </b> Gatsby
<b style={{fontSize:22}}> &#8226; </b> Headless CMS
<b style={{fontSize:22}}> &#8226; </b> Regular CMS such as WordPress
<p>My go-to library that I've worked with in my personal projects is mostly <b>React.js</b>.</p>
    </section>
   <section >
    <h2>Work experience</h2>
        <ul>
            <li>
                <h3 >Nilocollab, frontend developer </h3>
                <h3 className={style.dates}> Jan-May 2023</h3>
                <p>At Nilocollab, I worked in a larger codebase and with a larger development team, with around 10 other developers at most, each working on different branches for various tasks.
                     During my time at Nilocollab, I was introduced to JIRA, and it became an integral part of my workflow. Additionally, I had my first experience using MUI.
I was assigned both smaller and larger tasks. One significant task involved collaborating with another intern to develop a Dashboard based on their Figma mockup. </p>
                    <p>Another big achievement I did at Nilocollab was to reorganize a file, it went from around 1500 rows to 500 rows after I was done.</p>
            </li>
            <li>
                <h3>Lindcode, fullstack developer</h3>  <h3 className={style.dates}>Aug-Oct 2022</h3>
                <p>At Lindcode, I flourished the most. I received a lot of responsibility and worked independently most of
                     the time, but also engaged in some pair programming. </p><p> During my time at Lindcode, I worked agile, 
                     participating in daily standups and planning sessions. From Figma to code, I collaborated with another intern to build the architecture for a 
                     digital course platform, developing both the backend and frontend. In the backend, we used MongoDB, Express, and Node.js. 
                    For the frontend, we utilized React.js and SASS. The tools we used included Figma and Trello.</p>
            </li>
            <li>
                <h3>Sales assistant, Dressmann</h3> <h3 className={style.dates}> May 2022-Feb 2023</h3>
                <p>
During my time as a sales assistant at Dressmann, I learned a lot about customer relationships. 
My number one job was to make the customers feel welcome and wanted. Other daily tasks included accepting
 deliveries, unpacking and organizing the clothes, and ensuring they were displayed appropriately. 
 I also handled opening and closing the store and had full responsibility for the cash register.
  Additionally, I was given some creative design tasks, such as choosing outfits for the mannequins and 
  arranging shelf placements.
                </p>
            </li>
            <li>
                <h3>Volounteer sales assistant, Red cross </h3><h3 className={style.dates}> Jan 2020-Jul 2020</h3>
                <p>In my time as a volunteer at the Red Cross, my tasks were to help run the shop smoothly.
                     The tasks were varied, and I would typically follow a cycle, completing all of them during a workday.
                      These tasks included handling customer payments. Additionally, I inspected the quality of the clothes being sent in,
                     priced objects, and maintained the store's cleanliness and tidiness.
                </p>
            </li>
            <li>
                <h3>Preschool childcare substitute worker , Håbo kommun</h3> <h3 className={style.dates}> Sep 2020-May 2023</h3>
                <p>Engaging with the kids in an educational and creative approach, 
                    I stimulated a learning environment that encourages curiosity, exploration, and growth.
                </p>
            </li>
            <li>
                <h3>Temporary Elder caregiver , Håbo kommun</h3> <h3 className={style.dates}> Jul 2017-Jul 2018</h3>
                <p>While working as a caregiver in a home for elderly individuals with dementia, 
                I independently and collaboratively with other colleagues assisted the residents with all the daily tasks they required help with.</p>
            </li>
        </ul>
</section>
</div>
    )
}
export default About