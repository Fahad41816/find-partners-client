import React from 'react';
import Search from '../../assets/images/icon/Search.png';
import Academy from '../../assets/images/icon/academy.png';
import Research from '../../assets/images/icon/Research.png';
import Maskgroup from '../../assets/images/icon/Maskgroup.png';
import Student from '../../assets/images/student.png';
import StudentIcon from '../../assets/images/icon/studenticon.png';
import TeacherIcon from '../../assets/images/icon/teachericon.png';
import TeacherImage from '../../assets/images/teacher.png';
 

const AllInOneSection = () => {
    return (
        <section className='lg:mt-20 xl:mt-20 2xl:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 items-start justify-center lg:p-20 xl:p-20 2xl:p-20 p-2'>
            {/* 1st part  */}
            <div>
                <h1 className='text-2xl lg:text-5xl 2xl:text-6xl xl:text-5xl font-bold '> <span className='text-transparent font-bold bg-clip-text bg-gradient-to-r from-[#0076CE] to-[#9400D3]'>All-in-one</span> platform <br /> that Makes Easier</h1>
                <p className=' hidden lg:inline xl:inline 2xl:inline  text-sm font-semibold mt-4'>We are more than a platform; We are your <br /> success partner. Discover our services to achieve <br /> your business and educational goals</p>
                <p className='w-60 lg:w-96 xl:w-96 lg:hidden xl:hidden 2xl:hidden text-sm font-semibold mt-4'>We are more than a platform; We are your   success partner. Discover our services to achieve   your business and educational goals</p>
                
                {/* icom boxs  */}
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-1  mt-6 gap-5'>
                    {/* single box 1 */}
                    <div className='flex items-start justify-center gap-1 w-40'>
                        <img className='w-6 lg:w-8 xl:w-8 2xl:w-8' src={Search} alt="" />
                        <p className='ml-1 text-xs lg:text-sm 2xl:text-sm xl:text-sm'> <span className='font-bold '>SEARCH</span> for vital company information </p>
                    </div>
                     {/* single box 2 */}
                    <div className='flex items-start justify-center  w-38'>
                        <img className='w-6 lg:w-8 xl:w-8 2xl:w-8' src={Maskgroup} alt="" />
                        <p className='ml-1 text-xs lg:text-sm 2xl:text-sm xl:text-sm'> <span className='font-bold'>CONNECT</span>  with the resources to meet your business needs </p>
                    </div>
                     {/* single box 3 */}
                    <div className='flex items-start justify-center gap-1 w-40'>
                        <img className='w-6 lg:w-8 xl:w-8 2xl:w-8' src={Research} alt="" />
                        <p className='ml-1 text-xs lg:text-sm 2xl:text-sm xl:text-sm'> <span className='font-bold'>RESEARCH</span>  and generate reports that drive growth  </p>
                    </div>
                     {/* single box 4 */}
                    <div className='flex items-start justify-center gap-1 w-40'>
                        <img className='w-6 lg:w-8 xl:w-8 2xl:w-8' src={Academy} alt="" />
                        <p className='ml-1 text-xs lg:text-sm 2xl:text-sm xl:text-sm'> <span className='font-bold'>ACADEMY</span>  to give you the skills for success in your career </p>
                    </div>
                </div>
            </div>

            {/* 2nd part  */}
            <div>
                <div className='flex justify-center mt-10'>
                    {/* message div  */}
                    <div className='flex flex-col items-end mr-4'>
                        <div className='bg-[#EFD9F9] max-w-max p-1 rounded-s-lg rounded-se-lg mt-2 text-sm'>Hey, check out loreumipsum services.  </div>
                        <div className='bg-[#EFD9F9] max-w-max p-1 rounded-s-lg rounded-se-lg mt-2 text-sm'>I learned from their videos, got my first job.</div>
                        <div className='bg-[#EFD9F9] max-w-max p-1 rounded-s-lg rounded-se-lg mt-2 text-sm'>You won't be disappointed with their services.</div>
                        <div className='bg-[#DDF3FF] max-w-max p-1 rounded-ss-lg rounded-e-lg mt-2 text-sm'>I got a perfect analysis report from them too</div>
                        <div className='bg-[#DDF3FF] max-w-max p-1 rounded-ss-lg rounded-e-lg mt-2 text-sm'>Oh, that's great.</div>
                    </div>
                    {/* image farm div  */}
                    <div className='studentBG '>
                        <img src={StudentIcon} alt="" />
                        <img className='w-28  lg:w-48 xl:w-48 2xl:w-48 right-4 lg:right-5 absolute top-10 lg:top-4 left-0  lg:bottom-10 ' src={Student} alt=""/>
                    </div>
                </div>
                <div className='teacherBG mt-5 lg:-mt-20 lg:ml-10  xl:ml-10 2xl:ml-10'>
                        <img src={TeacherIcon} alt="" />
                        <img className='w-44 right-4  absolute bottom-10 ' src={TeacherImage} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default AllInOneSection;