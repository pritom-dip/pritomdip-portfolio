import Banner from "../component/Banner/Banner";
import Sidebar from "../component/Sidebar/Sidebar";
import bannerBg from '../images/home-bg.jpg';

const Home = () => {
    return (
        <div id="page">

            <Sidebar />

            <div id="main" className="site-main">
                <section id="home" className="banner-section pt-page page-active" style={{ backgroundImage: `url(${bannerBg})`, height: '100vh' }}>

                    <Banner />

                </section>
            </div>

        </div>
    );
};

export default Home;