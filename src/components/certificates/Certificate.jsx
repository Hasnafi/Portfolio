import React from 'react'
import "./Certificate.css"
import img1 from "../../assets/certif.jpg"
import img2 from "../../assets/certif2.jpg"


const Certificate = () => {
    return (
        <section className="blog container section" id='certificates'>
            <h2 className="section_title">
                Certificates
            </h2>
            <p className="small_title">Credentials and Achievements.</p>
            <div className="blog_container grid">
                <div className="blog_card">
                    <div className="blog_thumb">
                        <a href='#'><span className="blog_category">Coursera</span></a>
                        <a href='#'><img src={img1} alt="" className='blog_img' /></a>
                    </div>
                    <div className="blog_details">
                        <h3 className="blog_title">Supervised Machine Learning: Regression and
                        Classification</h3>
                        <div className="blog_meta">
                            <span>April 15, 2024</span>
                        </div>
                    </div>
                </div>

                <div className="blog_card">
                    <div className="blog_thumb">
                        <a href='#'><span className="blog_category">Coursera</span></a>
                        <a href='#'><img src={img2} alt="" className='blog_img' /></a>
                    </div>
                    <div className="blog_details">
                        <h3 className="blog_title">Course 2 : Advanced Learning Algorithms</h3>
                        <div className="blog_meta">
                            <span>May 8, 2024</span>
                        </div>
                    </div>
                </div>

                <div className="blog_card">
                    <div className="blog_thumb">
                        <a href='#'><span className="blog_category">Coursera</span></a>
                        <a href='#'><img src={img1} alt="" className='blog_img' /></a>
                    </div>
                    <div className="blog_details">
                        <h3 className="blog_title">Unsupervised Learning, Recommenders, RL</h3>
                        <div className="blog_meta">
                            <span>09 february, 2022</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certificate
