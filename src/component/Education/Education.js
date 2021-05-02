import React from 'react';

const Education = () => {
    return (
        <div className="row mb-20">

            <div className="col-lg-6">
                <div className="subheading">
                    <h3>Experience</h3>
                </div>
                <ul className="experience">

                    <li>
                        <span className="line-left"></span>
                        <div className="content">
                            <h4>Full Stack Developer</h4>
                            <h5>Toiree IT, Dhaka, Bangladesh</h5>
                            <p className="info">
                                <strong>Technology:</strong> ReactJs, Laravel, WordPress custom theme and plugin development.
                            </p>
                        </div>
                        <span className="year">
                            <span className="to">Present</span>
                            <span className="from">Feb, 2018</span>
                        </span>
                    </li>

                    <li>
                        <span className="line-left"></span>
                        <div className="content">
                            <h4>Freelance Web Designer</h4>
                            <h5>Hakusana Ltd, London, UK</h5>
                            <p className="info">
                                <strong>Technology: </strong>ReactJs, Laravel, VueJs, WordPress.
                            </p>
                        </div>
                        <span className="year">
                            <span className="to">Nov, 2018</span>
                            <span className="from">April, 2018</span>
                        </span>
                    </li>

                    <li>
                        <span className="line-left"></span>
                        <div className="content">
                            <h4>Web Developer</h4>
                            <h5>ByteEver, Dhaka, Bangladesh</h5>
                            <p className="info">
                                <strong>Technology: </strong>WordPress Plugin Development, PHP.
                            </p>
                        </div>
                        <span className="year">
                            <span className="to">Jan, 2018</span>
                            <span className="from">June, 2017</span>
                        </span>
                    </li>

                    <li>
                        <span className="line-left"></span>
                        <div className="content">
                            <h4>Intern</h4>
                            <h5>Digita Interactive, Sylher, Bangladesh</h5>
                            <p className="info">
                                <strong>Technology: </strong>PHP, HTML5, CSS3, BootStrap, Laravel, SCSS.
                            </p>
                        </div>
                        <span className="year">
                            <span className="to">Jan, 2017</span>
                            <span className="from">may, 2017</span>
                        </span>
                    </li>

                </ul>
            </div>

            <div className="col-lg-6">
                <div className="subheading">
                    <h3>Education</h3>
                </div>

                <ul className="education">

                    <li>
                        <span className="line-left"></span>
                        <div className="content">
                            <h4>B.Sc</h4>
                            <h4>Metropolitan University, Sylhet</h4>
                            <h5>CSE</h5>
                        </div>
                        <span className="year">
                            <span className="to">2017</span>
                            <span className="from">2012</span>
                        </span>
                    </li>

                    <li>
                        <span className="line-left"></span>
                        <div className="content">
                            <h4>H.S.C</h4>
                            <h4>Sylhet MC College</h4>
                            <h5>SCIENCE</h5>
                        </div>
                        <span className="year">
                            <span className="to">2011</span>
                            <span className="from">2009</span>
                        </span>
                    </li>

                    <li>
                        <span className="line-left"></span>
                        <div className="content">
                            <h4>S.S.C</h4>
                            <h4>Chhatak ML High School</h4>
                            <h5>SCIENCE</h5>
                        </div>
                        <span className="year">
                            <span className="to">2009</span>
                            <span className="from">2008</span>
                        </span>
                    </li>

                </ul>
            </div>

        </div>
    );
};

export default Education;