import React from 'react'
import ContentTitle from './ContentTitle'
import { motion } from "framer-motion";

const Question = () => {
  return (
    <motion.div className="question-content"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.8, delay: 0.1}}
    >
        <ContentTitle title="MY QUESTION PAGE" />
    </motion.div>
  )
}

export default Question