import React from 'react';
import bg from '../src/images/banner.PNG';
import bg1 from '../src/images/banner1.PNG';

const Banner = () => {
    return (
        <>
            <img src={bg} className="img-fluid banner" alt="Olx Banner" />
            <br /><br />
            <img src={bg1} className="img-fluid banner img-thumbnail" alt="Olx Banner1" />
        </>
    );
};

export default Banner;