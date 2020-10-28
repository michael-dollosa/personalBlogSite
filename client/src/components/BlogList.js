import React, { useState, useEffect } from 'react'
import BlogCard from './BlogCard'
import './BlogCard2.css'
import { getPosts } from '../services/api'

const BlogList = ({changeNavbar}) => {

    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(3)

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
    
    //Get current post
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
    const maxPosts = Math.ceil(posts.length / postsPerPage)

    //Changepage
    const paginatePrev = pageNumber => {
        if(pageNumber==1){
            return setCurrentPage(pageNumber)
        }
        else return setCurrentPage(pageNumber-1)
    }

    const paginateNext = pageNumber => {
        if(pageNumber == maxPosts) {return setCurrentPage(pageNumber)}
        else {return setCurrentPage(pageNumber+1)}
    }

    const renderedPosts = currentPosts.map((post)=>{
        return (
            <BlogCard post={post} key={post._id} />
        )
    })

    if(!posts.length || !posts) return <></>
    return (
        <div className="blog-row">
            <h1 className="label">See my <span>blog posts</span></h1>
            {renderedPosts}
            <div className="pagination">
                <h1 onClick={() => paginatePrev(currentPage)}>Prev</h1>
                <h1 onClick={() => paginateNext(currentPage)}>Next</h1>
            </div>
            
        </div>
    )
}

export default BlogList