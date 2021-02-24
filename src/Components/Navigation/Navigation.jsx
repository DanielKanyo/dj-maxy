import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { useLocation } from 'react-router-dom';

import './Navigation.css';

import { ROUTES } from '../../Static/Constants/constants';
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
        },
        '&[active=true]': {
            color: '#ff626f',
            border: '1px solid #ff626f',
        }
    },
    large: {
        width: theme.spacing(6),
        height: theme.spacing(6),
        marginRight: 15
    },
}));

const Navigation = ({ language }) => {
    const location = useLocation();
    const classes = useStyles();

    return (
        <div className='navigation'>
            <div className='name-and-avatar-container'>
                <Avatar alt='Maxy' src={avatarImg} className={classes.large} />
                <span>DJ</span><span>MAXY</span>
            </div>
            <div className='routes'>
                {
                    ROUTES.map((route, i) => {
                        return (
                            <Link key={i} to={route.path}>
                                <Button
                                    className={classes.navBtn}
                                    active={(route.path === location.pathname).toString()}
                                >
                                    {TRANSLATIONS['navigation'][language][route.name]}
                                </Button>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Navigation;
