import React from 'react';
import Blog from '../component/Blog/Blog';
import Sidebar from '../component/Sidebar/Sidebar';

const blogs = [
    {
        id: 1,
        category: 'python',
        name: 'For loop in python',
        date: 'August 15, 2018',
        img: 'https://i.ibb.co/cbN18Vt/python.png',
        link: '/'
    },
    {
        id: 2,
        category: 'PHP',
        name: 'Laravel 8 sanctum authentication',
        date: 'January 15, 2019',
        img: 'https://i.ibb.co/88tRhLD/laravel.png',
        link: '/'
    },
    {
        id: 3,
        category: 'ReactJs',
        name: 'Typing package in reactJs',
        date: 'November 15, 2020',
        img: 'https://i.ibb.co/jLKhWhf/reactjs.png',
        link: '/'
    },
]

const Blogs = () => {
    return (
        <div id="page">

            <Sidebar />

            <div id="main" className="site-main">


                <section id="blog" className="blog-section pt-page page-active">
                    <div className="section-container">

                        <div className="page-heading">
                            <span className="icon"><i className="lnr lnr-book"></i></span>
                            <h2>My Blogs.</h2>
                        </div>

                        <div className="row blogs-masonry">

                            {
                                blogs.map(blog => <Blog key={blog.id} blog={blog} />)
                            }

                        </div>
                    </div>
                </section>

            </div>

        </div>
    );
};

export default Blogs;