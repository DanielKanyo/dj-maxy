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
                    {TRANSLATIONS['events'][language]}
                </div>
            </div>
        </div>
    )
}

Events.propTypes = {
    language: PropTypes.string.isRequired
}

export default Events;
