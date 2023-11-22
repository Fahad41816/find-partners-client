import React, { useEffect, useState } from 'react';
import PersonalInfo from '../../components/personalInfo/PersonalInfo';
import {useLoaderData } from 'react-router-dom';

const Detailspage = () => {

    const {name} = useLoaderData()
    console.log(name)

    const [DATA, setDATA] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(()=>{
        fetch(`http://localhost:3000/partners?name_like=${name}`).then(res => res.json()).then((data) => {
            setDATA(data)
            setloading(false)
        }).catch(err => console.log(err))
    },[name])
   

    let content = undefined;

    if(loading){
        content =  <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      </div>
    }else if(DATA.length !== 0){
        content = <PersonalInfo srachdata={DATA}/>
    }else{
        content =  <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4"> Data Not Found</h1>
 
        </div>
      </div>
    }

    return (
        <div className='pt-14 lg:p-20 xl:p-20 2xl:p-20 lg:px-40 xl:px-40 2xl:px-40'>
            {content}        
        </div>
    );
};

export default Detailspage;