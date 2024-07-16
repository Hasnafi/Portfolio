import React from 'react'
import "./Home.css"
import Me from "../../assets/pfp.png"
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'

const Home = () => {
  return (
    <div>
      <section className="home container" id="home">
        <div className="intro">

          <img src={Me} alt="" className="home_img" />
          <h1 className="home_name">Filali Sara</h1>
          <span className="home_education">Welcome to my potfolio !</span>

          <HeaderSocials />
          
          <a href='#contact' className='btn'>Hire Me</a>

          <ScrollDown />
        </div>
      </section>
    </div>
  )
}

export default Home
