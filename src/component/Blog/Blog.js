import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
    console.log(blog);
    return (
        <div className="col-lg-4 col-sm-6">
            <Link to={blog.link} className="blog-item">
                <div className="blog-image">
                    <img src={blog.img} alt="#" />
                </div>
                <div className="blog-content">
                    <span className="cat">{blog.category}</span>
                    <h4 className="blog-title">{blog.name}</h4>
                    <div className="blog-date">{blog.date}</div>
                </div>
            </Link>
        </div>
    );
};

export default Blog;