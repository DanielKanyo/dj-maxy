import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

import './Home.css';

import { MY_BTN, ABOUT_ME_KEY, SOCIALS, AVAILABLE_LANGUAGES } from '../../Static/Constants/constants';
import { TRANSLATIONS } from '../../Static/Translations/translations';

const useStyles = makeStyles(() => ({
    btn: MY_BTN,
    socialBtn: {
        borderRadius: '50%',
        marginTop: 8,
        marginBottom: 8,
        padding: 0,
        height: 60,
        width: 60,
        color: 'rgba(255, 255, 255, 0.35)',
        border: '1px solid rgba(255, 255, 255, 0.35)',
        transition: 'none',
        '&:hover': {
            color: '#ff626f',
            borderColor: '#ff626f',
        }
    },
    langBtn: {
        color: 'rgba(255, 255, 255, 0.35)',
        '&[active=true]': {
            color: '#ff626f'
        }
    }
}));

const Home = ({ language, setLanguage }) => {
    const classes = useStyles();

    const getIconElement = social => {
        switch (social) {
            case 'facebook':
                return <FacebookIcon className='social-icon' />
            case 'youtube':
                return <YouTubeIcon className='social-icon' />
            case 'twitter':
                return <TwitterIcon className='social-icon' />
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
                <div className='text'>
                    {TRANSLATIONS[ABOUT_ME_KEY][language]}
                </div>
                <Button className={classes.btn} variant='outlined'>Mégtöbb rólam</Button>
            </div>
        </div>
    )
}

export default Home;
