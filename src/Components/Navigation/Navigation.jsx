import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { ScrollTo } from 'react-scroll-to';

import './Navigation.css';

import { SECTIONS, SCROLL_PADDING } from '../../Static/Constants/constants';
import { TRANSLATIONS } from '../../Static/Translations/translations';
import avatarImg from '../../Static/Images/avatar.jpg'

const useStyles = makeStyles((theme) => ({
    navBtn: {
        margin: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        color: 'rgba(255, 255, 255, 0.75)',
        border: '1px solid transparent',
        '&:hover': {
            color: '#ff626f'
        }
    },
    large: {
        width: theme.spacing(6),
        height: theme.spacing(6),
        marginRight: 15
    },
}));

const Navigation = ({ language }) => {
    const classes = useStyles();

    const getTopPositionBySelector = (selector) => {
        return document.querySelector(`.${selector}`).offsetTop - SCROLL_PADDING;
    }

    return (
        <div className='navigation'>
            <div className='name-and-avatar-container'>
                <Avatar alt='Maxy' src={avatarImg} className={classes.large} />
                <span>DJ</span><span>MAXY</span>
            </div>
            <div className='routes'>
                {
                    SECTIONS.map(section => {
                        return (
                            <ScrollTo key={section.selector}>
                                {({ scroll }) => (
                                    <Button
                                        className={classes.navBtn}
                                        onClick={() => scroll({
                                            y: getTopPositionBySelector(section.selector),
                                            smooth: true
                                        })}
                                    >
                                        {TRANSLATIONS['navigation'][language][section.name]}
                                    </Button>
                                )}
                            </ScrollTo>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Navigation;
