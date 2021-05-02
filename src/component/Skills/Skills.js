import React from 'react';

import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {
    return (
        <div className="row">

            <div className="col-lg-6 ">
                <div className="subheading">
                    <h3>Front end development</h3>
                </div>

                <div className="skilltem mb-3">
                    <h4 className="progress-title">JavaScript</h4>
                    <ProgressBar completed={80} />
                </div>

                <div className="skilltem mb-3">
                    <h4 className="progress-title">ReactJs</h4>
                    <ProgressBar completed={85} />
                </div>

                <div className="skilltem mb-3">
                    <h4 className="progress-title">NextJs</h4>
                    <ProgressBar completed={80} />
                </div>

                <div className="skilltem mb-3">
                    <h4 className="progress-title">VueJs</h4>
                    <ProgressBar completed={65} />
                </div>

                <div className="skilltem mb-3">
                    <h4 className="progress-title">Wordpress theme development</h4>
                    <ProgressBar completed={95} />
                </div>

                <div className="skilltem mb-3">
                    <h4 className="progress-title">Wordpress theme customization</h4>
                    <ProgressBar completed={100} />
                </div>

                <div className="skilltem mb-3">
                    <h4 className="progress-title">SCSS</h4>
                    <ProgressBar completed={85} />
                </div>

                <div className="skilltem mb-3">
                    <h4 className="progress-title">Bootstrap</h4>
                    <ProgressBar completed={95} />
                </div>

                <div className="skilltem mb-3">
                    <h4 className="progress-title">Material Ui</h4>
                    <ProgressBar completed={80} />
                </div>

                <div className="skilltem mb-3">
                    <h4 className="progress-title">HTML5</h4>
                    <ProgressBar completed={100} />
                </div>

                <div className="skilltem mb-3">
                    <h4 className="progress-title">CSS3</h4>
                    <ProgressBar completed={95} />
                </div>

            </div>

            <div className="col-lg-6 skills">

                <div className="subheading">
                    <h3>Coding Skills</h3>
                </div>

                <div className="skilltem mb-3">
                    <h4 className="progress-title">Laravel</h4>
                    <ProgressBar completed={90} />
                </div>

                <div className="skilltem mb-3">
                    <h4 className="progress-title">PHP</h4>
                    <ProgressBar completed={95} />
                </div>

                <div className="skilltem mb-3">
                    <h4 className="progress-title">NodeJs</h4>
                    <ProgressBar completed={70} />
                </div>

                <div className="skilltem mb-3">
                    <h4 className="progress-title">WordPress plugin Development</h4>
                    <ProgressBar completed={90} />
                </div>

            </div>

        </div>
    );
};

export default Skills;