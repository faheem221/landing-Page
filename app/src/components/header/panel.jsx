import React from 'react'
import {AnimatePresence, motion } from 'framer-motion'
 
const panel = () => {
 

  const varients = {
    initial:{
      opacity:0,
      scale:.2
    },
    hover:{
      scale:1,
      opacity:1,
      transition:{
        type:'spring',
        duration:0.8
      }
    },
    exit:{
      opacity:0,
      scale:0,
      transition:{
        type:'spring',
        duration:0.8
      }
    }
  }
  return (
 
       <motion.div initial={{opacity:0, scale:1}} animate={{ opacity:1, scale:1.1}} exit={{opacity:0, scale:1 }} transition={{type:'gentle'}}  className='absolute w-full h-[100vh] bg-[#37384c] top-[0%] z-[-1]'>
         <motion.div  className='absolute w-full h-full iphone:bg-[url("panelOne.svg")] tablet:bg-[url("panelTwo.svg")] iphone:bg-[length:150%] iphone:bg-[-15em] bg-no-repeat tablet:bg-right-top tablet:bg-[length:180%]'>
            <motion.div   className='flex flex-col items-center justify-center h-full '>
              <div className='flex leading-11 flex-col items-center justify-center text-slate-50 hover:text-slate-400 transition-all duration-200'>

              <AnimatePresence mode='wait'>  


                <motion.div whileHover='hover' initial='initial' animate='initial' exit='exit' className='relative'>
                  <p className='font-sangLight iphone:text-[1.68em] tablet:text-[2.5em] cursor-pointer  hover:text-slate-100'> Benefits</p>
                    <motion.div variants={varients} className='absolute bg-[url("https://clingr.me/assets/images/media/menu/benefits.jpg")] bg-no-repeat bg-cover bg-center w-[400px] h-[250px] top-[-100%] left-[-50%]   bg-red-500 rounded-[50%]   translate-y-[100%] z-[-99] '>
                  </motion.div>
                </motion.div>

                <motion.div whileHover='hover' initial='initial' animate='initial' exit='exit' className='relative'>
                  <p className='font-sangLight iphone:text-[1.68em] tablet:text-[2.5em] cursor-pointer  hover:text-slate-100'> How to use</p>
                    <motion.div variants={varients} className='absolute bg-[url("https://clingr.me/assets/images/media/menu/how-to-use.jpg")] bg-no-repeat bg-cover bg-center w-[400px] h-[250px] top-[-100%] left-[-30%] rotate-45 bg-red-500 rounded-[50%]   translate-y-[100%] z-[-99] '>
                  </motion.div>
                </motion.div>

                <motion.div whileHover='hover' initial='initial' animate='initial' exit='exit' className='relative  ' >
                  <p className='font-sangLight iphone:text-[1.68em] tablet:text-[2.5em] cursor-pointer  hover:text-slate-100'> How to purchase</p>
                    <motion.div variants={varients} className='absolute bg-[url("https://clingr.me/assets/images/media/menu/how-to-buy.jpg")] bg-no-repeat bg-cover bg-center w-[400px] h-[250px] top-[-100%] left-[-80%] rotate-45 bg-red-500 rounded-[50%]   translate-y-[100%] z-[-99] '>
                  </motion.div>
                </motion.div>

                <motion.div whileHover='hover' initial='initial' animate='initial' exit='exit' className='relative'>
                  <p className='font-sangLight iphone:text-[1.68em] tablet:text-[2.5em] cursor-pointer  hover:text-slate-100'> Reviews</p>
                    <motion.div variants={varients} className='absolute bg-[url("https://clingr.me/assets/images/media/menu/user-reviews.jpg")] bg-no-repeat bg-cover bg-center w-[400px] h-[250px] top-[-100%] left-[-90%] rotate-45 bg-red-500 rounded-[50%]   translate-y-[100%] z-[-99] '>
                  </motion.div>
                </motion.div>

                <motion.div whileHover='hover' initial='initial' animate='initial' exit='exit' className='relative'>
                  <p className='font-sangLight iphone:text-[1.68em] tablet:text-[2.5em] cursor-pointer  hover:text-slate-100'> What's in the Kit</p>
                    <motion.div variants={varients} className='absolute bg-[url("https://clingr.me/assets/images/media/menu/inside-the-package.jpg")] bg-no-repeat bg-cover bg-center w-[400px] h-[250px] top-[-100%] left-[-50%] rotate-45 bg-red-500 rounded-[50%]   translate-y-[100%] z-[-99] '>
                  </motion.div>
                </motion.div>

                <motion.div whileHover='hover' initial='initial' animate='initial' exit='exit' className='relative'>
                  <p className='font-sangLight iphone:text-[1.68em] tablet:text-[2.5em] cursor-pointer  hover:text-slate-100'> Become a partner </p>
                    <motion.div variants={varients} className='absolute bg-[url("https://clingr.me/assets/images/media/menu/become-a-partner.jpg")] bg-no-repeat bg-cover bg-center w-[400px] h-[250px] top-[-100%] left-[-50%] rotate-45 bg-red-500 rounded-[50%]   translate-y-[100%] z-[-99] '>
                  </motion.div>
                </motion.div>


               
              </AnimatePresence>
             
              </div>
            </motion.div>
      </motion.div>
       </motion.div>
   
  )
}

export default panel