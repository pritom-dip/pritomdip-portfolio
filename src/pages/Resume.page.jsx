import React from 'react';
import Education from '../component/Education/Education';
import Sidebar from '../component/Sidebar/Sidebar';
import Skills from '../component/Skills/Skills';

const Resume = () => {
    return (
        <div id="page">

            <Sidebar />

            <div id="main" className="site-main">

                <section id="resume" className="resume-section pt-page page-active">
                    <div className="section-container">
                        <div className="page-heading" style={{ paddingBottom: '20px' }}>
                            <span className="icon"><i className="lnr lnr-license"></i></span>
                            <h2>My Resume.</h2>

                            <a target="_blank" className="btn-main ml-5" href="https://drive.google.com/uc?export=download&id=1mBuUHbcmaa_sD1UCLbmoVFlmkZpOWmdO">Download Resume</a>

                        </div>

                        <Education />

                        <Skills />

                    </div>
                </section>

            </div>

        </div>
    );
};

export default Resume;