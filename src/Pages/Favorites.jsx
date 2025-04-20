import React, { useEffect, useState } from 'react';
import Phonecard from '../components/Phonecard';
import { getfavorites } from '../Utils/Index';


const Favorites = () => {


    const [displayPhones, setDisplayPhones] = useState([]);
    useEffect(() => {
        const savePhones = getfavorites();
        setDisplayPhones(savePhones);
    },[])


    return (
         <div className='py-12'>

          
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
                {
                    displayPhones.map(phone => <Phonecard key={phone.id} phone={phone}></Phonecard>)
                }
            </div>
            
          
          
        </div>
    );
};

export default Favorites;