import Head from 'next/head'
import DemoHeroDiv from '../components/DemoHeroDiv'
import HeroFormItems from '../components/HeroFormItems'
import HeroFormNavs from '../components/HeroFormNavs'


export default function Home() {
  return (
    <div >
      <Head>
        <link href='https://fonts.googleapis.com/css?family=Rubik' rel='stylesheet'/>
        <title>Edit Hero Section</title>
      </Head>

      <HeroFormNavs/>
      <DemoHeroDiv/>
      <HeroFormItems/>
     
    </div>
  )
}
