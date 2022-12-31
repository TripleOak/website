import type { NextPage } from 'next'
import Head from 'next/head'

const Contact: NextPage = () => {
  //try to prevent some spam
  let domain = "tripleoak.vc"

  return (
    <>
      <Head>
        <title>Contact - TripleOak</title>
      </Head>

      <div className='w-3/4 min-h-[calc(100vh-18rem)] mx-auto'>
        <h2 className='text-lg font-serif'>Information</h2>
        <a href={`mailto:info@${domain}`} className='text-2xl font-serif hover:text-gray-700'>info@{domain}</a>

        <h2 className='text-lg font-serif mt-8'>Companies</h2>
        <a href={`mailto:companies@${domain}`} className='text-2xl font-serif hover:text-gray-700'>companies@{domain}</a>

        <h2 className='text-lg font-serif mt-8'>Investors</h2>
        <a href={`mailto:investors@${domain}`} className='text-2xl font-serif hover:text-gray-700'>investors@{domain}</a>
      </div>
    </>
  )
}

export default Contact
