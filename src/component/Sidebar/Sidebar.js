import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../../images/pritomdipnew.png';
const Sidebar = () => {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <header>
            <div className={`header-content ${toggle ? 'on' : ''}`}>

                <div className={`header-mobile`}>
                    <a onClick={handleToggle} className="header-toggle"><i className="fas fa-bars"></i></a>
                    <h2>Pritom Chowdhury</h2>
                </div>

                <div className="header-main" data-simplebar>
                    <div className="image-container">
                        <h2 className="header-name">Pritom Chowdhury Dip</h2>
                        <img src={profileImg} alt="profile-pic" />
                    </div>

                    <nav className="nav-menu">
                        <ul>
                            <li><Link to="/" className="pt-link active"><span className="nav-menu-icon"><i className="lnr lnr-home"></i></span>Home </Link> </li>
                            <li><Link to="/about" className="pt-link active"><span className="nav-menu-icon"><i className="lnr lnr-user"></i></span>About Me</Link></li>
                            <li><Link to="/resume" className="pt-link active"><span className="nav-menu-icon"><i className="lnr lnr-license"></i></span>Resume</Link></li>
                            <li><Link to="/portfolio" className="pt-link active"><span className="nav-menu-icon"><i className="lnr lnr-briefcase"></i></span>Portfolio</Link></li>
                            <li><Link to="/blogs" className="pt-link active"><span className="nav-menu-icon"><i className="lnr lnr-book"></i></span>Blog</Link></li>
                            <li><Link to="/contact" className="pt-link active"><span className="nav-menu-icon"><i className="lnr lnr-envelope"></i></span>Contact</Link></li>
                        </ul>
                    </nav>

                    <div className="nav-footer">

                        <ul className="social">
                            <li><a target="_blank" href="https://www.facebook.com/pritomchowdhurydip"><i className="fab fa-facebook-square"></i></a></li>
                            <li><a target="_blank" href="https://github.com/pritom-dip"><i className="fab fa-github"></i></a></li>
                            <li><a target="_blank" href="https://www.linkedin.com/in/pritom-chowdhury-dip/"><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>

                        <div className="copy">
                            <p>{new Date().getFullYear()} &copy; Pritom Chowdhury Dip.<br />All Right Reserved.</p>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Sidebar;