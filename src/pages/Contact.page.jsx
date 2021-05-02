import React from 'react';
import Sidebar from '../component/Sidebar/Sidebar';
import emailjs from 'emailjs-com';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_7wgu6zm', 'template_5wdr13y', e.target, 'user_zNt4BDPQIxJaFxee4D10f')
            .then((result) => {

            }, (error) => {
            });

        e.target.reset();
        alert('Email sent successfully');
    }


    return (
        <div id="page">

            <Sidebar />

            <div id="main" className="site-main">

                <section id="contact" className="contact-section pt-page page-active">
                    <div className="section-container">

                        <div className="page-heading">
                            <span className="icon"><i className="lnr lnr-envelope"></i></span>
                            <h2>Contact Me.</h2>
                        </div>

                        <div className="row mb-70">
                            <div className="col-lg-8  offset-lg-2">
                                <div className="subheading">
                                    <h3>Let's Talk</h3>
                                </div>

                                <form id="contact-form" onSubmit={sendEmail}>
                                    <div className="row">


                                        <div className="col-md-6 mb-50">
                                            <span className="input">
                                                <input required className="input__field cf-validate" type="text" id="cf-name" name="name" />
                                                <label className="input__label" htmlFor="cf-name">Name</label>
                                            </span>
                                        </div>

                                        <div className="col-md-6 mb-50">
                                            <span className="input">
                                                <input required className="input__field cf-validate" type="email" id="cf-email" name="email" />
                                                <label className="input__label" htmlFor="cf-email">Email</label>
                                            </span>
                                        </div>

                                        <div className="col-md-12 mb-50">
                                            <span className="input">
                                                <input required className="input__field" type="text" id="cf-subject" name="subject" />
                                                <label className="input__label" htmlFor="cf-subject">Subject</label>
                                            </span>
                                        </div>

                                        <div className="col-md-12 mb-30">
                                            <span className="input">
                                                <textarea required className="input__field" id="cf-message" name="message" rows="5" ></textarea>
                                                <label className="input__label" htmlFor="cf-message" name="message">How can we help you?</label>
                                            </span>
                                        </div>

                                        <div className="alert-container col-md-12"></div>

                                        <div className="col-md-12 text-center">
                                            <button id="cf-submit" className="btn-main">Send Message</button>
                                        </div>

                                    </div>
                                </form>

                            </div>
                        </div>

                        <div className="row contact-info mb-70">

                            <div className="col-md-4 info-item">
                                <span className="icon"><i className="fas fa-paper-plane"></i></span>
                                <h5><a href="mailto:pritomdip010@gmail.com">pritomdip010@gmail.com</a></h5>
                            </div>

                            <div className="col-md-4 info-item">
                                <span className="icon"><i className="fas fa-map-marker-alt"></i></span>
                                <h5>Dhaka, Bangladesh</h5>
                            </div>


                            <div className="col-md-4 info-item">
                                <span className="icon"><i className="fas fa-phone"></i></span>
                                <h5>(+88) 01635544915</h5>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div >
    );
};

export default Contact;