import React, { Fragment, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomeContainer } from './HomeContainer'
import BlogList from '../components/BlogList'
import Navbar from '../components/Navbar'
import BlogContainer from '../components/BlogContainer'
import Footer from '../components/Footer'
import './AppContainer.css'

const AppContainer = () => {

    const[navbar, setNabvar] = useState(true)
    const changeNavbar = (set) => {
        setNabvar(set)
    }

    return(
        <main className="page-container">
            <section className="main-container"> 
            <Router>
                <Navbar navbar={navbar}/>
                <Route exact path="/" render = {() => <HomeContainer changeNavbar={changeNavbar(false)} />} />
                <Route path='/blog/*' render = {() => <BlogContainer changeNavbar={changeNavbar(false)} /> } />
                <Route exact path="/blog" render = {() => <BlogList changeNavbar={changeNavbar(false)} />} />
            </Router>
            </section>
            <footer>
                <Footer />
            </footer>
        </main>
    )
}

export default AppContainer


