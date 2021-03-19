import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { ScrollTo } from 'react-scroll-to';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import './Navigation.css';

import { SECTIONS, SCROLL_PADDING, AVAILABLE_LANGUAGES } from '../../Static/Constants/constants';
import { TRANSLATIONS } from '../../Static/Translations/translations';
import avatarImg from '../../Static/Images/avatar.jpg';

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
    menuBtn: {
        color: 'rgba(255, 255, 255, 0.75)',
    },
    large: {
        width: theme.spacing(6),
        height: theme.spacing(6),
        marginRight: 15
    },
    paper: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        backdropFilter: 'blur(5px)'
    },
    goToTopBtn: {
        color: 'rgba(255, 255, 255, 0.75)',
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    listItem: {
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        '&:last-of-type': {
            borderBottom: '0px',
        }
    }
}));

const Navigation = ({ language, setLanguage }) => {
    const classes = useStyles();
    const [drawer, toggleDrawer] = useState(false);

    const getTopPositionBySelector = (selector) => {
        return document.querySelector(`.${selector}`).offsetTop - SCROLL_PADDING;
    }

    return (
        <div className='navigation'>
            <div className='name-and-avatar-container'>
                <Avatar alt='Maxy' src={avatarImg} className={classes.large} />
                <div>
                    <div className='name'>
                        <span>DJ</span><span>MAXY</span>
                    </div>
                    <span className='service-name'>
                        Maxymoom Party Service
                    </span>
                </div>
            </div>
            <div className='nav-buttons'>
                {
                    SECTIONS.map(section => {
                        return (
                            <ScrollTo key={section.selector}>
                                {({ scroll }) => (
                                    <Button
                                        key={section.selector}
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
            <div className='menu-button-container'>
                <IconButton aria-label='menu' className={classes.menuBtn} onClick={() => toggleDrawer(true)}>
                    <MenuIcon />
                </IconButton>
            </div>

            <SwipeableDrawer
                classes={{ paper: classes.paper }}
                anchor='left'
                open={drawer}
                onClose={() => toggleDrawer(false)}
                onOpen={() => toggleDrawer(true)}
            >
                <div className='drawer-content'>
                    <ScrollTo>
                        {({ scroll }) => (
                            <>
                                <List component='nav'>
                                    {
                                        SECTIONS.map(section => {
                                            return (

                                                <ListItem
                                                    key={section.selector}
                                                    className={classes.listItem}
                                                    button
                                                    onClick={() => scroll({
                                                        y: getTopPositionBySelector(section.selector),
                                                        smooth: true
                                                    })}
                                                >
                                                    <ListItemText primary={TRANSLATIONS['navigation'][language][section.name]} />
                                                </ListItem>
                                            )
                                        })
                                    }
                                </List>
                                <IconButton
                                    aria-label='top'
                                    className={classes.goToTopBtn}
                                    onClick={() => scroll({
                                        y: 0,
                                        smooth: true
                                    })}
                                >
                                    <ArrowUpwardIcon />
                                </IconButton>
                                <div className='language-selector-container-in-menu'>
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
                            </>
                        )}
                    </ScrollTo>
                </div>
            </SwipeableDrawer>
        </div>
    )
}

Navigation.propTypes = {
    language: PropTypes.string.isRequired,
    setLanguage: PropTypes.func.isRequired
}

export default Navigation;
