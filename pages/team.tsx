import type { NextPage } from 'next'
import Head from 'next/head'

const Team: NextPage = () => {
  return (
    <>
      <Head>
        <title>Team - TripleOak</title>
      </Head>

      <div className='md:flex w-3/4 min-h-[calc(100vh-18rem)] mx-auto'>
        <div className='w-full md:w-1/2'>
          <img src="/team/joao_carvalho.png" className="rounded-full w-32 h-32 mx-auto" />
          <h3 className='text-center mt-4'>João Carvalho</h3>
          <p className='text-center text-gray-500'>Co-Founder & Managing Partner</p>
        </div>
        <div className='w-full md:w-1/2 mt-12 md:mt-0'>
          <img src="/team/ricardo_carvalho.jpeg" className="rounded-full w-32 h-32 mx-auto" />
          <h3 className='text-center mt-4'>Ricardo Carvalho</h3>
          <p className='text-center text-gray-500'>Co-Founder & Managing Partner</p>
        </div>
      </div>
    </>
  )
}

export default Team
