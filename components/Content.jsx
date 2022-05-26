import { motion, AnimatePresence, animate } from 'framer-motion'
import { useState, useEffect } from 'react'
import { LgData, MobileData } from './KlcData'
import { LgDaoData, MobileDaoData } from './DaoData'
import AnimatedText from './AnimatedText'

const bgStyles = [
  'min-h-screen w-full bg-gradient-to-tr from-violet-800/30 via-black/20 to-black/20 bg-opacity-20',
  'min-h-screen w-full bg-gradient-to-tr from-violet-800/40 via-black/20 to-black/20 bg-opacity-20',
  'min-h-screen w-full bg-gradient-to-tr from-violet-800/50 via-black/20 to-black/20 bg-opacity-20',
  'min-h-screen w-full bg-gradient-to-tr from-violet-800/60 via-black/20 to-black/20 bg-opacity-20',
]

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

export default function Content({ block, time, daoData }) {
  const [dao, setDao] = useState(false)

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
      variants={contentVariant}
      className="saturate-1000 min-h-screen  w-full bg-opacity-80  bg-bg bg-cover bg-center text-center text-themeblue"
    >
      <div className="min-h-screen w-full bg-opacity-20 bg-gradient-to-tr from-violet-800/30 via-black/20 to-black/20">
        <motion.div
          initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
          animate={{
            backgroundColor: ['rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0)'],
            transition: {
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
              restSpeed: 1,
            },
          }}
        >
          <div className="lg:hidden ">
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
            <div className="grid grid-cols-1">
              <h1 className="pt-20 text-5xl font-thin text-white">
                KLC control center
              </h1>
              <button
                className="mx-2 font-thin text-white hover:underline active:outline-none"
                onClick={() => setDao(false)}
              >
                KLC
              </button>
              <button
                className="mx-2 font-thin text-white hover:underline active:outline-none"
                onClick={() => setDao(true)}
              >
                DAO
              </button>
            </div>
            {!dao && <LgData block={block} time={time}></LgData>}
            {dao && <MobileDaoData daoData={daoData}></MobileDaoData>}
          </div>

          <div className=" hidden min-h-screen w-full flex-row  lg:flex lg:max-w-7xl">
            <div className=" flex min-h-screen w-full basis-1/2 items-center justify-center  ">
              <div className="grid grid-cols-1">
                <p className="w-full px-20 text-7xl font-thin">
                  KLC control center
                </p>
                <div className="mt-4 ">
                  <button
                    className="mx-2 font-thin text-white hover:underline active:outline-none"
                    onClick={() => setDao(false)}
                  >
                    KLC
                  </button>
                  <button
                    className="mx-2 font-thin text-white hover:underline active:outline-none"
                    onClick={() => setDao(true)}
                  >
                    DAO
                  </button>
                </div>
              </div>
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
              <AnimatePresence exitBeforeEnter>
                {dao && (
                  <MobileDaoData daoData={daoData} key="1"></MobileDaoData>
                )}
                {!dao && (
                  <MobileData block={block} time={time} key="2"></MobileData>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
