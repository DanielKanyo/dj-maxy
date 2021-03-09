import React from 'react';
import PropTypes from 'prop-types';

import { TRANSLATIONS } from '../../Static/Translations/translations';

const Events = ({ language }) => {
    return (
        <div className='events'>
            <div className='party-img'></div>
            <div className='text'>
                <div className='title'>{TRANSLATIONS['navigation'][language]['rendezvenyek']}</div>
                <div className='description'>
                    <div className='section'>
                        {TRANSLATIONS['events'][language]['section1']}
                    </div>
                    <div className='section'>
                        {TRANSLATIONS['events'][language]['section2']}
                    </div>
                    <div className='section'>
                        {TRANSLATIONS['events'][language]['section3']}
                    </div>
                </div>
            </div>
        </div>
    )
}

Events.propTypes = {
    language: PropTypes.string.isRequired
}

export default Events;
