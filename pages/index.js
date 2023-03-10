import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log(
"This website was made by me using React, CSS3 with multiple React libraries and toolkits, such as: Bootstrap, vertical timeline etc. You can check out the code in 'https://github.com/nikaloamashvili', Icons were used on this website and on my cv, license 'https://fontawesome.com/license/free'")
  return (
    <>
      <Head>
        <title>Nika Lomashvili</title>
        <link rel="icon" href="/Logo2.jpeg" />
<meta property='og:title' content="Nika's Portfolio"/>
<meta property='og:image' content='//i.ibb.co/nbGzNZC/nika3-removebg-preview.jpg'/>
<meta property='og:description' content='Personal Portfolio Website created using ReactJS'/>
<meta property='og:url' content='//metatags.io/'/>
      </Head>
      <main className={styles.main}>
        <Navbar/>
        <Header/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <ContactMe/>
      </main>
    </>
  )
}
