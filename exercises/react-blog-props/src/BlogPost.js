import React from "react"
import datas from "./data"
import Blog from "./Blog"

const BlogPost = () => {
    const newData = datas.map((data) => {
        return <Blog key={data.title} title={data.title} subTitle={data.subTitle} author={data.author} date={data.date}/>
    })
    return (
        <div>
           {newData}
        </div>
    )
}

export default BlogPost 