import React, { Fragment } from 'react'
import './Header.css'
import profilePic from '../assets/profilepic.png'

const Header = () => {
    return(
        <Fragment>
            <header className="header">
 
                    <div className="header-box">
                        <div className="heading">
                            <img src={profilePic} alt="profile_picture" className="logo" />
                            <h1 className="heading-primary">
                                <span className="heading-primary-main">
                                    Hi! I'm Dolee
                                </span>
                                <span className="heading-primary-sub">
                                    Consultant/Hobbyist
                                </span>
                                <div className="social-media">
                                    <i className="fab fa-facebook"></i>
                                    <i className="fab fa-github"></i>
                                    <i className="fab fa-linkedin"></i>
                                    <i className="fab fa-instagram"></i>
                                </div>
                                {/* <button className="blog-btn">VIEW BLOG</button> */}
                            </h1>
                            
                        </div>
                    </div>
          
            </header>
        </Fragment>
    )
}

export default Header