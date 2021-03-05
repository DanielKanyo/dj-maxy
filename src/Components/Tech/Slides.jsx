import React from 'react';

import { CAROUSEL_DATA } from '../../Static/Constants/constants';

const Slides = () => {
    return (
        CAROUSEL_DATA.map((data, i) => {
            return (
                <div key={i} className='carousel-item'>
                    <div className='img-container'>
                        <img src={data.src} alt='' />
                    </div>
                    <div className='text-container'>{data.txt}</div>
                </div>
            )
        })
    )
}

export default Slides;