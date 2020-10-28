import React, { useState, useEffect } from 'react'
import BlogCard from './BlogCard'
import './BlogCard2.css'
import { getPosts } from '../services/api'

const BlogFeature = ({changeNavbar}) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
            .then((posts) => setPosts(posts))
            .catch((err) => {
                console.error('An error occured', err)
            })
        const setNavbar = () => {
            changeNavbar(true)
        }
    }, [])
    
   
    const renderedPosts = posts.slice(0,3).map((post)=>{
        return (
            <BlogCard post={post} key={post._id} />
        )
    })

    if(!posts.length || !posts) return <></>
    return (
        <div className="blog-row">
            <h1 className="label">See my latest <span>blog posts</span></h1>
            {renderedPosts}
        </div>
    )
}

export default BlogFeature