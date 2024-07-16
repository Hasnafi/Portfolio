import React from 'react'
import "./Home.css"


const ScrollDown = () => {
  return (
    <div>
      <div className="scroll_down">
        <a href='#about' className='mouse_wrapper'>
            <span className="home_scroll-name">
                Scroll Down
            </span>
            <span className="mouse">
                <span className="wheel">
                    
                </span>
            </span>
        </a>
      </div>
    </div>
  )
}

export default ScrollDown
