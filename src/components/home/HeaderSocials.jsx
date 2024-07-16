import React from 'react'
import "./Home.css"


const HeaderSocials = () => {
  return (
    <div className="home_socials">
        <a href="https://github.com/Hasnafi" className="home_social-link" target="_blank">
          <i class="fa-brands fa-github"></i>
        </a>

        <a href="https://www.instagram.com/has.nafilali/" className="home_social-link" target="_blank">
          <i class="fa-brands fa-twitter"></i>
        </a>

        <a href="https://www.behance.net/sarafilali1" className="home_social-link" target="_blank">
          <i class="fa-brands fa-behance"></i>
        </a>

        <a href="https://www.linkedin.com/in/sara-filali-7788bb220/" className="home_social-link" target="_blank">
          <i class="fa-brands fa-linkedin"></i>
        </a>
    </div>
  )
}

export default HeaderSocials
