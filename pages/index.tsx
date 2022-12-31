import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TripleOak</title>
      </Head>

      <div className='lg:flex lg:items-center sm:w-11/12 md:w-3/4 mx-auto'>
        <div className='w-full md:w-3/4 lg:w-6/12 mx-auto'>
          <div className='video-wrapper'>
            <video className='video' src="/video.mov" autoPlay loop muted playsInline controlsList="nodownload"></video>
          </div>
        </div>

        <div className='w-full mt-12 lg:mt-0 lg:w-6/12 px-8'>
          <h2 className='text-2xl font-serif text-center lg:text-left'>TripleOak is a family-owned investment firm dedicated to supporting companies building the future of the internet</h2>

          <p className='mt-4 text-center font-thin text-base lg:text-left'>We are a team of experienced entrepreneurs, and engineers who have built and supported companies that have changed the way we live and work. We are passionate about the future of the internet and the companies that are building it.</p>

          <p className='mt-4 text-center font-thin lg:text-left'>We believe that these technologies have the potential to revolutionize industries and create a more decentralized, open, and equitable internet. We specialize in investing in companies that are building on the web3 ecosystem, which includes decentralized technologies such as blockchain, peer-to-peer networks, and other distributed systems.</p>

          <p className='mt-4 text-center font-thin lg:text-left'>We are committed to working closely with the companies in our portfolio to provide not just financial and technical support, but also strategic guidance and access to our resources. We are excited to be a part of this exciting and rapidly-evolving industry, and we look forward to helping web3 companies realize their full potential.</p>
        </div>
      </div>
    </>
  )
}

export default Home
