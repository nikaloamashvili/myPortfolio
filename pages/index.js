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

<meta name="title" content="Nika's portfolio"/>
<meta name="description" content="Personal Portfolio Website created using ReactJS"/>
<meta property="og:type" content="website"/>
<meta property="og:url" content="https://metatags.io/"/>
<meta property="og:title" content="Nika's portfolio"/>
<meta property="og:description" content="Personal Portfolio Website created using ReactJS"/>
<meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>

<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://metatags.io/"/>
<meta property="twitter:title" content="Nika's portfolio"/>
<meta property="twitter:description" content="Personal Portfolio Website created using ReactJS"/>
<meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"></meta>
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
