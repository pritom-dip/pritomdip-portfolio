import { lazy } from "react";

const Home = lazy(() => import('../pages/Home.page'));
const About = lazy(() => import('../pages/About.page'));
const Resume = lazy(() => import('../pages/Resume.page'));
const Portfolio = lazy(() => import('../pages/Portfolio.page'));
const Blogs = lazy(() => import('../pages/Blogs.page'));
const Contact = lazy(() => import('../pages/Contact.page'));

const routes = [
    { path: '/', exact: true, component: Home },
    { path: '/home', exact: true, component: Home },
    { path: '/about', exact: true, component: About },
    { path: '/resume', exact: true, component: Resume },
    { path: '/portfolio', exact: true, component: Portfolio },
    { path: '/blogs', exact: true, component: Blogs },
    { path: '/contact', exact: true, component: Contact },
];

export default routes;