import Head from 'next/head'
import BodyFormItems from '../components/BodyFormItems'
import DemoBodyDiv from '../components/DemoBodyDiv'
import HeroFormItems from '../components/HeroFormItems'
import HeroFormNavs from '../components/HeroFormNavs'


export default function BodyForm() {
  return (
    <div >
      <Head>
        <link href='https://fonts.googleapis.com/css?family=Rubik' rel='stylesheet'/>
        <title>Edit Body Section</title>
      </Head>

      <HeroFormNavs/>
      <DemoBodyDiv/>
      <BodyFormItems/>
     
    </div>
  )
}
