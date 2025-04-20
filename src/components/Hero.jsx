import React, { useState } from 'react';
import bannerimg from '../assets/banner.png'
import Button from './ui/Button';

const Hero = ({ handelSearch }) => {
    

    const [searchText, setSearchText] = useState(''); 
    


    return (
        <div className='py-12'>
        <img src={bannerimg} className='w-full mx-auto  md:max-w-md' alt="" />
        <div className='text-center space-y-4'>
           <h1 className='font-thin text-7xl text-gray-900'>Browse, Search, View, Buy</h1>
        <p>Best place to browse, search, view details and purchase of top flagship phones <br />
            of the current time - FlagshipFaceOff  </p>
                <form onSubmit={e => {
                    handelSearch(e, searchText);
                    setSearchText(' ')

                } } className='flex flex-col md:flex-row justify-center items-center mb-4 md:px-24'>
                    
                    <input
                        value={searchText}
                        onChange={e => setSearchText(e.target.value)}
                        type="text"
                        placeholder='Search Phone by Name'
                        className='bg-white border border-gray-300 rounded shadow-md  w-2/3 h-12  px-4 mb-3 focus:outline-none focus:shadow-outline md:mr-2 md:mb-0'
                    />
              <Button type='submit' lable='Search'></Button>
          </form>
       </div>
        
        </div>
    );
};

export default Hero;