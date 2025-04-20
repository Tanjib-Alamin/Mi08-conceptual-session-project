import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Mainlayout from "../Layouts/Mainlayout";
import Favorites from "../Pages/Favorites";
import About from "../Pages/About";
import PhoneDetails from "../Pages/PhoneDetails";
import Errorpage from "../Pages/Errorpage";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Mainlayout,
        errorElement:<Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                Component: Home,
                hydrateFallbackElement:<p>Loading, plz wait.....</p>,
                loader: ()=> fetch('../Phones.json')
            },
            {
                path: '/favorites',
                Component:Favorites
            },
            {
                path: '/about',
                Component:About
            },
            {
                path: '/phone-details/:id',
                Component: PhoneDetails,
                 loader: ()=> fetch('../Phones.json')
            }

        ]
    }
])