import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { useMediaQuery } from 'react-responsive';
import Video from '../images/loopedvid.mp4'
import StillFrame from '../images/stillframe.webp'
import * as style from '../styles/hero.module.scss'

export const Hero = () =>{
    const isDesktop = useMediaQuery({ minWidth: 769 });
    return(

        <div className={style.herocontainer}>
          <div className={style.overlay}></div>
                <h1>Celina Eftihidis</h1>
        <h1>
          Frontend web developer</h1>
    {
      isDesktop 
      ?
      <video 
      src={Video} 
      muted
      autoPlay={true}
      preload="auto"
      loop
      >
      </video>
       :
      <img src={StillFrame} alt="Field of grass and wheat. Blue sky and almost a sunset."  style={{width:"100%", height:"100%", objectFit:"cover", borderRadius:"20px"}}/>
    } 
<section className={style.scrollholder}>
  <span>
  <a className={style.scrollbutton} href="#projects" ><span></span>View my work</a>
  </span>
</section>
      </div> 
      
   )
}
export default Hero;

