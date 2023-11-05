import React, { useState, useEffect } from 'react'

import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

import './Slider.scss'

const Slider = () => {
    const data = [
        "https://logos-world.net/wp-content/uploads/2020/05/Zara-Emblem.jpg",
        "https://i.pinimg.com/736x/ab/72/9d/ab729ddb8bd3a3870d1845952a37f3da.jpg",
        "https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg",
        "https://static.vecteezy.com/system/resources/previews/023/871/256/original/levis-brand-clothes-logo-red-symbol-design-fashion-illustration-with-black-background-free-vector.jpg",
        "https://staticimg.titan.co.in/Common_Assets/promotion/FastrackLogo-200818.jpg",
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
           
    //         setCurrentSlide(currentSlide === 4 ? 0 : (prev) => prev + 1);
    //     }, 4000);
    //     return () => clearInterval(interval);
    // }, [data])
    

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ?  2 : (prev) => prev - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    };


    

    return (
        <div className='slider'>
            <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data?.map((banner) => (
                    <img src={banner} />
                ))}
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastIcon />
                </div>
            </div>
        </div>
    )
}

export default Slider