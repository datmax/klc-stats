import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Opening from '../components/Opening'
import Content from '../components/Content'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ethers } from 'ethers'
var Web3 = require('web3')

const Home: NextPage = () => {
  const [showOpening, setShowOpening] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [block, setblock] = useState({})
  const [time, setTime] = useState(0)

  const getData = async () => {
    const web3 = new Web3('https://www.klc.live/')
    try {
      const current = await web3.eth.getBlock('latest')
      console.log(current.size)
      const previous = await web3.eth.getBlock(current.number - 1)
      const elapsed = current.timestamp - previous.timestamp
      console.log(current)
      setTime(elapsed)
      setblock(current)
    } catch (err) {
      console.log('current err', err)
    }

    //const newTime = data.timestamp - block.timestamp
  }

  useEffect(() => {
    getData()

    setInterval(() => {
      getData()
    }, 30 * 1000)

    setTimeout(() => {
      setShowOpening(false)
    }, 3000)
  }, [])

  useEffect(() => {
    if (!showOpening) {
      setShowContent(true)
    }
  }, [showOpening])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black  text-themeblue">
      <Head>
        <title>KLC stats</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence exitBeforeEnter>
        {showOpening && <Opening key="opening"></Opening>}
        {showContent && (
          <Content key="content" block={block} time={time}></Content>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Home
