import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getPostContent } from '../services/api'
import './BlogPage.css'

const BlogPage = () => {
    
    const params = useParams()
    const slug = params.slug
    const [contents, setContents] = useState([])

    useEffect(() => {
        getPostContent(slug)
            .then((posts) => setContents(posts))
            .catch((err) => {
                console.error('An error occured', err)
            })

    }, [])

    if(!contents.img || !contents) return <></>
    return (
        
        <div className="blog-container">
            {/* <img src={`http://localhost:5000/uploads/${contents.img.name}`} /> */}
            <div className="img-container" style={{backgroundImage: "url(http://127.0.0.1:5000/uploads/" + contents.img.name }}></div>
            <div className="content-title">{contents.title}</div>
            <div className="content-date">{contents.created}</div>
            
            <div className="content-main" dangerouslySetInnerHTML={{__html: contents.content}}></div>
        </div>
    )
}

export default BlogPage