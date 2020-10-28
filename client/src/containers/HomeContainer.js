import React, { Fragment } from 'react'
import BlogFeature from '../components/BlogFeature'
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'


export const HomeContainer = () => {
    
    return(
        <Fragment>

            <Header />
            <AboutMe />
            <BlogFeature />

        </Fragment>
    )
} 