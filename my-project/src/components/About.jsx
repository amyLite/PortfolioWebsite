import React from 'react'
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import Tilt from 'react-parallax-tilt';
import { fadeIn, textVariant } from "../utils/motion";
import {github, python, reactjs1, nodejs, mongodb, docker} from '../assets'
import '../global.css'




const About = () => {
  return (
    <div className='text-center mt-[100px]' id='about'>
    <div>
      
      <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
      
    </div>
    <motion.p
      variants = {fadeIn("","",0.1,1)}
      className="mt-4 mx-5 sm:mx-20 text-center text-[13px] sm:text-[17px]">
          1
Search Quora
Profile photo for Amarinder Singh
How do you make elements not move when resizing your browser window in HTML/CSS?
Ad by Amazon Web Services (AWS)
Build & train machine learning models fast. Get started for free.
AWS removes the complexity of building, training, and deploying machine learning models at any scale.
   </motion.p>
   <h3 className={`${styles.heroSubText} pb-10`}>Top Skills</h3>
  <div className='flex justify-center'>
    
  <svg className='absolute z-0 max-w-xs' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="fill" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(92 0.5 0.5)"><stop offset="0%" stop-color="#d447e6"></stop><stop offset="100%" stop-color="#7b8cff"></stop></linearGradient></defs><path d="M90,62.5Q80,75,68.5,83Q57,91,42,90.5Q27,90,16,78Q5,66,8.5,51Q12,36,19.5,23.5Q27,11,42.5,6.5Q58,2,68.5,14Q79,26,89.5,38Q100,50,90,62.5Z" stroke="none" stroke-width="0" fill="url(#fill)"></path></svg>
   <div className='grid grid-cols-3 sm:grid-cols-3 gap-10 sm:gap-20 flex'>
    <div>
   <Tilt>
      <div className='w-100 aspect-square styleCard'>
        
        <img className='styleImage' src={github} alt='github'/>
        <h1 style={{textAlign:'center', padding:'12px'}}>Github</h1>
      </div>
    </Tilt>
    </div>
    <div>
    <Tilt>
      <div className='w-100 aspect-square styleCard'>
      <img className='styleImage' src={python} alt='python'/>
        <h1 style={{textAlign:'center', padding:'12px'}}>Python</h1>
      </div>
    </Tilt>
    </div>

    <div>
    <Tilt>
      <div className='w-100 aspect-square styleCard'>
      <img className='styleImage' src={reactjs1} alt='reactjs'/>
        <h1 style={{textAlign:'center', padding:'12px'}}>React</h1>
      </div>
    </Tilt>
    </div>
    <div>
    <Tilt>
      <div className='w-100 aspect-square styleCard'>
      <img className='styleImage' src={nodejs} alt='nodejs'/>
        <h1 style={{textAlign:'center', padding:'12px'}}>Node Js</h1>
      </div>
    </Tilt>
    </div>
    <div>
    <Tilt>
      <div className='w-100 aspect-square styleCard'>
      <img className='styleImage' src={mongodb} alt='mongodb'/>
        <h1 style={{textAlign:'center', padding:'12px'}}>MongoDb</h1>
      </div>
    </Tilt>
    </div>
    <div>
    <Tilt>
      <div className='w-100 aspect-square styleCard'>
      <img className='styleImage' src={docker} alt='docker'/>
        <h1 style={{textAlign:'center', padding:'12px'}}>Docker</h1>
      </div>
    </Tilt>
    </div>
    
    </div>
  </div>
</div>
  )
}

export default About