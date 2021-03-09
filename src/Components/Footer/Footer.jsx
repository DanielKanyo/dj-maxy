import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { ScrollTo } from 'react-scroll-to';

import { SOCIALS } from '../../Static/Constants/constants';

const useStyles = makeStyles((theme) => ({
    btn: {
        margin: theme.spacing(.2),
    },
    goToTopBtn: {
        position: 'absolute',
        right: 40
    }
}));

const Footer = () => {
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
        <div className='footer'>
            <div>
                Copyright © {new Date().getFullYear()}
            </div>
            <div className='footer-social'>
                {
                    SOCIALS.map(socail => {
                        return (
                            <a href={socail.link} key={socail.text} target='_blank' rel='noreferrer'>
                                <IconButton aria-label='social' className={classes.btn}>
                                    {getIconElement(socail.text)}
                                </IconButton>
                            </a>
                        )
                    })
                }
            </div>

            <ScrollTo>
                {({ scroll }) => (
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
                )}
            </ScrollTo>
        </div>
    )
}

export default Footer;
