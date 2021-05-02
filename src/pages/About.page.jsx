import Services from "../component/Services/Services";
import Sidebar from "../component/Sidebar/Sidebar";
import Skills from "../component/Skills/Skills";
import Testimonial from "../component/Testimonial/Testimonial";

const About = () => {
    return (
        <div id="page">

            <Sidebar />

            <div id="main" className="site-main">
                <section id="about" className="about-section pt-page page-active">
                    <div className="section-container">
                        <div className="page-heading">
                            <span className="icon"><i className="lnr lnr-user"></i></span>
                            <h2>About Me.</h2>
                        </div>

                        <div className="row about mb-70 mt-50">

                            <div className="col-lg-8">
                                <h3 className="mb-20">Full Stack Developer</h3>
                                <p>
                                    To prove myself as a quick learner and highly energetic person to face any challenge in any
                                    organization, where the contribution will be acknowledged, if given an opportunity, with the belief that
                                    work comes first and customer satisfaction is a key to any company’s simulacrum.
                                </p>

                                <p>
                                    With 4+ years of experience and working with different companies has helped me achieve a persistent and
                                    compassionate thirst to learn more. I love being challenged to an extent where I force myself to become better
                                    and more efficient. Through my time in the job market, I have come to understand the importance of punctuality,
                                    stability and deadlines.
                                </p>

                                <p>
                                    Throughout my career, I have been acknowledged as a solution-focused professional with the ability to design and
                                    develop innovative web applications using advanced technologies. In my current role as a Full-stack Developer for
                                    Toiree It, I collaborate closely with the application team to develop and implement 5+ full-stack web applications,
                                    ensuring optimal functionality, quality, and reliability.
                                </p>

                            </div>

                            <div className="col-lg-4">
                                <div className="about-info">
                                    <h3 className="mb-20">Personal Information</h3>
                                    <ul>
                                        <li><span className="title">Name</span><span className="value">Pritom Chowdhury Dip</span></li>
                                        <li><span className="title">Age</span><span className="value">27 Years</span></li>
                                        <li><span className="title">Residence</span><span className="value">Khilkhet, Dhaka</span></li>
                                        <li><span className="title">Address</span><span className="value">Road no 7. house no 21, Nikunjo, Dhaka</span></li>
                                        <li><span className="title">Email</span><span className="value">pritomdip010@gmail.com</span></li>
                                        <li><span className="title">Github</span><span className="value"><a target="_blank" href="https://github.com/pritom-dip">Click Here</a></span></li>
                                        <li><span className="title">Linkdin</span><span className="value"><a target="_blank" href="https://linkedin.com/in/pritom-chowdhury-dip/">Click Here</a></span></li>
                                        <li><span className="title">Phone</span><span className="value">(+88) 01635544915</span></li>
                                        <li><span className="title">Freelance</span><span className="value">Available</span></li>
                                    </ul>
                                    <div className="resume-button mt-30">
                                        <a target="_blank" className="btn-main" href="https://drive.google.com/uc?export=download&id=1mBuUHbcmaa_sD1UCLbmoVFlmkZpOWmdO">Download Resume</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-5">
                            <Skills />
                        </div>

                        <Services />

                        {/* <Testimonial /> */}

                    </div>
                </section>
            </div>

        </div>
    );
};

export default About;