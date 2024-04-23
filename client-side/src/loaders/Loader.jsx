import React from 'react';
import loader from "../assets/images/loader.svg";
const Loader = () => {
    return (
        <div className='middleOfThePage'>
            <img className='loadersvgimg' src={loader} alt="loader"/>
        </div>
    );
};

export default Loader;