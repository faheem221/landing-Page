import { AnimatePresence, motion } from 'framer-motion';
import React,{useState} from 'react'
import { IoCloseOutline } from "react-icons/io5";
 import Panel from './panel';
const header = () => {
    const [menuClose, setMenuClose] = useState(true)
     
    const varients = {
        initial: {
            pathLength: 0,
         

        },
        hover: {
            pathLength:1,
            transition: {
                duration: 0.5
            }
        }
    }

    
  return (
    <section className='flex justify-center'>
       <div className='iphone:w-[85%] tablet:w-[72%] flex justify-between items-center h-[50px]  '>
            <div className='select-none font-Plus text-[1.6em] text-slate-200 tracking-tighter'>
                Clingr 
            </div>

            <div className='flex items-center gap-10 font-Plus text-[.9em] text-slate-100 ' >
                     <motion.div whileHover='hover' initial='initial' animate='initial' className='px-5 py-2 rounded-[50%] relative cursor-pointer  '>
                            Buy

                            <svg className='absolute top-[50%] left-[50%] scale-[.6] translate-x-[-50%] translate-y-[-50%]' width="140" height="77" viewBox="0 0 140 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <motion.path  d="M139.75 38.5C139.75 48.9982 132.01 58.5564 119.377 65.5046C106.753 72.4478 89.2961 76.75 70 76.75C50.7039 76.75 33.247 72.4478 20.623 65.5046C7.98999 58.5564 0.25 48.9982 0.25 38.5C0.25 28.0018 7.98999 18.4436 20.623 11.4954C33.247 4.55224 50.7039 0.25 70 0.25C89.2961 0.25 106.753 4.55224 119.377 11.4954C132.01 18.4436 139.75 28.0018 139.75 38.5Z" stroke="#BFBFBF" stroke-width="0.5"/>
                            </svg>

                            <svg className='absolute top-[50%] left-[50%] scale-[.6] translate-x-[-50%] translate-y-[-50%]' width="140" height="77" viewBox="0 0 140 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <motion.path variants={varients} d="M139.75 38.5C139.75 48.9982 132.01 58.5564 119.377 65.5046C106.753 72.4478 89.2961 76.75 70 76.75C50.7039 76.75 33.247 72.4478 20.623 65.5046C7.98999 58.5564 0.25 48.9982 0.25 38.5C0.25 28.0018 7.98999 18.4436 20.623 11.4954C33.247 4.55224 50.7039 0.25 70 0.25C89.2961 0.25 106.753 4.55224 119.377 11.4954C132.01 18.4436 139.75 28.0018 139.75 38.5Z" stroke="white" stroke-width="0.5"/>
                            </svg>
                            
                     </motion.div>

                    <div className=' cursor-pointer w-[50px] h-[50px] flex justify-center items-center  ' onClick={()=>{setMenuClose(!menuClose)}}>
                        {
                            menuClose 
                            ?
                              
                            <svg width="46" height="9" viewBox="0 0 46 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line y1="0.5" x2="46" y2="0.5" stroke="white" stroke-width='2'/>
                                <line y1="8.5" x2="46" y2="8" stroke="white" stroke-width='2'/>
                            </svg>

                            :
                            <motion.div  whileHover={{scale:1.1}}>
                                <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L12.72 14.2772C13.4337 15.0858 13.3778 16.3147 12.5935 17.0551L1 28" stroke="#E0E0E0" stroke-width="2"/>
                                    <path d="M29 1L17.28 14.2772C16.5663 15.0858 16.6222 16.3147 17.4065 17.0551L29 28" stroke="#E0E0E0" stroke-width="2"/>
                                </svg>


                                </motion.div>
                        }
                    </div>
            </div>
       
       
       </div>
      
       <AnimatePresence mode='wait'>
       {
        menuClose 
        ?        
         null
         :
         
            <Panel />
        
       }
       </AnimatePresence>
        
       
    </section>
  )
}

export default header