import * as React from "react"
import { PageProps, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Seo from "../components/seo";
import Navbar from "../components/navbar";
import * as style from "../styles/projectpage.module.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import GitIcon from "../images/Octicons-mark-github.svg"
import Openexternal from "../images/external-link.svg"
import blackimage from "../images/buttonholder.svg"

interface ContentfulProjectData {
    category: string;
    id: string;
    image: Array<{
        url: string
    }>;
    stack: Array<{
        url:string
    }>;
    title: string;
    pageLink?: string;
    githubLink?: string;
    description: { raw: string };
    seo: { seo: string };
}

interface DataProps {
    contentfulProject: ContentfulProjectData;
}

const OneProjectPage: React.FC<PageProps<DataProps>> = ({ data }) => {
    const { contentfulProject } = data;
    return (
        <main >
            <Navbar />
            <div className={style.pagewrapper}>
                <Carousel
                    useKeyboardArrows
                    showThumbs={false}
                    autoPlay
                    infiniteLoop
                >
                    {contentfulProject.image[0].url && (
                        <div>
                            <img src={contentfulProject.image[0].url} alt="Image of the page" />
                        </div>
                    )}

{contentfulProject.image[1] && contentfulProject.image[1].url && (
                        <div>
                            <img src={contentfulProject.image[1].url} alt="Image of the page" />
                        </div>
                    )}

                    {contentfulProject.image[2] && contentfulProject.image[2].url && (
                        <div>
                            <img src={contentfulProject.image[2].url} alt="Image of the page" />
                        </div>
                    )}

                </Carousel>


                <section className={style.description}>
                    <h2>{contentfulProject.title}</h2>
                    {documentToReactComponents(JSON.parse(contentfulProject.description.raw))}

                </section>
                <section className={style.techstack}>
                    <h2>Stack</h2>
                    <span>
                        {
                            contentfulProject.stack.map(tech =>
                                <img src={tech.url} alt="" />
                            )
                        }
                    </span>

                </section>
                <section className={style.buttonscontainer}>
                    <span className={style.linkscontainer}>
                        {contentfulProject.githubLink && (
                            <a href={contentfulProject.githubLink}>
                                <img src={GitIcon} alt="GitHub" className={style.projecticonsgithub} />
                            </a>
                        )}
                        {contentfulProject.pageLink && (
                            <a href={contentfulProject.pageLink}>
                                <img src={Openexternal} alt="OpenExternal" className={style.projecticons} /></a>
                        )}
                    </span>
                </section>
            </div>
            {/* <div className={style.blackbox}>
                {contentfulProject.githubLink && (
                    <a href={contentfulProject.githubLink}>
                        <img src={GitIcon} alt="GitHub" className={style.contentfulProjecticons} />
                    </a>
                )}
                {contentfulProject.pageLink && (
                    <a href={contentfulProject.pageLink}>
                        <img src={Openexternal} alt="OpenExternal" className={style.projecticons} /></a>
                )}
            </div> */}
            <div className={style.blackbox} >
                <img src={blackimage} alt="" />
                {contentfulProject.githubLink && (
                    <a href={contentfulProject.githubLink}>
                        <img src={GitIcon} alt="GitHub" className={`${style.projecticons} ${style.firsticon}`} />
                    </a>
                )}
                {contentfulProject.pageLink && (
                    <a href={contentfulProject.pageLink}>
                        <img src={Openexternal} alt="OpenExternal" className={`${style.projecticons} ${style.secondicon}`} /></a>
                )}
            </div>
        </main>

    )

}

export default OneProjectPage

// export function Head() {
//     return (

//         <>
//             <meta name="description" content="Portfolio projects" />
//             <meta name="keywords" content="HTML, CSS, JavaScript, React, junior frontenddeveloper" />
//             <link href="https://fonts.googleapis.com/css2?family=Italiana&display=swap" rel="stylesheet"></link>
//             <title>Project</title>
//         </>
//     )
// }

export const Head: React.FC<{ data: DataProps }> = ({ data }) => (
    <Seo
        title={data.contentfulProject.title}
        description={data.contentfulProject.seo.seo}
    />
)

export const query = graphql`
query SingleProjectQuery($title: String) {
    contentfulProject(title: {eq: $title}) {
    category
    id
    seo{
        seo
    }
    image {
      url
    }
    stack {
      url
    }
    title
    pageLink
    githubLink
    description { 
        raw 
    }
 
  }
}
`