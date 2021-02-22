import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

import './Home.css';

import {
    MY_BTN_STYLE,
    SOCIALS,
    AVAILABLE_LANGUAGES,
    SOCIAL_BTN_STYLE,
    LANGUAGE_BTN_STYLE
} from '../../Static/Constants/constants';
import { TRANSLATIONS } from '../../Static/Translations/translations';

const useStyles = makeStyles(() => ({
    btn: MY_BTN_STYLE,
    socialBtn: SOCIAL_BTN_STYLE,
    langBtn: LANGUAGE_BTN_STYLE
}));

const Home = ({ language, setLanguage }) => {
    const classes = useStyles();

    const getIconElement = social => {
        switch (social) {
            case 'facebook':
                return <FacebookIcon className='social-icon' />;
            case 'youtube':
                return <YouTubeIcon className='social-icon' />;
            case 'twitter':
                return <TwitterIcon className='social-icon' />;
            default:
                console.warn('Unsupported social icon...');
                break;
        }
    };

    return (
        <div className='home'>
            <div className='header'>
                <div className='maxi-photo'></div>
                <div className='title-container'>
                    <div>MA <br /> XY</div>
                </div>
                <div className='social-container'>
                    {SOCIALS.map(socail => {
                        return (
                            <Button key={socail} className={classes.socialBtn}>
                                {getIconElement(socail)}
                            </Button>
                        )
                    })}
                </div>
                <div className='language-selector-container'>
                    {AVAILABLE_LANGUAGES.map(lang => {
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
                    })}
                </div>
            </div>
            <div className='about'>
                <div className='about-text-and-btn'>
                    <div className='about-title'>{TRANSLATIONS['navigation'][language]['rolam']}</div>
                    <div className='text'>
                        {TRANSLATIONS['about_me'][language]}
                    </div>
                    <div>
                        <Button className={classes.btn} variant='outlined'>Tovább</Button>
                    </div>
                </div>
                <div className='maxy-img'></div>
            </div>
        </div>
    )
}

export default Home;
