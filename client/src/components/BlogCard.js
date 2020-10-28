import React from 'react'
import { Link } from 'react-router-dom'
import './BlogCard2.css'

const BlogCard = (props) => {

    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
    ];

    const getDate = date => {
        return new Date(props.post.created).toString()
    } 
 
    const getMonth = (date) => {
        const month = new Date(props.post.created).getMonth()
        return monthNames[month]
    }

    const getDay = (date) => {
        const day = new Date(props.post.created).getDate()
        if(day < 10) { return '0' + day}
        else { return day }
    }

    return(
                <div className="blog-card">
                    <div className="blog-logo">
                        <h1>{getDay(props.post.created)}</h1>
                        <h4>{getMonth(props.post.created)}</h4>
                    </div>
                    <div className="blog-details">
                        <span className="blog-date">{getDate(props.post.created)}</span>
                        <div className="blog-title">{props.post.title}</div>
                        <div className="blog-content-preview">
                            <p>
                                {props.post.content.substring(0,300)}
                            </p>
                        </div>
                        <Link to={`/blog/${props.post._id}`} className="blog-readmore">
                            Continue Reading
                        </Link>
                    </div>
            </div>
    )
}

export default BlogCard
