import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import BlogPage from './BlogPage'

const BlogContainer = () => {
    return(
            <Router>
                <Route path = '/blog/:slug' render = {() => <BlogPage /> }  />
            </Router>
    )
}

export default BlogContainer