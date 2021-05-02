import React, { useEffect, useState } from 'react';
import Sidebar from '../component/Sidebar/Sidebar';
import Project from '../component/Project/Project';
import fakeData from '../data/fakeData';

const Portfolio = () => {

    const [projects, setProjects] = useState([]);
    const [category, setCategory] = useState('all');

    useEffect(() => {
        if (category === 'all') {
            setProjects(fakeData);
        } else {
            setProjects([]);
        }
    }, [setCategory])



    return (
        <div id="page">

            <Sidebar />

            <div id="main" className="site-main">

                <section id="portfolio" className="portfolio-section pt-page page-active">
                    <div className="section-container">

                        <div className="page-heading">
                            <span className="icon"><i className="lnr lnr-briefcase"></i></span>
                            <h2>Portfolio.</h2>
                        </div>

                        <div className="row">
                            <div className="col-md-12 portfolio-filter text-center">
                                <ul>
                                    <li className="active" data-filter="*">All</li>
                                    <li data-filter=".brand">Brand</li>
                                    <li data-filter=".design">Design</li>
                                    <li data-filter=".graphic">Graphic</li>
                                </ul>
                            </div>
                        </div>


                        <div className="row portfolio-items mb-50">

                            {
                                projects?.map(project => <Project key={project?.id} project={project} />)
                            }

                            {/* <Project />
                            <Project />
                            <Project />
                            <Project />
                            <Project />
                            <Project /> */}

                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Portfolio;