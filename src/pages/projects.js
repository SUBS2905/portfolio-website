import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import Head from 'next/head'
import React from 'react'

const projects = () => {
  return (
    <>
      <Head>
        <title>Subhransu | Projects page</title>
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text="Imagination Trumps Knowledge!" />
        </Layout>
      </main>
    </>
  )
}

export default projects