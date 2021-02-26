export const SECTIONS = [
    {
        name: 'fooldal',
        selector: 'app'
    },
    {
        name: 'rolam',
        selector: 'about'
    },
    {
        name: 'rendezvenyek',
        selector: 'events'
    },
    {
        name: 'galeria',
        selector: 'gallery'
    },
    {
        name: 'technika',
        selector: 'tech'
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

export const SOCIALS = ['facebook', 'youtube', 'twitter'];

export const AVAILABLE_LANGUAGES = ['srb', 'hun'];

export const SCROLL_PADDING = 50;