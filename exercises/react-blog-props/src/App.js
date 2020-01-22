import React from "react"
import BlogPost from "./BlogPost"

const App = () => {
    return (
        <div className="container">
            <header className="header"> 
                <navBar className="navBar"> 
                    <h3>Start Bootstrap</h3>
                    <h4>HOME</h4>
                    <h4>ABOUT</h4>
                    <h4>SAMPLE POST</h4>
                    <h4>CONTACT</h4>
                </navBar>
                <h1>Clean Blog</h1>
            <h2>A Blog Theme by Start Bootstrap</h2>
            </header>

            <div className="blogPost">
            <BlogPost />
            </div>

            <footer className="footer">
            <p>Copyright © Your Website 2019</p>
            </footer>
        </div>
    )
}

export default App