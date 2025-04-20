import React, { useEffect, useState } from 'react';
import Phonecard from './Phonecard';
import Button from './ui/Button';

const PhonesContainers = ({ phones }) => {
    
    const [displayPhones, setDisplayPhones] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        if (showAll) {
            setDisplayPhones(phones);
        }
        else {
             setDisplayPhones(phones.slice(0, 6));
        }
    },[phones, showAll])


    return (
        <div className='py-12'>

            <h1>phones container:{phones.length}</h1>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
                {
                    displayPhones.map(phone => <Phonecard key={phone.id} phone={phone}></Phonecard>)
                }
            </div>
            
          
            <Button type='submit' lable={showAll ? 'Show Less' : 'Show All'}
                onClick={() => {
                setShowAll(!showAll);
                if(showAll) window.scrollTo(0,0) }}>
                 </Button>
        </div>
    );
};

export default PhonesContainers;