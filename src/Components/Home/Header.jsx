import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

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
        <div className='header'>
            <div className='maxi-photo'></div>
            <div className='title-container'>
                <div>MA <br /> XY</div>
            </div>
            <div className='social-container'>
                {
                    SOCIALS.map(socail => {
                        return (
                            <Button key={socail} className={classes.socialBtn}>
                                {getIconElement(socail)}
                            </Button>
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

export default Header;
