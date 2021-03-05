import React from 'react';
import PropTypes from 'prop-types';

import { TRANSLATIONS } from '../../Static/Translations/translations';

const About = ({ language }) => {
    return (
        <div className='about'>
            <div className='about-text-and-btn'>
                <div className='about-title'>{TRANSLATIONS['navigation'][language]['rolam']}</div>
                <div className='text'>
                    {TRANSLATIONS['about_me'][language]}
                </div>
            </div>
            <div className='maxy-img'></div>
        </div>
    )
}

About.propTypes = {
    language: PropTypes.string.isRequired
}

export default About;
