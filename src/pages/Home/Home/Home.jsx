import React from 'react';
import Slider from '../Slider/Slider';
import ShopByCategory from '../../ShopByCategory/ShopByCategory';
import Gallery from '../../Gallery/Gallery';

const Home = () => {
    return (
        <>
            <Slider></Slider>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
        </>
    );
};

export default Home;