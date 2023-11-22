import React, { useEffect, useState } from 'react';
import Rectengle from '../../assets/images/Rectangle.png';


const JoinUsSection = () => {

    const [boxData, setboxData] = useState([])
    
    useEffect(()=>{
        fetch('./public/BoxData.json').then(res => res.json()).then(data=> setboxData(data))
    },[])
    
    return (
        <div className=''>
            <h2 className='text-4xl font-bold text-center'>Want to <span className='text-transparent font-bold bg-clip-text bg-gradient-to-r from-[#0076CE] to-[#9400D3]'>Join</span> Us?</h2>
            <p className='text-center text-sm mt-4'>To remain with us, it is essential that you diligently follow the steps provided</p>
            
            {/* main section  */}
            <section className='JoinUsBanner relative py-20 '>
                {/* boxs area  */}
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:gap-3  lg:gap-5 items-center justify-center p-2 sm:p-10 lg:p-10 xl:p-10 2xl:p-10 lg:px-20 xl:px-20 2xl:px-20 max-h-max'>
                    {/* single box  */}
                    {
                        boxData.map((data)=> (
                             
                            <div key={data.id} className='w-72 p-3 rounded-md bg-white shadow-lg text-center z-30 h-44 mt-5 lg:mt-0 xl:mt-0 2xl:mt-0 relative'>
                            {/* shadow box  */}
                            <div className='absolute bg-gradient-to-r from-indigo-500 via-[#0076CE] to-[#9400D3] w-8 h-8  rounded-lg -top-2 -left-2 text-white font-bold flex items-center justify-center'>{data.id}<sup>{data.id == "1" ? "st" : data.id == "2" ? "nd" : data.id == "3" ? "rd" :"th" }</sup></div>    
                            <span className='font-bold'>{data.title}</span>
                            <p className='text-sm'>{data.Descreption}</p>
                            {/* dua date and penalty  */}
                            <div className='flex  items-start gap-2 justify-around mt-2 p-1 bg-slate-100 rounded-md h-20'>
                                <div className='text-start w-20'>
                                    <span className='text-sm mt-2 font-semibold text-[#0076CE]'>Due date</span>
                                    <p className='text-xs w-20 mt-2'>{data.duaDate}</p>
                                </div>
                                <div className='text-start w-38'>
                                    <span className='text-[#FF6666] font-semibold text-sm '>Penalty fees</span>
                                    {
                                        data.penaltyFees.map((penalty) => (
                                            // eslint-disable-next-line react/jsx-key
                                            <p className='mt-2 text-xs text-start'>{penalty}</p>
                                        ))
                                    }                                    
                                </div>
                            </div>
                        </div>
                        ))
                    }

                    {/* bottom text */}
                    <div className='absolute invisible lg:visible xl:visible 2xl:visible lg:bottom-10 xl:bottom-10 2xl:bottom-10 z-20 text-sm lg:font-semibold xl:font-semibold '>* For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 every day until you file the form . There is no maximum penalty amount. So, if you  don't <br /> file  the form for a year, you will owe ₹73,000 per form </div>
                </div>
 
                {/* vector image  */}
                <img className='absolute bottom-0' src={Rectengle} alt="" />
            </section>
        </div>
    );
};

export default JoinUsSection;