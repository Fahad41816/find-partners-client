import React from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import JoinUsSection from '../../components/joinUsSection/JoinUsSection';
import AllInOneSection from '../../components/AllInOne/AllInOneSection';

 

const Home = () => {
    return (
       <>
          <HeroBanner/>
          <JoinUsSection/>
          <AllInOneSection/>
       </>
    );
};

export default Home;