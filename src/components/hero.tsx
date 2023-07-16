import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { useMediaQuery } from 'react-responsive';
import Video from '../images/loopedvid.mp4'
import StillFrame from '../images/stillframe.webp'

export const Hero = () =>{
    const isDesktop = useMediaQuery({ minWidth: 769 });
    return(

        <div style={{height:"90vh", position:"relative"}}>
        <div style={{position:"absolute", height:"80%", backgroundColor:"#d1cece",borderRadius:"20px", width:"40%", left:20, top:20, opacity:0.6, zIndex:2}}>
        </div>
        <div style={{position:"absolute", height:"80%", backgroundColor:"#bbb3b3",borderRadius:"20px", width:"40%", left:60, top:60, opacity:0.4}}>
        </div>
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

