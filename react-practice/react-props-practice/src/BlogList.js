import React from "react"
import BlogPost from "./BlogPost"

const BlogList = () => {
    return (
        <div> 
            <BlogPost  
            title={"Blog Post" }
            bodyText={"Hi this is a funny blopost"}
            imgUrl={"https://images.unsplash.com/photo-1581357824910-16c563200d59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"}
            date= {"January, 18th, 2020"}
            /> 
        </div>
    )
}

export default BlogList 