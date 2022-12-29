import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/Char1L.png'
import Logo from './Logo';
import {LazyLoadImage }  from "react-lazy-load-image-component"
import TestImg from '../../assets/images/new.png'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['l', 'i',' ','O', 'm', 'a', 'r']
  const jobArray = [
    'I',
    "'m",
    ' ',
    'a',
    ' ',
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 6000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>
            <p>Full-Stack Developer ||</p>
            <p>JavaScript Lover ||</p>
            <p>TypeScript Enthusiastic</p>
          </h2>
          <a href="#moreInfo" className="flat-button">
            Meet Ali

          </a>
        </div>
          <Logo />
      </div>
      <Loader type="pacman" />
      <div id='moreInfo' className='more-info'>
        <div className='text-cont text-zone'>
          <p>The code isn’t just your job anymore, it’s your craft.</p>
          <p>Growing up, I used to dismantle everything at sight trying to
            figure out how and why they work the way they do,
            the satisfaction of rebuilding to full functionality
            is something I got addicted to. </p>
          <p>
            I thought my dream was to be an IT technician for a little company,
            sipping coffee and waiting for employees to need my help,
            It seemed enough for a young man.
            But I felt it wasn't quite enough. I yearned to learn more,
            I longed to learn something different. </p>
            <p>
            That's when my journey started, the spark I was missing ignited the instant I started my first JavaScript tutorial.
            Now, and after All of this who I'm I, and what do I have under my belt?</p>
        </div>
        <div className='img-container'>
          <LazyLoadImage
            src={TestImg}
            width={400} height={400}
            alt="Image Alt"
          />
        </div>
      </div>
    </>
  )
}

export default Home
