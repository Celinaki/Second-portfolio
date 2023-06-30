import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import * as style from "../styles/oneproject.module.scss"
import GitIcon from "../images/Octicons-mark-github.svg"
import Openexternal from "../images/external-link.svg"
const Projects: React.FC<PageProps> = () => {
    const examples = [
        {
            title: "Lindcode",
            image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur rerum doloribus maxime consectetur ea itaque recusandae, distinctio, temporibus voluptas ullam eaque sapiente iste explicabo eum! Cupiditate perferendis cum laboriosam minima accusamus. Doloremque, tempora facere ullam cumque earum repellendus a obcaecati quas molestiae tempore magni consequuntur. Accusantium facere magnam accusamus molestias.",
            tags: ["React", "Fullstack", "Figma", "MongoDB"],
            category: "React",
            linkToThePage: "url",
            linkToGithub: "url",

        },
        {
            title: "Nilo collab",
            image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur rerum doloribus maxime consectetur ea itaque recusandae, distinctio, temporibus voluptas ullam eaque sapiente iste explicabo eum! Cupiditate perferendis cum laboriosam minima accusamus. Doloremque, tempora facere ullam cumque earum repellendus a obcaecati quas molestiae tempore magni consequuntur. Accusantium facere magnam accusamus molestias.",
            tags: ["MUI", "React"],
            category: "React",
            linkToThePage: "url",
            linkToGithub: "url",

        },
        {
            title: "ACNH",
            image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur rerum doloribus maxime consectetur ea itaque recusandae, distinctio, temporibus voluptas ullam eaque sapiente iste explicabo eum! Cupiditate perferendis cum laboriosam minima accusamus. Doloremque, tempora facere ullam cumque earum repellendus a obcaecati quas molestiae tempore magni consequuntur. Accusantium facere magnam accusamus molestias.",
            tags: ["React", "Fullstack", "Figma", "MongoDB"],
            category: "React",
            linkToThePage: "url",
            linkToGithub: "url",

        },
        {
            title: "Css cards",
            image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur rerum doloribus maxime consectetur ea itaque recusandae, distinctio, temporibus voluptas ullam eaque sapiente iste explicabo eum! Cupiditate perferendis cum laboriosam minima accusamus. Doloremque, tempora facere ullam cumque earum repellendus a obcaecati quas molestiae tempore magni consequuntur. Accusantium facere magnam accusamus molestias.",
            tags: ["React", "Fullstack", "Figma", "MongoDB"],
            category: "React",
            linkToThePage: "url",
            linkToGithub: "url",

        },
        {
            title: "Company",
            image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur rerum doloribus maxime consectetur ea itaque recusandae, distinctio, temporibus voluptas ullam eaque sapiente iste explicabo eum! Cupiditate perferendis cum laboriosam minima accusamus. Doloremque, tempora facere ullam cumque earum repellendus a obcaecati quas molestiae tempore magni consequuntur. Accusantium facere magnam accusamus molestias.",
            tags: ["React", "Fullstack", "Figma", "MongoDB"],
            category: "React",
            linkToThePage: "url",
            linkToGithub: "url",

        },
        {
            title: "Recipe site",
            image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur rerum doloribus maxime consectetur ea itaque recusandae, distinctio, temporibus voluptas ullam eaque sapiente iste explicabo eum! Cupiditate perferendis cum laboriosam minima accusamus. Doloremque, tempora facere ullam cumque earum repellendus a obcaecati quas molestiae tempore magni consequuntur. Accusantium facere magnam accusamus molestias.",
            tags: ["React", "Fullstack", "Figma", "MongoDB"],
            category: "React",
            linkToThePage: "url",
            linkToGithub: "url",

        },
        {
            title: "Starwars",
            image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur rerum doloribus maxime consectetur ea itaque recusandae, distinctio, temporibus voluptas ullam eaque sapiente iste explicabo eum! Cupiditate perferendis cum laboriosam minima accusamus. Doloremque, tempora facere ullam cumque earum repellendus a obcaecati quas molestiae tempore magni consequuntur. Accusantium facere magnam accusamus molestias.",
            tags: ["React", "Fullstack", "Figma", "MongoDB"],
            category: "React",
            linkToThePage: "url",
            linkToGithub: "url",

        }
    ]

    return (
        <div>
            
            {examples.map(project =>
                <div className={style.projectwrapper}>
                    <h2>{project.title}</h2>
                    <img src={project.image} alt="" className={style.projectimg} />
                    <span>
                        {project.tags.map(tag =>
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
    )
}
export default Projects;