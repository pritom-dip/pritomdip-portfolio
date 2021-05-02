import React from 'react';
import Typist from 'react-typist';

const Banner = () => {
    return (
        <div className="banner-content">

            <h1 className="mb-20">Pritom Chowdhury  <span>Dip</span></h1>

            <Typist>

                <p className="cd-headline clip is-full-width">
                    <span>I am a </span>
                    <span className="cd-words-wrapper ml-3">
                        <b className="is-visible"> Full Stack Developer</b>
                        {/* <b>Freelancer</b>
                                <b>Web Developer</b>
                                <b>UI/UX Designer</b> */}
                    </span>
                </p>

            </Typist>

            <div className="resume-button mt-30">
                <a target="_blank" className="btn-main" href="https://drive.google.com/uc?export=download&id=1mBuUHbcmaa_sD1UCLbmoVFlmkZpOWmdO">Download Resume</a>
            </div>

        </div>
    );
};

export default Banner;