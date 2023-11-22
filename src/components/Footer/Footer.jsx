import React from 'react';
import LOGO from '../../assets/images/footerLogo.png';
import Facebook from '../../assets/images/icon/facebook.png';
import Instragram from '../../assets/images/icon/Instragram.png';
import Linkdin from '../../assets/images/icon/linkedin.png';
import Whatspp from '../../assets/images/icon/whatspp.png';

const Footer = () => {
    return (
        <>
        <footer className="footer p-10 bg-base-200  bg-gradient-to-r from-indigo-500 via-[#0076CE] to-[#9400D3] text-white  ">
            <nav>
                <img className='text-white' src={LOGO} alt="" />
                <p>India's first platform dedicated to <br /> simplifying partner search</p>
            </nav> 
            <nav>
                <header className="footer-title">COMPANY</header> 
                <a className="link link-hover">About </a>
                <a className="link link-hover">Pricing</a>
                <a className="link link-hover">Careers</a>        
            </nav> 
            <nav>
                <header className="footer-title">SOLUTIONS</header> 
                <a className="link link-hover">Search</a>
                <a className="link link-hover">Connect</a>
                <a className="link link-hover">Research</a>
                <a className="link link-hover">Academy</a>
            </nav> 
            <nav>
                <header className="footer-title">RESOURCES</header> 
                <a className="link link-hover">Blogs</a>
                <a className="link link-hover">Forms</a>
            </nav> 
            <nav>
                <header className="footer-title">SUPPORT</header> 
                <a className="link link-hover">Help</a>
                <a className="link link-hover">Contact Us</a>
            </nav>
            <nav>
                <header className="footer-title">LEGAL</header> 
                <a className="link link-hover">Privacy</a>
                <a className="link link-hover">Terms</a>
                <a className="link link-hover">Accessibility</a>
            </nav>
            </footer> 
            <footer className="footer px-10  py-4 border-t bg-base-200   bg-gradient-to-r from-indigo-500 via-[#0076CE] to-[#9400D3] text-white">
            Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra
            <nav className="md:place-self-center md:justify-self-end">
                <div className="grid grid-flow-col gap-4">
                    <img src={Facebook} alt="" />
                    <img src={Instragram} alt="" />
                    <img src={Linkdin} alt="" />
                    <img src={Whatspp} alt="" />
                </div>
            </nav>
        </footer>
        <footer className="footer footer-center p-4  bg-black text-white ">
            <aside>
                <p>Registered trademark of India Private Limited © 2023 loerumipsum Inc. All Rights Reserved</p>
            </aside>
        </footer>
        </>
    );
};

export default Footer;