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
<meta property="og:title" content="fdfs"/>
<meta property="og:type" content="portfolio" />
<meta property="og:image" content="https://nikalomashvili.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnika3.63655bcd.png&w=1920&q=75"/>
<meta property="og:url" content="https://nikalomashvili.netlify.app"/>
<meta name="twitter:card" content="summary_large_image"/>

<meta property="og:description" content="Offering tour packages for individuals or groups."/>
<meta property="og:site_name" content="European Travel, Inc."/>
<meta name="twitter:image:alt" content="Alt text for image"></meta>
        
 
        <link rel="icon" href="/Logo2.jpeg" />
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
