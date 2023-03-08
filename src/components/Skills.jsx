import React from 'react'
import ContentTitle from './ContentTitle'
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div className="skills-content"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.8, delay: 0.1}}
    >
        <ContentTitle title="MY SKILLS PAGE" />
    </motion.div>
  )
}

export default Skills