import { motion } from 'framer-motion'
const openingVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    scale: [0.9, 1.02, 1],
    transition: {
      duration: 1.5,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    x:-300,
    transition: {
      duration: 0.3,
    },
  },
}

export default function Opening() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={openingVariant}
      className="flex w-full flex-1 flex-col items-center justify-center text-center text-7xl  font-thin"
    >
      KAIBA LIGHTNING CHAIN
    </motion.main>
  )
}
