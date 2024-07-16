import React from 'react'
import "./Skills.css"

const SectionOne = () => {
  return (
    <div className="skills_content">
        <h3 className="skills_title">Programming Languages</h3>
        <div className="skills_box">
            <div className="skills_group">
                <div className="skills_data">
                    <i class='icon-badge'></i>
                    <div>
                        <h3 className="skills_name">Python</h3>
                        <span className="skills_level">Good</span>
                    </div>
                </div>          
            </div>
            <div className="skills_group">
                <div className="skills_data">
                    <i class='icon-badge'></i>
                    <div>
                        <h3 className="skills_name">Java</h3>
                        <span className="skills_level">Medium</span>
                    </div>
                </div>          
            </div>

        </div>

        <div className="skills_box">
            <div className="skills_group">
                <div className="skills_data">
                    <i class='icon-badge'></i>
                    <div>
                        <h3 className="skills_name">Javascript</h3>
                        <span className="skills_level">Very good</span>
                    </div>
                </div>          
            </div>
         
            <div className="skills_group">
                <div className="skills_data">
                    <i class='icon-badge'></i>
                    <div>
                        <h3 className="skills_name">C</h3>
                        <span className="skills_level">Very good</span>
                    </div>
                </div>          
            </div>
         

        </div>

        <div className="skills_box">
                 
           <div className="skills_group">
                <div className="skills_data">
                    <i class='icon-badge'></i>
                    <div>
                        <h3 className="skills_name">Asembler</h3>
                        <span className="skills_level">Medium</span>
                    </div>
                </div>          
            </div>
         
            
         
          

        </div>
    </div>
  )
}

export default SectionOne
 