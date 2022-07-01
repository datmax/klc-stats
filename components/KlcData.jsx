import { motion, AnimatePresence, animate } from 'framer-motion'
import AnimatedText from './AnimatedText'

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
export function LgData({ block, time }) {
  return (
    <motion.div
      initial="initial"
      variants={letterVariant}
      animate="animate"
      exit="exit"
      className=" px-4 pt-28 text-center"
    >
      <motion.div className="pb-8 ">
        <h1 className="pb-4 text-white">Validators</h1>
        <h2 className="font-extralight">11</h2>
      </motion.div>
      <motion.div className="py-8 ">
        <h1 className="text-white">Last block</h1>
        <h2 className="font-extralight">
          <AnimatePresence exitBeforeEnter>
            <AnimatedText text={block.number} key={block.number}></AnimatedText>
          </AnimatePresence>
        </h2>
      </motion.div>{' '}
      <motion.div className="py-8 ">
        <h1 className="text-white">Last block time</h1>
        <h2 className="font-extralight">{time ? time : '--'} s</h2>
      </motion.div>{' '}
      <motion.div className="py-8 ">
        <h1 className="text-white">Last validator</h1>
        <h2 className="break-all font-extralight">
          <AnimatePresence exitBeforeEnter>
            <AnimatedText text={block.miner} key={block.miner}></AnimatedText>
          </AnimatePresence>
        </h2>
      </motion.div>{' '}
      <motion.div className="py-8">
        <h1 className="text-white">Last block weight</h1>
        <h2 className="font-extralight">
          {block.size ? block.size - 1521 : '--'} bytes
        </h2>
      </motion.div>
    </motion.div>
  )
}

export function MobileData({ block, time }) {
  return (
    <div className=" pt-28 text-left">
      <div className="pb-8 pl-40">
        <h1 className="pb-4 text-white">Validators</h1>
        <h2 className="font-extralight">11</h2>
      </div>
      <div className="py-8 pl-40">
        <h1 className="text-white">Last block</h1>
        <AnimatePresence exitBeforeEnter>
          <AnimatedText text={block.number} key={block.number}></AnimatedText>
        </AnimatePresence>
      </div>{' '}
      <div className="py-8 pl-32">
        <h1 className="text-white">Last block time</h1>
        <h2 className="font-extralight">{time ? time : '--'} s</h2>
      </div>{' '}
      <div className="py-8 pl-20">
        <h1 className="text-white">Last validator</h1>
        <h2 className="font-extralight">
          <AnimatePresence exitBeforeEnter>
            <AnimatedText text={block.miner} key={block.miner}></AnimatedText>
          </AnimatePresence>
        </h2>
      </div>{' '}
      <div className="py-8 pl-20">
        <h1 className="text-white">Last block weight</h1>
        <h2 className="font-extralight">
          {block.size ? block.size - 840 : '--'} bytes
        </h2>
      </div>
    </div>
  )
}
