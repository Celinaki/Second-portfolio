import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { useMediaQuery } from 'react-responsive';
import Video from '../images/loopedvid.mp4'
import StillFrame from '../images/stillframe.webp'

export const Hero = () =>{
    const isDesktop = useMediaQuery({ minWidth: 769 });
    return(

        <div style={{height:"90vh", position:"relative",}}>
        <div style={{position:"absolute", height:"60%", backgroundColor:"#d1cece76",borderRadius:"20px", width:"40%", left:20, top:20,  zIndex:2, display:"flex",
      flexDirection:"column",alignItems:"center"}}>
        <h1 style={{ color:"white", marginTop:"5rem",fontFamily:"Lobster Two", letterSpacing:"7px",fontSize:40 }}>
                 Celina Eftihidis</h1>

        <h1 style={{ color:"white", fontFamily:"Lobster Two", letterSpacing:"7px", textShadow:"2px 2px 2px black" }}>
          Frontend webdeveloper</h1>
          <p>With a passion for accesibility and responsiveness</p>
        </div>
        <div style={{position:"absolute", height:"60%", backgroundColor:"#bbb3b37a",borderRadius:"20px", width:"40%", left:60, top:60, opacity:0.4}}>
        </div>
                {/* <h1 style={{position:"absolute",top:100,left:"40%",margin:'auto', color:"white", fontFamily:"Lobster Two", letterSpacing:"7px",fontSize:40 }}>
                 Celina Eftihidis</h1>

        <h1 style={{position:"absolute",top:180,left:"45%",margin:'auto', color:"white", fontFamily:"Lobster Two", letterSpacing:"7px", textShadow:"2px 2px 2px black" }}>
          Frontend webdeveloper</h1> */}
    {
      isDesktop 
      ?
      <video 
      src={Video} 
      muted
      autoPlay={true}
      preload="auto"
      loop
      style={{width:"100%", height:"100%", objectFit:"cover", borderRadius:"20px"}} >
      </video>
       :
      <img src={StillFrame} alt="Field of grass and wheat. Blue sky and almost a sunset."  style={{width:"100%", height:"100%", objectFit:"cover", borderRadius:"20px"}}/>
    } 
      </div> 
   )
}
export default Hero;

