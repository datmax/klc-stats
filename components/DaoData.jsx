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
export function LgDaoData({ daoData }) {
  return (
    <div className=" px-4 pt-28 text-center">
      <motion.div className="pb-8 ">
        <h1 className="pb-4 text-white">{daoData}</h1>
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
    </div>
  )
}

export function MobileDaoData({ daoData }) {
  return (
    <motion.div
      variants={letterVariant}
      initial="initial"
      exit="exit"
      animate="animate"
      className=" pt-20 text-left"
    >
      <div className="px-8 pb-8 lg:pl-40">
        <h1 className="pb-2 text-sm text-white">Total shares</h1>
        <div className="grid grid-cols-2">
          <h1 className="mb-4 text-left text-4xl font-extralight text-themeblue">
            {daoData['Total scores']}
          </h1>
          <h2 className="text-right text-white">Shares</h2>
        </div>
        {daoData && (
          <div>
            {Object.keys(daoData['DAO Informations']['validators']).map(
              (val) => {
                return (
                  <motion.div
                    variants={letterVariant}
                    className="grid grid-cols-2 py-2"
                  >
                    <div className="text-white">
                      {val.slice(0, 4) +
                        '...' +
                        val.slice(val.length - 4, val.length)}
                    </div>
                    <div className="text-right font-extralight text-themeblue">
                      {daoData['DAO Informations']['validators'][val].score}{' '}
                      <span className="text-themewhite">|</span>{' '}
                      {(
                        daoData['DAO Informations']['validators'][val].score /
                        daoData['Total scores']
                      ).toFixed(2) *
                        100 +
                        '%'}
                    </div>
                  </motion.div>
                )
              }
            )}
          </div>
        )}
      </div>
      <div className="py-8 pl-40"></div>
    </motion.div>
  )
}
