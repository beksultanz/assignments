import React from "react"

const BlogPost = (props) => {
    return (
    <div> 
        <h1>{props.title}</h1>
        <p>{props.bodyText}</p>
        <img src={props.imgUrl}/>
        <span>{props.date}</span>
    </div>
    )
}

export default BlogPost 