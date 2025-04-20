import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Button from '../components/ui/Button';

const PhoneDetails = () => {

    const data = useLoaderData();
    const { id } = useParams();
    const singlePhone = data.find(phone => phone.id === parseInt(id));
    const { brand, name,model, image, imageprice, description, storage, camera_info } = singlePhone;
    console.log(singlePhone);
    
    
    return (
        <div className='w-full py-12'>
            <img src={image} className='w-full mx-auto md:w-auto mb-8' alt="" />
            <div className="flex justify-between">
                <h2 className="text-6xl font-thin mb-8">{name}</h2>
                <div>
                    <Button lable='cart'></Button>
                    <Button lable='favorite'></Button>
                </div>
            </div>
        </div>
    );
};

export default PhoneDetails;