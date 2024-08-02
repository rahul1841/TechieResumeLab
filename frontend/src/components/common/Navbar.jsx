import React, { useState, useEffect } from 'react';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { NavbarLinks } from './navbar-links';
import ResumeBuilderLogo from '../../Assets/logo.png';

const Navbar = () => {
    const location = useLocation();

    // Function to match routes
    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname);
    };

    // Function to control navbar visibility on scroll
    const [showNavbar, setShowNavbar] = useState('top');
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY) setShowNavbar('hide');
            else setShowNavbar('show');
        } else setShowNavbar('top');

        setLastScrollY(window.scrollY);
    };

    // Dark/Light mode toggle state
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode', !isDarkMode);
    };

    return (
        <nav className={`z-10 flex h-14 w-full items-center justify-between border-b-[1px] border-b-richblack-700 text-white translate-y-0 transition-all ${showNavbar}`}>
            <div className='flex w-full items-center justify-between px-4 max-w-screen-xl mx-auto'>

                <Link to='/'>
                    <img src={ResumeBuilderLogo} width={48} height={38} loading='lazy' alt="Resume Builder Logo" />
                </Link>

                <ul className='hidden sm:flex gap-x- text-richblack-25'>
                    {NavbarLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>
                                <p className={`${matchRoute(link.path) ? 'bg-yellow-25 text-black' : 'text-richblack-25'} rounded-xl p-1 px-3`}>
                                    {link.title}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className='flex items-center'>
                    <button 
                        className="p-2 bg-gray-700 rounded-full" 
                        onClick={toggleDarkMode}
                    >
                        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
