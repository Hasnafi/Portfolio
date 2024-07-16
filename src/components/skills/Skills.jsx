import React from 'react'
import "./Skills.css"
import SectionOne from "./SectionOne"
import SectionTwo from "./SectionTwo"
import SectionThree from "./SectionThree"

const Skills = () => {
  return (
    <section className="skills container section" id='skills'>
        <h2 className="section_title">Skills</h2>
        <p className="small_title">Technical Skills.</p>
        <div className="skills_container grid">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
        </div>
    </section>
  )
}

export default Skills
