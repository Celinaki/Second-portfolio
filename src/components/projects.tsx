import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql, useStaticQuery , Link} from 'gatsby';
import * as style from "../styles/oneproject.module.scss"
import GitIcon from "../images/Octicons-mark-github.svg"
import Openexternal from "../images/external-link.svg"
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface Props {
    allContentfulProject: {
        nodes: Array<{
            title: string;
            id: string;
            image: Array<{
                url: string;
            }>;
            hashtags: string[];
            githubLink?: string;
            pageLink?: string;
        }>;

    }
}

const Projects: React.FC = () => {
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
        githubLink
        pageLink
      } 

  }
}
`
    )

    return (
        <div id="projects" className={style.projects}>
            <h1>Projects</h1>
            <div className={style.projectscontainer}>
                {data.allContentfulProject.nodes.map(project =>
                    <div className={style.projectwrapper} key={project.id} >
                        <div className={style.textcontainer}>
                            <h2>{project.title}</h2></div>
                        <div className={style.imageholder}>
                            <img src={project.image[0].url} alt="" className={style.projectimg} />
                        </div>
                        <span>
                            {project.hashtags.map(tag =>
                                <p>{tag}</p>
                            )}
                        </span>
                        <section className={style.buttonscontainer}>
                            <span className={style.linkscontainer}>
                                {project.githubLink && (
                                    <a href={project.githubLink}>
                                        <img src={GitIcon} alt="GitHub" className={style.projecticonsgithub} />
                                    </a>
                                )}
                                {project.pageLink && (
                                    <a href={project.pageLink}>
                                        <img src={Openexternal} alt="OpenExternal" className={style.projecticons} /></a>
                                )}
                            </span>
                                    
                            <button><Link to={'/project/' + project.title}>
                                See more</Link></button>
                        </section>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Projects;

