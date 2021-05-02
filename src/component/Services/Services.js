import React from 'react';

const Services = () => {
    return (
        <div className="row services mb-30">
            <div className="col-md-12">
                <div className="subheading">
                    <h3>Key Deatils About Me</h3>
                </div>
            </div>

            <div className="col-lg-3 col-sm-6">
                <div className="service-item">
                    <div className="icon"><i className="lnr lnr-laptop"></i></div>
                    <h4>Fast Learner</h4>
                    <p>I am a very fast learner. I Always thrive knowledge about the next generation technologies. And keep up the the tech race.</p>
                </div>
            </div>

            <div className="col-lg-3 col-sm-6">
                <div className="service-item">
                    <div className="icon"><i className="lnr lnr-laptop-phone"></i></div>
                    <h4>Full Stack Web Developer</h4>
                    <p>
                        I am currently working as a full Stack web developer At Toiree It. Designing and creating web app solutions to solve pain points for various clients.
                    </p>
                </div>
            </div>

            <div className="col-lg-3 col-sm-6">
                <div className="service-item">
                    <div className="icon"><i className="lnr lnr-eye"></i></div>
                    <h4>Team Player</h4>
                    <p>I can work efficiently with the team and i can easily colaborate with people.</p>
                </div>
            </div>

            <div className="col-lg-3 col-sm-6">
                <div className="service-item">
                    <div className="icon"><i className="lnr lnr-camera"></i></div>
                    <h4>Great Communication</h4>
                    <p>Capable of great team work & excellent communications, which makes me a great value to any work enviroment.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;