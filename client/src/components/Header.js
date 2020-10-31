import React, { Fragment } from 'react'
import './Header.css'
import profilePic from '../assets/profilepic.png'

const Header = () => {
    return(

            <header className="header">
                    <div className="header-box">
                        <div className="heading">
                            {/* <img src={profilePic} alt="profile_picture" className="logo" /> */}
                            <h1 className="heading-primary">
                                <span className="heading-primary-main">
                                    Michael Dollosa - <span className="colored">Consultant</span> with a knack for coding. Currently focused on re-learning <span className="colored">web development</span>.
                                </span>
                            </h1>
                        </div>
                    </div>
          
            </header>

    )
}

export default Header