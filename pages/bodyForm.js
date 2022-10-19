import Head from 'next/head'
import BodyFormItems from '../components/BodyFormItems'
import DemoBodyDiv from '../components/DemoBodyDiv'
import BodyFormNavs from '../components/BodyFormNavs'


export default function BodyForm() {
  return (
    <div >
      <Head>
        <link href='https://fonts.googleapis.com/css?family=Rubik' rel='stylesheet'/>
        <title>Edit Body Section</title>
      </Head>

      <BodyFormNavs/>
      <DemoBodyDiv/>
      <BodyFormItems/>
     
    </div>
  )
}
