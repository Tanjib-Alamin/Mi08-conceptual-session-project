import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Button from '../components/ui/Button';
import { MdBookmarkAdd } from "react-icons/md";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { addFavorite } from '../Utils/Index';

const PhoneDetails = () => {

    const data = useLoaderData();
    const { id } = useParams();
    const singlePhone = data.find(phone => phone.id === parseInt(id));
    const { brand, name,model, image, imageprice, description, storage, camera_info } = singlePhone;
    const handelFavorite = () => {
        addFavorite(singlePhone);
    }
    
    
    return (
        <div className='w-full py-12'>
            <img src={image} className='w-full mx-auto md:w-auto mb-8' alt="" />
            <div className="flex justify-between">
                <h2 className="text-6xl font-thin mb-8">{name}</h2>
                <div className='space-x-4'>
                    <Button lable={<MdOutlineShoppingCartCheckout size={23} />}></Button>
                    <Button onClick={handelFavorite} lable={<MdBookmarkAdd size={23} />}></Button>
                </div>
            </div>
        </div>
    );
};

export default PhoneDetails;