import { motion } from 'framer-motion'
import React from 'react'
const hero = () => {
  const textAnime = {
    initial:{
      y:300,
      opacity:0
    },
    animate:{
      y:0,
      opacity:1,
  
    }
  }

  const varientsSvg = {
    initial:{
      pathLength:0
    },

    animate:{
      pathLength:1
    }
  }

  const parentMotion = {
    hidden:{
      pathLength:0
    },
    animate:{
      pathLength:1,
      transition:{
        staggerChildren:0.2,
        delay:.5
      }
    }
  }
  const url = 'https://player.vimeo.com/video/724439058?title=0&byline=0&portrait=0&muted=1&autoplay=1&pip=0&controls=0&loop=1&background=1'
  return (
    <div  className={`h-[100vh] flex justify-center items-center w-full bg-no-repeat iphone:bg-cover iphone:bg-top tablet:bg-top  iphone:bg-[url('https://clingr.me/assets/images/media/landing/1.intro/intro-background-xs@xs.webp')] tablet:bg-[url('https://clingr.me/assets/images/media/landing/1.intro/intro-background@xxl.webp')] bg-fixed`}>
      <div className='w-full  h-full flex flex-col justify-center items-center overflow-hidden relative'>
          <div className='flex flex-col items-center justify-center font-sangLight text-slate-50 iphone:leading-[1] tablet:leading-[.85]  relative'>
              <motion.p variants={textAnime} initial='initial' animate='animate'  transition={{type:'spring', duration:1.4, delay:1.7, damping:22}}  className='iphone:text-[2.5em] android:text-[3.3em] tablet:text-[7.5em] tracking-tighter '>Beautiful hair?</motion.p>
              <motion.p variants={textAnime} initial='initial' animate='animate'  transition={{type:'spring', duration:1.4, delay:1.9, damping:22}} className='iphone:text-[2.5em] android:text-[3.3em] tablet:text-[7.5em] tracking-tighter'>It is easy and</motion.p>
              <motion.p variants={textAnime} initial='initial' animate='animate' transition={{type:'spring', duration:1.4, delay:2, damping:22}} className='iphone:text-[2.5em] android:text-[3.3em] tablet:text-[7.5em] tracking-tighter'>wonderful!</motion.p>

            <motion.div  variants={textAnime} initial='initial' animate='animate' className='tablet:w-[50%] iphone:w-[70%] absolute tablet:rounded-3xl iphone:rounded-xl  aspect-video iphone:top-[90%] tablet:top-[78%]  iphone:right-[-15%] tablet:right-[-27%]'>
              <iframe
                title="Video Player"
                src={url}
                allowFullScreen   
                className='w-full h-full absolute top-0 left-0 tablet:rounded-3xl iphone:rounded-xl'>
                

              </iframe>
            </motion.div>

          </div>

         
      
          
      </div>

     
    </div>
  )
}

export default hero