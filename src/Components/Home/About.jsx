import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import { MY_BTN_STYLE } from '../../Static/Constants/constants';
import { TRANSLATIONS } from '../../Static/Translations/translations';

const useStyles = makeStyles(() => ({
    btn: MY_BTN_STYLE,
}));

const About = ({ language }) => {
    const classes = useStyles();

    return (
        <div className='about'>
            <div className='about-text-and-btn'>
                <div className='about-title'>{TRANSLATIONS['navigation'][language]['rolam']}</div>
                <div className='text'>
                    {TRANSLATIONS['about_me'][language]}
                </div>
                <div>
                    <Button className={classes.btn} variant='contained'>Tovább</Button>
                </div>
            </div>
            <div className='maxy-img'></div>
        </div>
    )
}

export default About;
