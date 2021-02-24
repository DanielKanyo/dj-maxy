export const ROUTES = [
    {
        name: 'fooldal',
        path: '/'
    },
    {
        name: 'rolam',
        path: '/about'
    },
    {
        name: 'rendezvenyek',
        path: '/events'
    },
    {
        name: 'galeria',
        path: '/gallery'
    },
    {
        name: 'technika',
        path: '/technics'
    },
    {
        name: 'kapcsolat',
        path: '/contact'
    },
];

export const MY_BTN_STYLE = {
    padding: '12px 32px',
    backgroundColor: '#ff626f',
    color: 'white',
    '&:hover': {
        backgroundColor: '#ff626f',
    }
};

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