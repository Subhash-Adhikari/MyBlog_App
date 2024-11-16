import React from 'react'
import Navbar from '../global_components/navbar/Navbar'
import Layout from '../global_components/layout/layout'
import Card from './components/Card/Card'

const Home = () => {
  return (
    <Layout>
    <div className='flex flex-wrap justify-center space-x-5 mt-6'>
    <Card />
    <Card />
    <Card />
    <Card />
    </div>
    </Layout>
  )
}

export default Home