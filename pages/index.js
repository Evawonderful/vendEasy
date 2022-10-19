import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomeNavs from '../components/HomeNavs'
import SectionLogo from '../components/SectionLogo'
import SectionCard from '../components/SectionCard'
import FormFooter from '../components/FormFooter'

export default function Home() {
  return (
    <div >
      <Head>
        <link href='https://fonts.googleapis.com/css?family=Rubik' rel='stylesheet'/>
        <title>Team UI</title>
      </Head>

      <HomeNavs/>
      <SectionLogo/>
      <SectionCard/>
      <FormFooter/>
    </div>
  )
}
