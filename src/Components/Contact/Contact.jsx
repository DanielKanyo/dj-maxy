
import { useState } from 'react';
import Chip from '@material-ui/core/Chip';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { makeStyles } from '@material-ui/core/styles';

import { CHIP_STYLE } from '../../Static/Constants/constants';
import { TRANSLATIONS } from '../../Static/Translations/translations';

const useStyles = makeStyles(() => ({
    chip: CHIP_STYLE
}));

const Contact = ({ language }) => {
    const classes = useStyles();
    const [email] = useState('maxy1972@gmail.come');

    return (
        <div className='contact'>
            <div className='party-img'></div>
            <div className='title'>
                {TRANSLATIONS['navigation'][language]['kapcsolat']}
            </div>
            <div className='contact-text'>
                {TRANSLATIONS['contact'][language]}
            </div>
            <Chip
                variant="outlined"
                className={classes.chip}
                label={email}
                onDelete={() => { navigator.clipboard.writeText(email) }}
                deleteIcon={<FileCopyIcon />}
            />
        </div>
    )
}

export default Contact;
