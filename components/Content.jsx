import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
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

function AnimatedText({ text }) {
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
      {split
        ? split.map((el) => (
            <motion.span key={el} variants={letterVariant}>
              {el}
            </motion.span>
          ))
        : '--'}
    </motion.h2>
  )
}

export default function Content({ block, time }) {
  const add = () => {
    window.ethereum
      .request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0x2D',
            chainName: 'KLC Testnet',
            nativeCurrency: {
              name: 'Kaiba DeFi',
              symbol: 'KAIBA',
              decimals: 18,
            },
            rpcUrls: ['https://www.klc.live/'],
            blockExplorerUrls: ['https://kaibascan.io/'],
          },
        ],
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={window.innerWidth >= 1000 ? contentVariant : mobileVariant}
      className="min-h-screen w-full bg-black bg-opacity-80 bg-bg bg-cover bg-center text-center text-themeblue"
    >
      <div className="lg:hidden">
        <div className="grid grid-cols-2">
          <div>
            <h3 className="px-4 py-2 text-left font-thin text-white">
              Status: <span className="text-themeblue"> active</span>
            </h3>
          </div>
          <div>
            <h3
              onClick={add}
              className="px-4 py-2 text-left font-thin hover:cursor-pointer"
            >
              Add klc to your wallet
            </h3>
          </div>
        </div>
        <h1 className="pt-20 text-5xl font-thin">KLC control center</h1>

        <div className=" px-4 pt-28 text-center">
          <motion.div className="pb-8 ">
            <h1 className="pb-4 text-white">Validators</h1>
            <h2 className="font-extralight">11</h2>
          </motion.div>
          <motion.div className="py-8 ">
            <h1 className="text-white">Last block</h1>
            <h2 className="font-extralight">
              <AnimatePresence exitBeforeEnter>
                <AnimatedText
                  text={block.number}
                  key={block.number}
                ></AnimatedText>
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
                <AnimatedText
                  text={block.miner}
                  key={block.miner}
                ></AnimatedText>
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
      </div>

      <div className="hidden flex-row lg:flex lg:max-w-7xl ">
        <div className=" flex min-h-screen basis-1/2 items-center justify-center ">
          <p className="px-20 text-7xl font-thin">KLC control center</p>
          <svg
            width="151"
            height="954"
            viewBox="0 0 151 954"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M150 1L108.469 57.3602L66.9389 113.72V407.05L1 484.332V954"
              stroke="white"
            />
          </svg>
        </div>
        <div className=" basis-1/2 font-thin">
          <div className="pt-12 text-right ">
            <h1 className="text-white">
              Status:{' '}
              <span className="text-themeblue">
                {block == {} ? 'Inactive' : 'Active'}
              </span>
            </h1>
            <motion.h3
              onClick={add}
              className="hover:cursor-pointer"
              whileHover={{ scale: 1.02, x: -5, color: 'white' }}
            >
              Add klc to your wallet
            </motion.h3>
          </div>
          <div className=" pt-28 text-left">
            <div className="pb-8 pl-40">
              <h1 className="pb-4 text-white">Validators</h1>
              <h2 className="font-extralight">11</h2>
            </div>
            <div className="py-8 pl-40">
              <h1 className="text-white">Last block</h1>
              <AnimatePresence exitBeforeEnter>
                <AnimatedText
                  text={block.number}
                  key={block.number}
                ></AnimatedText>
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
                  <AnimatedText
                    text={block.miner}
                    key={block.miner}
                  ></AnimatedText>
                </AnimatePresence>
              </h2>
            </div>{' '}
            <div className="py-8 pl-20">
              <h1 className="text-white">Last block weight</h1>
              <h2 className="font-extralight">
                {block.size ? block.size - 1521 : '--'} bytes
              </h2>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
