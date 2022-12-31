import type { NextPage } from 'next'
import Head from 'next/head'

const TermsOfUse: NextPage = () => {
  return (
    <>
      <Head>
        <title>Terms Of Use - TripleOak</title>
      </Head>

      <div className='w-3/4 mx-auto'>
        <h2 className='text-2xl font-normal'>Privacy Policy</h2>
        <p className='mt-4 font-thin'>
          This page is available on the tripleoak.vc domain and is owned by the company commercial unit TRIPLEOAK, LDA, NIPC 515 638 030, headquartered at Rua da Telecom, nº 8, 1º B, 7540-181 Santiago do Cacém, Telephone: +351 269 030 096, Contact email: info@tripleoak.vc.<br />
          <br />
          The content of this page is made available for the purpose of providing character information general. Tripleoak, Lda excludes its responsibility for any damages that may occur related to the information contained in this page, being the content of the same informational only.<br />
          <br />
          You are authorized to download and temporarily store the content of this page for the purpose of viewing it on a personal device. Reproduction, permanent storage or retransmission of the content on this page is expressly prohibited without prior written permission. All rights relating to this page are the exclusive property of Tripleoak, Lda.<br />
          <br />
          By using this page, you agree to the collection and use of your information, as set out in these Terms and in the Privacy Policy, reserving the right, at any time and without prior notice, to change these Terms or Privacy Policy, the changes being published on this page.
        </p>

        <h3 className='text-xl font-normal mt-8'>Collected Information</h3>
        <p className='mt-4 font-thin'>
          Browsing through this page does not imply the provision of personal data, as no personal data identifying the user is automatically registered.<br />
          <br />
          Tripleoak, Lda may collect non-personal and non-identifiable information from a specific user in order to monitor the use of our services and to help us develop and improve our website.
        </p>

        <h3 className='text-xl font-normal mt-8'>Personal data</h3>
        <p className='mt-4 font-thin'>
          We are committed to protecting your privacy. Although browsing the page does not imply providing personal data, we collect the information you choose to fill in the forms. In order for the personal data collected through the filling out of forms to be used, Tripleoak will provide the user with the necessary information so that, in advance, he can give his consent to the treatment, when this is required, under the terms of the Privacy Policy in force.
        </p>
      </div>
    </>
  )
}

export default TermsOfUse
