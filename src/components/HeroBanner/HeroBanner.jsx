import React, { useState } from 'react';
import Heroimage from '../../assets/images/Left.png';
import VectorImage from '../../assets/images/Vector.png';
import { Link } from 'react-router-dom';


const HeroBanner = () => {
    
    const [searchValue, setsearchValue] = useState("")

    return (
        <section className="heroBackGround relative grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2  2xl:grid-cols-2 lg:items-center lg:justify-around lg:p-28 xl:items-center md:items-center md:justify-around md:p-24 sm:items-center sm:justify-around sm:p-24 xl:justify-around xl:p-24 2xl:items-center 2xl:justify-around 2xl:p-24 pt-8  px-2 ">                
            <div className='z-10 mt-20 '>
                <h1 className='text-2xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold'>Find <span className='text-transparent font-bold bg-clip-text bg-gradient-to-r from-[#0076CE] to-[#9400D3]'>Partners</span> (CAs) <br /> available online</h1>

                <p className='text-sm mt-4'> <span className='font-bold text-slate-500 text-sm'>CONNECT</span> with us where your services are listed and visible to a myriad <br /> of businesses seeking CA’s for compliance support</p>
                {/* search bar  */}
                
                <div className='rounded-xl bg-white mt-6 max-w-max '>
                    <input onChange={e => setsearchValue(e.target.value)} className='xl:w-80 2xl:w-80 w-40 lg:w-80  border border-e-0  h-12 bg-none px-4  rounded-s-lg outline-none' placeholder='Search by name' type="text"/>
                   <Link to={`details/${searchValue}`}> <button className='btn bg-[#0076CE] text-white xl:w-32 2xl:w-32 lg:w-32 hover:bg-[#0567b1]'>Search</button></Link>
                </div>
            </div>    

            <div className='z-10 p-10 lg:p-0'>
                <img className='w-48 xl:w-96 lg:w-96 2xl:w-96 lg:ml-28 lg:mt-10 xl:ml-28 xl:mt-10 2xl:ml-28 2xl:mt-10' src={Heroimage} alt="" />    
            </div>
            <img className='absolute  bottom-0' src={VectorImage} alt="" />       
        </section>
    );
};

export default HeroBanner;