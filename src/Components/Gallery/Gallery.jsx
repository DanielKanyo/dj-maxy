import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { useLightbox } from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';

import { GALLERY_IMAGES } from '../../Static/Constants/constants';

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
    const cellHeight = {
        desktopVisitor: 230,
        mobileVisitor: 240
    };

    const { openLightbox } = useLightbox();
    const [isMobileVisitor, setMobileVisitor] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);

        if (window.innerWidth < 600) {
            setMobileVisitor(true);
        }
    }, []);

    return (
        <div className='gallery'>
            <div className={classes.container}>
                <GridList
                    cellHeight={!isMobileVisitor ? cellHeight.desktopVisitor : cellHeight.mobileVisitor}
                    className={classes.gridList}
                    cols={COLS}
                >
                    {
                        GALLERY_IMAGES.map((image, i) => (
                            <GridListTile
                                key={i}
                                cols={!isMobileVisitor ? image.cols : 3}
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
