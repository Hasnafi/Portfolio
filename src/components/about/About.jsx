import React from 'react'
import "./About.css"
import Image from "../../assets/pfp.png"

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section_title">About Me</h2>
      <p className="small_title">Passionate Learner and Innovator !</p>
      <div className="about_container grid">
        <img src={Image} alt="" className='about_img' />
        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
            As a computer science student currently in my fourth year at the higher national school of computer science - ESI Algiers, 
            specializing in computer systems, I have developed a work philosophy based on rigor, 
            innovation, and the pursuit of creative solutions. My academic journey has provided 
            me with a solid foundation of knowledge in computer science while allowing me to 
            explore various fields such as artificial intelligence, optimization, and networking. 
            I am constantly seeking new opportunities to deepen my skills and contribute to innovative 
            projects in these exciting domains.
            </p>
            <a href='https://drive.google.com/file/d/17iPPJrr5zWHOyRo7rEk1wPbD3oVlEdfe/view' className='btn'>Download CV</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
