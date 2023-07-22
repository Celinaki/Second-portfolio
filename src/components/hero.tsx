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
        {/* <div style={{position:"absolute", height:"40%", backgroundColor:"#d1cece76",borderRadius:"20px", width:"40%", left:20, top:20,  zIndex:2, display:"flex",
      flexDirection:"column",alignItems:"center"}}>
        <h1 style={{ color:"white", marginTop:"5rem",fontFamily:"Lobster Two", letterSpacing:"7px",fontSize:40 ,textShadow:"1px 1px 2px black" }}>
                 Celina Eftihidis</h1>

        <h1 style={{ color:"white", fontFamily:"Caprasimo", letterSpacing:"7px", textShadow:"1px 1px 2px black" }}>
          Frontend webdeveloper</h1>
        </div>
        <div style={{position:"absolute", height:"40%", backgroundColor:"#bbb3b37a",borderRadius:"20px", width:"40%", left:60, top:60, opacity:0.4}}>
        </div> */}
                <h1>
                 Celina Eftihidis</h1>

        <h1 >
          Frontend webdeveloper</h1>
    {
      isDesktop 
      ?
      <video 
      src={Video} 
      muted
      autoPlay={true}
      preload="auto"
      loop
      style={{width:"100%", height:"100%", objectFit:"cover", borderRadius:"20px"}}  >
      </video>
       :
      <img src={StillFrame} alt="Field of grass and wheat. Blue sky and almost a sunset."  style={{width:"100%", height:"100%", objectFit:"cover", borderRadius:"20px"}}/>
    } 
    <button style={{position:"absolute",bottom:"20%", left:"50%", transform:"translateX(-50%)", padding:"0.5rem 2rem", fontFamily:"inherit", fontWeight:800}}>See more</button>
      </div> 
   )
}
export default Hero;

