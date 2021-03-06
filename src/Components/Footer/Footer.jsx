import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
    btn: {
        margin: theme.spacing(.2),
    }
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className='footer'>
            <div>
                Copyright © {new Date().getFullYear()}
            </div>
            <div className='footer-social'>
                <IconButton aria-label='delete' className={classes.btn}>
                    <FacebookIcon />
                </IconButton>
                <IconButton aria-label='delete' className={classes.btn}>
                    <YouTubeIcon />
                </IconButton>
                <IconButton aria-label='delete' className={classes.btn}>
                    <TwitterIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Footer;
