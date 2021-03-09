import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import {
    SOCIALS,
    AVAILABLE_LANGUAGES,
    SOCIAL_BTN_STYLE,
    LANGUAGE_BTN_STYLE
} from '../../Static/Constants/constants';

const useStyles = makeStyles(() => ({
    socialBtn: SOCIAL_BTN_STYLE,
    langBtn: LANGUAGE_BTN_STYLE
}));

const Header = ({ language, setLanguage }) => {
    const classes = useStyles();

    const getIconElement = social => {
        switch (social) {
            case 'facebook':
                return <FacebookIcon className='social-icon' />;
            case 'instagram':
                return <InstagramIcon className='social-icon' />;
            default:
                console.warn('Unsupported social icon...');
                break;
        }
    };

    return (
        <div className='header'>
            <div className='maxi-photo'></div>
            <div className='title-container'>
                <div>MA <br /> XY</div>
            </div>
            <div className='social-container'>
                {
                    SOCIALS.map(socail => {
                        return (
                            <a href={socail.link} key={socail.text} target='_blank' rel='noreferrer'>
                                <Button className={classes.socialBtn}>
                                    {getIconElement(socail.text)}
                                </Button>
                            </a>
                        )
                    })
                }
            </div>
            <div className='language-selector-container'>
                {
                    AVAILABLE_LANGUAGES.map(lang => {
                        return (
                            <div key={lang}>
                                <Button
                                    active={(lang === language).toString()}
                                    className={classes.langBtn}
                                    onClick={() => setLanguage(lang)}
                                >
                                    {lang}
                                </Button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

Header.propTypes = {
    language: PropTypes.string.isRequired,
    setLanguage: PropTypes.func.isRequired
}

export default Header;
