
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { makeStyles } from '@material-ui/core/styles';

import { CHIP_STYLE, COPY_BTN_STYLE } from '../../Static/Constants/constants';
import { TRANSLATIONS } from '../../Static/Translations/translations';

const useStyles = makeStyles(() => ({
    chip: CHIP_STYLE,
    copyBtn: COPY_BTN_STYLE
}));

const Contact = ({ language }) => {
    const classes = useStyles();
    const [email] = useState('maxy1972@gmail.com');

    return (
        <div className='contact'>
            <div className='party-img'></div>
            <div className='title'>
                {TRANSLATIONS['navigation'][language]['kapcsolat']}
            </div>
            <div className='contact-text'>
                {TRANSLATIONS['contact'][language]}
            </div>
            <div>
                <Chip variant='outlined' className={classes.chip} label={email} />
                <Tooltip title='Másolás a vágólapra' placement='right'>
                    <IconButton
                        aria-label='copy'
                        className={classes.copyBtn}
                        onClick={() => { navigator.clipboard.writeText(email) }}
                    >
                        <FileCopyIcon />
                    </IconButton>
                </Tooltip>
            </div>

        </div>
    )
}

Contact.propTypes = {
    language: PropTypes.string.isRequired
}

export default Contact;
