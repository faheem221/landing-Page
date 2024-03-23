import React from 'react'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import {motion} from 'framer-motion'
import './index.css'
const App = () => {
  const varients = {
    animate:{
      y:'100%',

      transition:{
        type:"gentle",
        duration:1,
        delay:1.6
      },

 
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
      transitionEnd: { display: "none" },
      transition:{
        staggerChildren:0.2,
        delay:.5
      } 
   
    }
   
  }
  
  return (
    <div>
     
        <motion.div  className='relative w-full h-full overflow-hidden'>
    
           
               <motion.div  initial={{y:'-170%'}} animate={{y:"0%"}} transition={{delay:1.8, type:'gentle', duration:1}} className=' w-full z-[999] fixed top-7'>
                  <Header />
               </motion.div>
                  

          


            <motion.div initial={{y:'-50%'}} animate={{y:"0%"}} transition={{delay:1.5, type:'gentle', duration:1}}>
                <Hero />
              </motion.div>
            
            <motion.div  variants={varients} animate='animate'  className='z-[6] absolute   top-0 bg-[#37384c]   w-full h-full'>
            </motion.div>
            
            <motion.div variants={parentMotion} initial='initial' animate='animate' className=' iphone:invisible z-[8] desktop:visible w-full max-w-[1500px] overflow-hidden min-w-[1500px] h-full absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] '>
    

    <svg  className='absolute top-[10%] left-[-10%] scale-[.9]'  width="950" height="916" viewBox="0 0 950 916" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path variants={varientsSvg}  initial={{pathLength:0}} animate={{pathLength:1}} transition={{type:'gentle', duration:1}} d="M949 915C857.5 434.5 442 52 0.5 0.5" stroke="white" opacity='.5'  stroke-width="0.7"/>
    </svg>
    <svg className='absolute top-[0%] left-[-8%] rotate-12 scale-[1]' width="950" height="916" viewBox="0 0 950 916" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path variants={varientsSvg}  initial={{pathLength:0}} animate={{pathLength:1}} transition={{type:'gentle', duration:1}} d="M949 915C857.5 434.5 442 52 0.5 0.5" stroke="white" opacity='.3'  stroke-width="0.7"/>
    </svg>

    <svg className='absolute top-[0%] left-[-0.2%] rotate-[32deg] scale-[1]' width="950" height="916" viewBox="0 0 950 916" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path variants={varientsSvg}  initial={{pathLength:0}} animate={{pathLength:1}} transition={{type:'gentle', duration:1}} d="M949 915C857.5 434.5 442 52 0.5 1" stroke="white" opacity='.5'  stroke-width="0.7"/>
    </svg>


    <svg className='absolute top-[0%] rotate-[-32deg] right-[1.8%] scale-[1]' width="950" height="916" viewBox="0 0 950 916" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path variants={varientsSvg}  initial={{pathLength:0}} animate={{pathLength:1}} transition={{type:'gentle', duration:1}} d="M1 915.5C92.5 435 508 52.5 949.5 1" stroke="white" opacity='.5'  stroke-width="0.7"/>
    </svg>

    <svg className='absolute top-[0%] rotate-[-12deg] right-[-6%] scale-[1]' width="950" height="916" viewBox="0 0 950 916" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path variants={varientsSvg}  initial={{pathLength:0}} animate={{pathLength:1}} transition={{type:'gentle', duration:1}} d="M1 915.5C92.5 435 508 52.5 949.5 1" stroke="white" opacity='.5'  stroke-width="0.7"/>
    </svg>

    <svg className='absolute top-[10%] right-[-8%] scale-[.9]' width="950" height="916" viewBox="0 0 950 916" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path variants={varientsSvg}  initial={{pathLength:0}} animate={{pathLength:1}} transition={{type:'gentle', duration:1}} d="M1 915.5C92.5 435 508 52.5 949.5 1" stroke="white" opacity='.5'  stroke-width="0.7"/>
    </svg>

            </motion.div>
    
        </motion.div>

        
 
      
    </div>
  )
}

export default App