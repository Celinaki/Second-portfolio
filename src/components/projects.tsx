import * as React from "react"
import type { HeadFC, PageProps, Link } from "gatsby"
import { graphql, useStaticQuery } from 'gatsby';
import * as style from "../styles/oneproject.module.scss"
import GitIcon from "../images/Octicons-mark-github.svg"
import Openexternal from "../images/external-link.svg"

interface Props {
    allContentfulProject: {
    nodes: Array< {
            title: string;
            id: string;
            image: Array<{
            url: string;
            }>;
            hashtags: string[];  
    }>       
   }
  }

 const Projects: React.FC = ( ) => {
    const data: Props = useStaticQuery(graphql`
    query {
    allContentfulProject {
      nodes {
        title
        id
        image  {
          url
        }
       hashtags
      } 
  }
}
`
  )

    return (
        <div  id="projects">
            <h1>Projects</h1>
            <div className={style.projectscontainer}>
            {data.allContentfulProject.nodes.map(project =>
                <div className={style.projectwrapper} key={project.id} >
                    <h2>{project.title}</h2>
                    <img src={project.image[0].url} alt="" className={style.projectimg} />
                    <span>
                        {project.hashtags.map(tag =>
                            <p>{tag}</p>
                        )}
                    </span>
                    <section className={style.buttonscontainer}>
                    <span className={style.linkscontainer}>  
                        <img src={GitIcon} alt="" className={style.projecticons} />
                        <img src={Openexternal} alt="" className={style.projecticons} />
                        
                    </span>

                    <button>See more</button>
</section>
                </div>
            )}
</div>
        </div>
    )
}
export default Projects;

