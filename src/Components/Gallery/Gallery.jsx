import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { useLightbox } from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';

import { GALLERY_IMAGES } from '../../Static/Constants/constants';

const GALLERY_CELL_HEIGHT = 230;
const COLS = 3;

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden'
    },
    gridList: {
        width: 900,
    },
    img: {
        cursor: 'zoom-in'
    },
}));

const options = {
    buttons: {
        showDownloadButton: false,
        showThumbnailsButton: false
    }
}

const Gallery = () => {
    const classes = useStyles();
    const { openLightbox } = useLightbox();

    return (
        <div className='gallery'>
            <div className={classes.container}>
                <GridList cellHeight={GALLERY_CELL_HEIGHT} className={classes.gridList} cols={COLS}>
                    {
                        GALLERY_IMAGES.map((image, i) => (
                            <GridListTile
                                key={i}
                                cols={image.cols || 1}
                                onClick={() => openLightbox(i)}
                            >
                                <img src={image.src} alt={image.title} className={classes.img} />
                            </GridListTile>
                        ))
                    }
                </GridList>
            </div>

            <SRLWrapper elements={GALLERY_IMAGES} options={options} />
        </div>
    )
}

export default Gallery;
