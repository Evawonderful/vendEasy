import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PublishNavs from '../components/PublishNavs'
import PublishSectionLogo from '../components/PublishSectionLogo'
import PublishSectionCard from '../components/PublishSectionCard'
import PublishFooter from '../components/PublishFooter'

export default function Published() {
  return (
    <div >
      <Head>
        <link href='https://fonts.googleapis.com/css?family=Rubik' rel='stylesheet'/>
        <title>Team UI</title>
      </Head>

      <PublishNavs/>
      
      <PublishSectionLogo/>
      <PublishSectionCard/>
      <PublishFooter/>
    </div>
  )
}
