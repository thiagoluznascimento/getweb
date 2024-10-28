import React from 'react'
import ParticleRing from '../../components/Background'
import Header from '../../components/Header'
import Companies from '../../components/Marquee'
import Footer from '../../components/Footer'
import Profile from '../../components/Profile'
import Cards from '../../components/Cards'


function Home() {
  return (
    <>
    <Header />
    <ParticleRing />
    <Companies />
    <Cards />
    <Profile />
    <Footer />
    </>
  )
}

export default Home