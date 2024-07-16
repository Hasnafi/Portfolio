import React from 'react'
import "./Portfolio.css"
import wazuh from "../../assets/wazuh.jpg"
import optim from "../../assets/optim.jpg"
import igl from "../../assets/igl.png"
import imn from "../../assets/imn.jpg"

const Portfolio = () => {
    return (
        <section className="blog container section" id='portfolio'>
            <h2 className="section_title">
                Portfolio
            </h2>
            <p className="small_title">Showcase of some of my Work.</p>
            <div className="blog_container grid">
                <div className="blog_cardP">
                    <div className="blog_thumb">
                        <a href='#'><span className="blog_category">AI</span></a>
                        <a href='#'><img src={imn} alt="" className='blog_img' /></a>
                    </div>
                    <div className="blog_details">
                        <h3 className="blog_title">Real-Time Driver Drowsiness Detection Using CNN</h3>
                        <div className="blog_meta">
                            <span>This project focuses on detecting driver fatigue or drowsiness in 
                            real-time using a camera in the vehicle. By detecting eye movements
                            and other signs of drowsiness, and using Convolutional Neural Networks 
                            (CNN) for classification, the system aims to enhance road safety by 
                            providing alerts for drowsy drivers.</span>
                        </div>
                        <a href='https://github.com/Hasnafi/Drowsiness-Detection-using-CNN.git' className='btn'>See details...</a>
                    </div>
                </div>

                <div className="blog_cardP">
                    <div className="blog_thumb">
                        <a href='#'><span className="blog_category">Frontend / Backend</span></a>
                        <a href='#'><img src={igl} alt="" className='blog_img' /></a>
                    </div>
                    <div className="blog_details">
                        <h3 className="blog_title">Estate.io - Real Estate Application web</h3>
                        <div className="blog_meta">
                            <span>Estate.io is a web application that allows users to publish and browse 
                            real estate listings. Users can search for listings, filter results, view 
                            details on Google Maps, save favorites, and contact listing posters. 
                            Authenticated users can also manage their own listings and view offers from other users.</span>
                        </div>
                        <a href='https://github.com/ikramMc/TP_IGL_estate-io.git' className='btn'>See details...</a>
                    </div>
                </div>

                <div className="blog_cardP">
                    <div className="blog_thumb">
                        <a href='#'><span className="blog_category">Optimization</span></a>
                        <a href='#'><img src={optim} alt="" className='blog_img' /></a>
                    </div>
                    <div className="blog_details">
                        <h3 className="blog_title">Solving TSP with Hyperheuristics Using ACO.</h3>
                        <div className="blog_meta">
                            <span>We developed a hyperheuristic approach using the Ant 
                                Colony Optimization algorithm ( ACO ) to solve the Traveling Salesman Problem ( TSP ). The goal was to create an efficient solution for optimizing travel 
                                routes, demonstrating the effectiveness of hyperheuristics in solving optimization problems.</span>
                        </div>
                        <a href='https://github.com/Hasnafi/Hyper-heuristic.git' className='btn'>See details...</a>
                    </div>
                </div>

                <div className="blog_card">
                    <div className="blog_thumb">
                        <a href='#'><span className="blog_category">Cybersecurity / networkig</span></a>
                        <a href='#'><img src={wazuh} alt="" className='blog_img' /></a>
                    </div>
                    <div className="blog_details">
                        <h3 className="blog_title">Creating a SIEM Solution</h3>
                        <div className="blog_meta">
                            <span>We set up a virtual network using VMware and created a 
                                SIEM system with Wazuh. By integrating various tools, 
                                we enhanced its capabilities and tested the system with 
                                simulated cyber attacks to ensure effective threat 
                                detection and response.</span>
                        </div>
                        <a href='https://drive.google.com/file/d/1_ckTFj2Yf8lzr_Y7qV5E1mtazT9VOJvC/view' className='btn'>See details...</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio