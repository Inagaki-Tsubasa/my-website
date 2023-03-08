import React from 'react'
import Image2 from "../images/IMG_6487.jpg";
import Image from "../images/mailchimp-Vc2dD4l57og-unsplash.jpg";
import { motion } from "framer-motion";



const HomePage = () => {
  return (
    <motion.div className="homepage" 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.8, delay: 0.1}}
    >

      {/* hero-sec */}

      <div className="hero">
        <div className="hero-text">
          <h1>PORTFOLIO</h1>
          <p>INAGAKI.</p>
        </div>
        <div className="hero-image">
          <img src={ Image }  />
        </div>
      </div>


      {/* introduction-sec */}

      <div className="self-introduction">
        <div className="self-icon">
          <img src={ Image2 } />
        </div>
        <div className="introduction-text">
          <h1>INAGAKI TSUBASA</h1>
          <h5>YouTubeを利用して、独学でフロント<br />
            エンジニアを目指しています。<br />
            アイコンの画像は令和一年の写真です。</h5>


        </div>

      </div>

    </motion.div>
  )           
}

export default HomePage