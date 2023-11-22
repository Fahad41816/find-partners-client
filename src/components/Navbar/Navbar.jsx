import React from 'react';
import Logo from '../../assets/images/logo.png'

const Navbar = () => {
    return (
        <div className="navbar fixed top-0 z-50  lg:px-24 2xl:px-14  xl:px-14">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Solutions</a></li>
              <li><a>Features</a></li>
              <li>
                <a>Blogs</a>
                
              </li>
              <li>
                <a>About</a>
                
              </li>
              <li><a>Item 3</a></li>
              <div className='flex items-center gap-2'>
                <button className='btn btn-primary btn-outline w-16 h-4 text-center'>Login</button>
                <button className='btn btn-primary w-16 h-4 text-center'>Register</button>
              </div>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className='w-24 ml-20 xl:ml-0 sm:ml-0 md:ml-0 lg:ml-0 xl:w-full' src={Logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">            
            <li tabIndex={0}>
              <details>
                <summary>Solutions</summary>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Features</summary>               
              </details>
            </li>
            <li><a>Blogs</a></li>
            <li tabIndex={0}>
              <details>
                <summary>About</summary>                
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
            <button className="btn btn-outline border-2 outline-none hover:border-[#0076CE] mr-1 hover:bg-[#0076CE] text-blue-500 font-bold invisible xl:visible sm:visible md:visible lg:visible 2xl:visible">Login</button>
            <button className="btn bg-[#0076CE] hover:bg-blue-700 text-white font-bold invisible xl:visible sm:visible md:visible lg:visible 2xl:visible">Register</button>
        </div>
      </div>
    );
};

export default Navbar;