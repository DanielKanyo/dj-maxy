import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import SimpleReactLightbox from 'simple-react-lightbox';

ReactDOM.render(
    <SimpleReactLightbox>
        <App />
    </SimpleReactLightbox>,
    document.getElementById('root')
);
