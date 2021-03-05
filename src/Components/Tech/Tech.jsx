import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import IconButton from '@material-ui/core/IconButton';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import { CAROUSEL_DATA } from '../../Static/Constants/constants';
import Slides from './Slides';

const useStyles = makeStyles(() => ({
    btn: {
        border: '1px solid rgba(0, 0, 0, 0.54);',
        '&:disabled': {
            borderColor: 'rgba(0, 0, 0, 0.26)',
        }
    },
}));

const Tech = () => {
    const classes = useStyles();
    const [carouselIndex, setCarouselIndex] = useState(0);

    const handleChange = index => {
        setCarouselIndex(index);
    }

    const handleLeftArrowClicked = index => {
        if (index > 0) {
            setCarouselIndex(--index);
        }
    }

    const handleRightArrowClicked = index => {
        if (index < CAROUSEL_DATA.length - 1) {
            setCarouselIndex(++index);
        }
    }

    return (
        <div className='tech'>
            <Carousel
                value={carouselIndex}
                onChange={handleChange}
                slides={Slides()}
            />
            <div className='arrow-contrainer left'>
                <IconButton
                    className={classes.btn}
                    onClick={() => handleLeftArrowClicked(carouselIndex)}
                    disabled={carouselIndex === 0}
                >
                    <NavigateBeforeIcon fontSize='large' />
                </IconButton>
            </div>
            <div className='arrow-contrainer right'>
                <IconButton
                    className={classes.btn}
                    onClick={() => handleRightArrowClicked(carouselIndex)}
                    disabled={carouselIndex === CAROUSEL_DATA.length - 1}
                >
                    <NavigateNextIcon fontSize='large' />
                </IconButton>
            </div>
        </div>
    )
}

export default Tech;
