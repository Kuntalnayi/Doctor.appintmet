import React from 'react'
import Header from '../components/Header'
import Speacility from '../components/Speacility'
import Topdoctor from '../components/Topdoctor'
import Tracker from '../components/Tracker'

const Home = () => {
  return (
    <div>
        <Header/>
        <Speacility/>
        <Topdoctor/>
        <Tracker/>
    </div>
  )
}

export default Home