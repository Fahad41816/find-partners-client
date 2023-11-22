/* eslint-disable react/prop-types */
import React from 'react';
import Star from '../../assets/images/icon/star-fill.png';
import Calender from '../../assets/images/icon/calendar-2-line.png'
import Thubnail from '../../assets/images/Group.png'
import { useLoaderData } from 'react-router-dom';

const PersonalInfo = ({srachdata}) => {
    console.log(srachdata[0])
    const {name,image,rating, reviewCount, price, deliveryTime, testimonial, about, taskComplexity,  intro} = srachdata[0]
    return ( 
        <div className='flex flex-col lg:flex-row items-start justify-center '>
            {/* 1st part  */}
            <div>
                <h1 className='font-bold text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl'>{name}</h1>
                <p className='text-sm lg:w-96 xl:w-96 2xl:w-96 font-semibold mt-2'>{intro}</p>
                {/* star  */}
                <div className='flex items-center justify-start mt-3'>
                    <img className='w-4' src={Star} alt="" /> <span className='text-sm font-semibold'><span className='text-blue-600 font-semibold'>{rating}</span>({reviewCount})</span>
                </div>

                 <div className='p-2 lg:p-4 xl:p-4 2xl:p-4 w-80 shadow-xl rounded-lg border lg:w-full xl:w-full 2xl:w-full mt-5'>
                    <div className='flex items-center justify-between'>
                        <span >{taskComplexity}</span>
                        <span className='font-bold'>{price}</span>
                    </div>
                    <div className='flex mt-5 items-center justify-start'>
                        <img className='w-5' src={Calender} alt=""/>
                        <p className='text-sm ml-2'>{deliveryTime}</p>
                    </div>
                    <div className='mt-4 flex items-center justify-between'>
                        <button className='btn lg:w-40 xl:w-40 2xl:w-40 btn-primary text-white'>Request Proposal</button>
                        <button className="btn ml-2 lg:ml-5 xl:ml-5 2xl:ml-5 lg:w-40 xl:w-40 2xl:w-40 btn-outline btn-primary">Chat with me</button>
                    </div>                    
                </div> 

                <div className='mt-10 shadow-xl border rounded-xl  p-5'>
                    <h1 className='font-bold text-2xl'>What people say?</h1>
                    <p className='lg:w-96 xl:w-96 2xl:w-96 text-justify mt-3 text-sm  font-semibold'>I cannot express enough gratitude for the support Micheal has provided in managing my personal finances. Their attention to detail and deep understanding of financial markets has ensured that my investments are in safe hands. I highly recommend their services to anyone seeking financial guidance.</p>
                </div>
            </div>
            {/* 2nd part  */}
            <div className='ml-5'>
                <div>
                    {
                        image ?  <img src={image} alt=""/> : "No image found"
                    }                   
                </div>
                <h1 className='text-2xl font-bold mt-4'>About {name}</h1>
                <div className='flex items-center justify-between mt-5'>
                    <div className='m-2'>
                        <p className='text-sm text-slate-500 font-semibold'>FROM</p>
                        <span className='text-sm '>{about.from}</span>
                    </div>
                    <div className='m-2'>
                        <p className='text-sm text-slate-500 font-semibold'>PARTNER SINCE </p>
                        <span className='text-sm'>{about.partnerSince}</span>
                    </div>
                    <div className='m-2'>
                        <p className='text-sm text-slate-500 font-semibold'>AVERAGE RESPONSE TIME</p>
                        <span className='text-sm'> {about.averageResponseTime}</span>
                    </div>
                </div>
                <div>
                    <span className='text-sm font-semibold text-slate-600'>ABOUT</span>
                    <p className='mt-2 text-sm font-semibold'>{about.description}</p>
                </div>

                <div className='flex items-start mt-4 justify-between'>
                    <div>
                        <span className='text-sm font-semibold text-slate-500'>SERVICES I OFFER</span>
                       
                       
                       {about.services.map(data => (
                            // eslint-disable-next-line react/jsx-key
                            <li className="list-disc text-sm">{data}</li>
                       ))}                        
                       
                    </div>
                    <div>
                        <span className='text-sm font-semibold text-slate-500'>WHY ME?</span>
                        {about.benefits.map(data => (
                            // eslint-disable-next-line react/jsx-key
                            <li className="list-disc text-sm">{data}</li>
                       ))} 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;