import img1 from '../Images/RCF-HD-10-A-MKIV.png';
import img2 from '../Images/RCF-SUB-905-AS-II-Active-Subwoofer.png';
import img3 from '../Images/Showtec-XS-2-dual-LED-Movinghead.png';
import img4 from '../Images/Pioneer-XDJ-RX2.png';
import img5 from '../Images/RCF-F12-XR-Audio-Mixer.png';
import img6 from '../Images/18-LED-3W-PAR.png';
import img7 from '../Images/American-DJ-deck-stand.png';
import img8 from '../Images/Mozgofejes-LED.png';
import img9 from '../Images/INVISION-COMPACT-FOG-1500-FOG-Machine.png';
import galleryImg1 from '../Images/maxy_aboutme.jpg';

export const SECTIONS = [
    {
        name: 'rolam',
        selector: 'about'
    },
    {
        name: 'rendezvenyek',
        selector: 'events'
    },
    {
        name: 'technika',
        selector: 'tech'
    },
    {
        name: 'galeria',
        selector: 'gallery'
    },
    {
        name: 'kapcsolat',
        selector: 'contact'
    }
];

export const SOCIAL_BTN_STYLE = {
    borderRadius: '50%',
    marginTop: 8,
    marginBottom: 8,
    padding: 0,
    height: 60,
    width: 60,
    color: 'rgba(255, 255, 255, 0.75)',
    border: '1px solid rgba(255, 255, 255, 0.75)',
    transition: 'none',
    '&:hover': {
        color: '#ff626f',
        borderColor: '#ff626f',
    }
};

export const LANGUAGE_BTN_STYLE = {
    color: 'rgba(255, 255, 255, 0.75)',
    '&[active=true]': {
        color: '#ff626f',
        border: '1px solid #ff626f',
    }
};

export const SOCIALS = [
    {
        text: 'facebook',
        link: 'https://www.facebook.com/Dj-Maxy-353060711440920'
    },
    {
        text: 'instagram',
        link: 'https://www.instagram.com/djmaxy/'
    }
];

export const AVAILABLE_LANGUAGES = ['srb', 'hun'];

export const SCROLL_PADDING = 50;

export const CAROUSEL_DATA = [
    {
        src: img1,
        txt: 'RCF HD-10-A - MKIV - 4 drb'
    },
    {
        src: img2,
        txt: 'RCF- SUB-905-AS-II-Active Subwoofer - 2 drb'
    },
    {
        src: img3,
        txt: 'Showtec XS-2 dual LED Movinghead - 2 drb'
    },
    {
        src: img4,
        txt: 'Pioneer XDJ - RX II'
    },
    {
        src: img5,
        txt: 'RCF - F12-XR - Audio Mixer - Zenekari mixer'
    },
    {
        src: img6,
        txt: '18-LED 3W PAR Lámpa - 4 drb'
    },
    {
        src: img7,
        txt: 'American-DJ-deck stand'
    },
    {
        src: img8,
        txt: 'Moving Head LED Wash Light'
    },
    {
        src: img9,
        txt: 'INVISION COMPACT FOG 1500'
    }
];

export const GALLERY_IMAGES = [
    {
        src: galleryImg1,
        title: 'Image',
        cols: 1,
    },
    {
        src: galleryImg1,
        title: 'Image',
        cols: 1,
    },
    {
        src: galleryImg1,
        title: 'Image',
        cols: 1,
    },
    {
        src: galleryImg1,
        title: 'Image',
        cols: 1,
    },
    {
        src: galleryImg1,
        title: 'Image',
        cols: 1,
    },
    {
        src: galleryImg1,
        title: 'Image',
        cols: 1,
    },
];

export const CHIP_STYLE = {
    zIndex: 2,
    padding: 12,
    height: 50,
    borderColor: 'rgba(255, 255, 255, 0.75)',
    color: 'rgba(255, 255, 255, 0.75)',
    borderRadius: 25,
    '& span': {
        fontSize: 16
    }
}

export const COPY_BTN_STYLE = {
    height: 50,
    width: 50,
    border: '1px solid rgba(255, 255, 255, 0.75)',
    marginLeft: 15,
    color: 'rgba(255, 255, 255, 0.75)',
    '&:hover': {
        color: 'rgba(255, 255, 255, 1)',
        border: '1px solid rgba(255, 255, 255, 1)',
    }
}
