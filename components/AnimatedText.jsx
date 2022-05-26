import { motion, AnimatePresence, animate } from 'framer-motion'
const contentVariant = {
    initial: {
      opacity: 0,
      x: 300,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: 200,
    },
  }
  
  const letterVariant = {
    animate: {
      opacity: 1,
      scale: [1.05, 1],
      x: [-5, 0],
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
      },
    },
    initial: {
      scale: 0,
      opacity: 0,
    },
    exit: {
      opacity: 0,
  
      transition: {
        duration: 0.4,
      },
    },
  }
  
  const mobileVariant = {
    initial: {
      opacity: 0,
      y: 300,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }
export default function AnimatedText({ text }) {
  const split = (text + '').split('')
  return (
    <motion.h2
      variants={letterVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      key={text}
      className="font-extralight"
    >
      {split.map((el, index) => (
        <motion.span key={index} variants={letterVariant}>
          {el}
        </motion.span>
      ))}
    </motion.h2>
  )
}
