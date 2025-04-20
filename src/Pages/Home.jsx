import React, { useState } from 'react';
import Hero from '../components/Hero';

import { useLoaderData } from 'react-router';
import PhonesContainers from '../components/PhonesContainers';

const Home = () => {

    const data = useLoaderData();

    const [phones, setPhones]= useState(data)


    const handelSearch = (e, text) => {
        e.preventDefault();
        if (text === ' ') return setPhones(data);
        const searchPhones = data.filter(phone =>
            phone.name.toLowerCase().split(' ').includes(text.toLowerCase()) ||  phone.brand.toLowerCase().split(' ').includes(text.toLowerCase() )
        ); 
        setPhones(searchPhones);
    }
   

    return (
        <div>
            <Hero handelSearch={handelSearch}></Hero>
            <PhonesContainers phones={phones}></PhonesContainers>
        </div>
    );
};

export default Home;