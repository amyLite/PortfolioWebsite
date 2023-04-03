import React from 'react';
import {styles} from '../styles';
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import Blob from "./Blob/Blob";


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto flex-col'>
          <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-3`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Amarinder</span>
          </h1>
          
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop FullStack web applications <br className='sm:block hidden' />
            and AI/ML applications
          </p>
          <br/>
        </div>
      </div>

      <div className='relative sm:top-800 w-full top-60 flex justify-center items-center mx-auto'>
        <div className='w-[500px] h-[500px] relative justify-center flex-initial p-2 top-50'>
      <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
        <Blob />
      </Canvas>
        </div>
      </div>
    </section>
  )
}

export default Hero